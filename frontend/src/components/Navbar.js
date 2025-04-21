'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{ backgroundColor: '#006d77' }}
    >
      <div className="container-fluid">
        <Link
          href="/"
          className="navbar-brand"
          style={{
            background: 'linear-gradient(to right, #00b894, #fdcb6e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            fontSize: '1.6rem',
            letterSpacing: '1px',
          }}
        >
          🌾 Agri Ai
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                href="/dashboard"
                className={`nav-link ${pathname === '/dashboard' ? 'active text-white' : ''}`}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/rainfall-prediction"
                className={`nav-link ${pathname === '/rainfall-prediction' ? 'active text-white' : ''}`}
              >
                Rainfall Prediction
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/crop-yield-analysis"
                className={`nav-link ${pathname === '/crop-yield-analysis' ? 'active text-white' : ''}`}
              >
                Crop Yield Analysis
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}





