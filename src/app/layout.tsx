import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alwibster eCommerce',
  description: 'ecommerce solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
