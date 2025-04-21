'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          🌾 Agri AI Dashboard
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
