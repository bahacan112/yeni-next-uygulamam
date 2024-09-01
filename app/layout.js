"use client";
import Link from "next/link";
import { SessionProvider } from 'next-auth/react';
import AuthButton from './components/AuthButton';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <SessionProvider>

        <header>
          <h1>MY BLOG</h1>
        </header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/new">New Post</Link>
        </nav>
        <AuthButton />
        {children}
        <footer>
          <p>© 2024 My Blog</p>
        </footer>
        </SessionProvider>

      </body>
    </html>
  );
}
