// app/page.js
'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`position-relative d-flex flex-column flex-md-row align-items-center justify-content-between min-vh-100 p-5 text-dark overflow-hidden ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: 'linear-gradient(135deg, #f0f0f0, #d3d3d3)', // Grey to white gradient
        transition: 'opacity 1.5s ease-in-out',
      }}
    >
      {/* Background Blobs (SVG) */}
      <svg
        style={{ position: 'absolute', top: '-100px', left: '-100px', zIndex: 0, opacity: 0.1 }}
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="300" fill="#e0e0e0" />
      </svg>
      <svg
        style={{ position: 'absolute', bottom: '-120px', right: '-120px', zIndex: 0, opacity: 0.1 }}
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="250" fill="#cfcfcf" />
      </svg>

      {/* Text Section */}
      <div className="text-center text-md-start mb-5 mb-md-0 col-md-6" style={{ zIndex: 1 }}>
        <h1 className="display-4 fw-bold mb-3">Welcome to Agri-AI Dashboard</h1>
        <p className="lead mb-4">
          🌾 Revolutionizing Agriculture with Machine Learning.<br />
          ☁️ Predict Rainfall • 🌱 Optimize Crop Yield
        </p>
        <blockquote className="blockquote mb-4">
          <p>“Grow smart, not hard.”</p>
        </blockquote>
        <div className="d-flex flex-column flex-sm-row gap-3">
          <Button
            variant="dark"
            size="lg"
            onClick={() => router.push('/dashboard')}
            className="fw-semibold px-4 py-2"
            style={{ transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Get Started
          </Button>
          <Button
            variant="outline-dark"
            size="lg"
            className="fw-semibold px-4 py-2"
            onClick={() => alert('More info coming soon!')}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="col-md-6 d-flex justify-content-center" style={{ zIndex: 1 }}>
        <img
          src="/images/agriculture-hero.png"
          alt="Agri AI Illustration"
          className="img-fluid"
          style={{
            maxHeight: '400px',
            borderRadius: '1rem',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          }}
        />
      </div>
    </div>
  );
}






