'use client';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return isLandingPage ? (
    <main>{children}</main>
  ) : (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 p-4" style={{ marginLeft: '250px' }}>
        {children}
      </main>
    </div>
  );
}

