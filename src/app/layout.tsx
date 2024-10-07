import { Metadata } from 'next';
import { Roboto } from 'next/font/google'
import '@/styles/globals.css';
import Providers from './Providers';
 
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500','700'],
})


export const metadata: Metadata = {
  title: "Movie App",
  description: "Created by Herbert Ntim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
