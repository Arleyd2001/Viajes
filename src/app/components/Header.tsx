import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white bg-opacity-90 fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Wanderlust
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/destinations" className="text-gray-700 hover:text-blue-600">
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="text-gray-700 hover:text-blue-600">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

