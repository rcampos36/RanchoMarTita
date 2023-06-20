import './globals.css'

export const metadata = {
  title: 'Rancho Mar Tita',
  description: 'hotel page for Rancho Mar Tita using nextjs app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
