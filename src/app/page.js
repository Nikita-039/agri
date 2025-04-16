'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

export default function Home() {
  const router = useRouter();

  return (
    <div className="text-center mt-5">
      <h1>Welcome to Agri-AI Dashboard</h1>
      <p>Predict Rainfall & Analyze Crop Yield Easily.</p>
      <Button variant="primary" onClick={() => router.push('/dashboard')}>
        Get Started
      </Button>
    </div>
  );
}
