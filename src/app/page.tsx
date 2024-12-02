import Image from 'next/image'
import Link from 'next/link'
import FeaturedSlider from './components/FeaturedSlider'
import PopularDestinations from './components/PopularDestinations'
import ChatBot from './components/ChatBot';

export default function Home() {
  return (
    <div className="pt-16">
      <section className="relative h-[600px]">
        <Image
          src="/hero-image.jpg"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
            <p className="text-xl mb-8">Explore the world with Wanderlust Travel Agency</p>
            <Link
              href="/destinations"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Promotions</h2>
          <FeaturedSlider />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
          <PopularDestinations />
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Book your dream vacation today and create unforgettable memories.</p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
      <div>
      {/* Your page content */}
      <ChatBot />
    </div>
    </div>
  )
}

