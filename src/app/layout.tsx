import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@pigment-css/react/styles.css';
import { css } from '@pigment-css/react';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={htmlClass}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

const htmlClass = css`
  background-color: black;
  color: white;

  @media (prefers-color-scheme: light) {
    background-color: white;
    color: black;
  }
`;
