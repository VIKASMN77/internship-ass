import './globals.css';

export const metadata = {
  title: 'Lilac Template',
  description: 'Therapy for Adults in Minneapolis, MN. Live your life in full bloom.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
