'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
      <h2 className="fs-4">Agri AI Dashboard</h2>
      <ul className="nav nav-pills flex-column mb-auto mt-4">
        <li className="nav-item">
          <Link href="/dashboard" className={`nav-link ${pathname === '/dashboard' ? 'active' : 'text-white'}`}>Dashboard</Link>
        </li>
        <li>
          <Link href="/rainfall-prediction" className={`nav-link ${pathname === '/rainfall-prediction' ? 'active' : 'text-white'}`}>Rainfall Prediction</Link>
        </li>
        <li>
          <Link href="/crop-yield-analysis" className={`nav-link ${pathname === '/crop-yield-analysis' ? 'active' : 'text-white'}`}>Crop Yield Analysis</Link>
        </li>
      </ul>
    </div>
  );
}
