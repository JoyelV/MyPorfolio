import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'Portfolio - Joyel Varghese',
  description: 'MERN Stack Developer with hands-on experience building web applications',
  openGraph: {
    title: 'Joyel Varghese - MERN Stack Developer',
    description: 'Explore my portfolio of web development projects built with the MERN stack.',
    images: ['/profile-img.jpeg'],
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000', 
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}