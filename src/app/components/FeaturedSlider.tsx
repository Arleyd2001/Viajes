'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const featuredPromotions = [
  {
    id: 1,
    title: 'Summer Beach Getaway',
    description: 'Enjoy 30% off on all beach resorts',
    image: '/beach-promo.jpg',
    link: '/destinations/beach',
  },
  {
    id: 2,
    title: 'Mountain Adventure Package',
    description: 'Book now and get a free hiking tour',
    image: '/mountain-promo.jpg',
    link: '/destinations/mountain',
  },
  {
    id: 3,
    title: 'City Break Deals',
    description: 'Explore vibrant cities at unbeatable prices',
    image: '/city-promo.jpg',
    link: '/destinations/city',
  },
]

const FeaturedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
  })

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider h-[400px]">
          {featuredPromotions.map((promo)=> (
            <div key={promo.id} className="keen-slider__slide relative">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                  <p className="mb-4">{promo.description}</p>
                  <Link
                    href={promo.link}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-4">
            {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-3 w-3 rounded-full mx-1 ${
                  currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className="sr-only">Slide {idx + 1}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default FeaturedSlider

