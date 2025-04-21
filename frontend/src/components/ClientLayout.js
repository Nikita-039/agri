// components/ClientLayout.js
'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <>
      {!isLandingPage && <Navbar />}
      <main className={`p-4 ${!isLandingPage ? 'mt-4' : ''}`}>
        {children}
      </main>
    </>
  );
}
