/**
 * Centralized prompt management for Gemini API
 */
export const PROMPTS = {
  GENERATE_HOOKS: (topic, preferredScore = null) => `
**Objective:** Generate 10 compelling and relatable hooks for a LinkedIn post based on the following topic.

**Input:** "${topic}"
${preferredScore ? `\nPreferred Viral Score: ${preferredScore}/10` : ''}

**Instructions:**
1. Generate exactly 10 unique hooks
2. Each hook must follow these criteria:
   - Maximum 70 characters
   - Evoke curiosity and connect on a personal level
   - Tell a mini-story when possible
   - Use urgency or challenge to prompt immediate action
   - Avoid buzzwords and complex language
   - Keep it simple and clear
   - Consider the target audience's language
   - Start with questions, relatable scenarios, or calls to action

**Format:**
Hook 1: [Hook text] (Viral Potential: X/10)
Hook 2: [Hook text] (Viral Potential: X/10)
Hook 3: [Hook text] (Viral Potential: X/10)
Hook 4: [Hook text] (Viral Potential: X/10)
Hook 5: [Hook text] (Viral Potential: X/10)
Hook 6: [Hook text] (Viral Potential: X/10)
Hook 7: [Hook text] (Viral Potential: X/10)
Hook 8: [Hook text] (Viral Potential: X/10)
Hook 9: [Hook text] (Viral Potential: X/10)
Hook 10: [Hook text] (Viral Potential: X/10)

Additional Tips:
- Personalize hooks to match writer's voice/experience
- Include mix of styles (humorous, serious, motivational)
- Focus on storytelling and audience connection
- Ensure each hook creates immediate impact

Please provide exactly 10 hooks following this format precisely.`
};