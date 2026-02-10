import './globals.css';
import SessionProviderWrapper from './SessionProviderWrapper';

export const metadata = {
  title: 'Company Dashboard',
  description: 'Dashboard App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
