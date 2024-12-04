import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Party and Sun Ibiza Travel Agency',
  description: 'Discover your next adventure with Wanderlust Travel Agency',
  icons: {
    icon: '/icono.jpeg', // Ruta a tu favicon
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* Ajustar el padding-top del main para que el contenido no se cubra con el header */}
        <main className="min-h-screen pt-24"> {/* Aquí agregas padding-top de 24 para que no se cubra el contenido */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}



