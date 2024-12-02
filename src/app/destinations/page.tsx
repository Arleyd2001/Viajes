import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: '/bali.jpg',
    description: 'Experience the beauty of Bali with its stunning beaches, lush rice terraces, and vibrant culture.',
    price: 'From $799',
    link: '/destinations/bali',
  },
  {
    id: 2,
    name: 'Paris, France',
    image: '/paris.jpg',
    description: 'Discover the romance of Paris, from the iconic Eiffel Tower to world-class museums and charming cafes.',
    price: 'From $699',
    link: '/destinations/paris',
  },
  {
    id: 3,
    name: 'Santorini, Greece',
    image: '/santorini.jpg',
    description: 'Explore the breathtaking beauty of Santorini with its white-washed buildings and stunning sunsets.',
    price: 'From $899',
    link: '/destinations/santorini',
  },
  {
    id: 4,
    name: 'Tokyo, Japan',
    image: '/tokyo.jpg',
    description: "Immerse yourself in the unique blend of tradition and modernity in Tokyo, Japan's bustling capital.",
    price: 'From $999',
    link: '/destinations/tokyo',
  },
  {
    id: 5,
    name: 'New York City, USA',
    image: '/new-york.jpg',
    description: 'Experience the energy of the Big Apple with its iconic skyline, world-class entertainment, and diverse culture.',
    price: 'From $799',
    link: '/destinations/new-york',
  },
  {
    id: 6,
    name: 'Machu Picchu, Peru',
    image: '/machu-picchu.jpg',
    description: 'Discover the ancient wonders of Machu Picchu, nestled high in the Andes Mountains.',
    price: 'From $1,299',
    link: '/destinations/machu-picchu',
  },
]

export default function Destinations() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <Link key={destination.id} href={destination.link} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{destination.price}</span>
                  <span className="text-blue-600 group-hover:underline">Learn More</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

