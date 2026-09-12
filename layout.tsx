import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cinepulso',
  description: 'Catálogo de series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
