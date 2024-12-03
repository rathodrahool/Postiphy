'use client';

import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import BrandHeader from '../components/BrandHeader';
import Title from '../components/Title';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import HookTable from '../components/HookTable';
import ErrorMessage from '../components/ErrorMessage';
import { generateHooks } from '../utils/gemini';
import { validateConfig } from '../config';
import toast from 'react-hot-toast';

export default function Home() {
  const [description, setDescription] = useState('');
  const [hooks, setHooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preferredScore, setPreferredScore] = useState(null);
  const [configValid, setConfigValid] = useState(true);

  useEffect(() => {
    try {
      validateConfig();
    } catch (error) {
      setConfigValid(false);
      setError(error.message);
    }
  }, []);

  const handleGenerate = async (usePreferredScore = false) => {
    if (!configValid) {
      setError('API configuration is missing. Please check your environment variables.');
      return;
    }

    if (!description.trim()) {
      setError('Please enter a description');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const result = await generateHooks(description, usePreferredScore ? preferredScore : null);
      setHooks(result.hooks);
      toast.success('Hooks generated successfully!');
    } catch (error) {
      setError(error.message);
      setHooks(null);
      toast.error('Failed to generate hooks');
    } finally {
      setLoading(false);
    }
  };

  const handleScoreSelect = (score) => {
    setPreferredScore(score);
    toast.success(`Selected viral score: ${score}/10. Click "Generate More" to get similar hooks!`);
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card>
        <BrandHeader />
        <Title>What's your content about?</Title>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Share your topic or idea, and we'll craft engaging hooks that capture attention..."
          disabled={!configValid}
        />
        <ErrorMessage message={error} />
        <Button onClick={() => handleGenerate(false)} disabled={loading || !configValid}>
          {loading ? 'Crafting hooks...' : 'Generate Hooks'}
        </Button>
        <HookTable 
          hooks={hooks} 
          onGenerateMore={() => handleGenerate(true)}
          onScoreSelect={handleScoreSelect}
        />
      </Card>
    </main>
  );
}