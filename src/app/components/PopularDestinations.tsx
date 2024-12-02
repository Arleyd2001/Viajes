import Image from 'next/image'
import Link from 'next/link'

const popularDestinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: '/bali.jpg',
    price: 'From $799',
    link: '/destinations/bali',
  },
  {
    id: 2,
    name: 'Paris, France',
    image: '/paris.jpg',
    price: 'From $699',
    link: '/destinations/paris',
  },
  {
    id: 3,
    name: 'Santorini, Greece',
    image: '/santorini.jpg',
    price: 'From $899',
    link: '/destinations/santorini',
  },
  {
    id: 4,
    name: 'Tokyo, Japan',
    image: '/tokyo.jpg',
    price: 'From $999',
    link: '/destinations/tokyo',
  },
]

const PopularDestinations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {popularDestinations.map((destination) => (
        <Link key={destination.id} href={destination.link} className="group">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                <p className="text-sm">{destination.price}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PopularDestinations

