import 'bootstrap/dist/css/bootstrap.min.css';
import ClientLayout from '@/components/ClientLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

