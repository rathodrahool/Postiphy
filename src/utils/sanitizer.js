/**
 * Sanitizes and validates the Gemini API response
 */
export function sanitizeGeminiResponse(text) {
  // Extract hooks from the formatted text
  const hookRegex = /Hook \d+:\s*(.*?)\s*\(Viral Potential:\s*(\d+(\.\d+)?)\s*\/\s*10\)/gi;
  const matches = [...text.matchAll(hookRegex)];
  
  const hooks = matches.map(match => ({
    text: match[1].trim(),
    score: parseFloat(match[2])
  })).filter(hook => 
    hook.text && 
    hook.text.length <= 70 && 
    !isNaN(hook.score) && 
    hook.score >= 0 && 
    hook.score <= 10
  );

  // Ensure we have exactly 10 hooks
  if (hooks.length !== 10) {
    // Fallback to line-by-line parsing if exact format isn't matched
    const lines = text.split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('**') && !line.startsWith('Additional'));

    const extractScore = (line) => {
      const scoreMatch = line.match(/\(Viral Potential:\s*(\d+(\.\d+)?)\s*\/\s*10\)/i);
      return scoreMatch ? parseFloat(scoreMatch[1]) : null;
    };

    const fallbackHooks = lines.map(line => {
      const score = extractScore(line);
      const text = line.replace(/\(Viral Potential:\s*\d+(\.\d+)?\s*\/\s*10\)/i, '').trim();
      return {
        text,
        score: score || 7.5
      };
    }).filter(hook => hook.text && hook.text.length <= 70);

    return { hooks: fallbackHooks.slice(0, 10) };
  }

  return { hooks };
}