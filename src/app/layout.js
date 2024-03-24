export const metadata = {
  title: 'Anonymous Posting',
  description: 'Created by Will, Millie & Ben',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
