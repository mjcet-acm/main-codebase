import { Inter, Manrope, JetBrains_Mono, Archivo_Black, Work_Sans } from 'next/font/google';
import './global.css';
import LenisProvider from '@/components/LenisProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
  weight: '400',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata = {
  title: 'ACM MJCET Student Chapter',
  description: 'Official website of the ACM Student Chapter at MJCET — fostering computing excellence, technical innovation, and community among students.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} ${archivoBlack.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased text-white bg-background selection:bg-neon-violet/30 selection:text-white">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
