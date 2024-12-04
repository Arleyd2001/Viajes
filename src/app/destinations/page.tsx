'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const destinations = [
  {
    id: 1,
    name: 'Ibiza, España',
    images: ['/ibiza2.jpeg', '/ibiza3.jpg', '/ibiza1.jpeg'],
    description: 'Vive la experiencia única de las mejores fiestas, playas paradisíacas y eventos épicos en Ibiza.',
    price: 'Desde 5,287,500 COP',
    file: '/docs/itinerario.pdf',
  }
];

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative h-[35vh]">
          <Image
            src={image}
            alt={`Ibiza - Image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default function Destinations() {
  return (
    <div className="min-h-screen">
      <div className="relative mb-8">
        <ImageSlider images={destinations[0].images} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl font-bold mb-2 text-center">¡Vive Ibiza al máximo!</h1>
          <p className="text-lg mb-4 text-center max-w-xl">{destinations[0].description}</p>
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 font-extrabold text-xl">
              {destinations[0].price}
            </span>
            <a
              href={destinations[0].file}
              download
              className="text-white bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 rounded-md font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300 text-base"
            >
              ¡Descúbrelo!
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Información de Ibiza */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Información Útil sobre Ibiza</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cultura */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Cultura</h3>
            <p className="text-gray-600 mb-4">
              La isla es famosa por su ambiente relajado y bohemio, ideal para disfrutar de fiestas épicas y explorar sitios históricos como Dalt Vila. ¡La fiesta nunca termina aquí!
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Fiesta Flower Power: Un evento lleno de música psicodélica y colores vibrantes.</li>
              <li>Amnesia: Fiestas electrónicas con DJs internacionales hasta el amanecer.</li>
            </ul>
          </div>

          {/* Gastronomía */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Gastronomía</h3>
            <p className="text-gray-600 mb-4">
              Prueba los platos típicos de la isla, como el Bullit de Peix y el Sofrit Pagès, perfectos para recargar energías antes de una noche de fiesta.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Bullit de Peix: Un guiso de pescado fresco de la isla.</li>
              <li>Sofrit Pagès: Un delicioso estofado que te dejará sin palabras.</li>
              <li>Flaó: Un postre típico para ponerle el toque final a tu comida.</li>
            </ul>
          </div>

          {/* Clima */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Clima</h3>
            <p className="text-gray-600 mb-4">
              Ibiza tiene un clima mediterráneo, ideal para disfrutar del sol y las fiestas durante todo el año. ¡Prepárate para el calor del verano y noches frescas!
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Verano: Lleva ropa ligera y protector solar para disfrutar de las playas y fiestas.</li>
              <li>Invierno: Perfecto para escapar del frío, con temperaturas más frescas y menos turistas.</li>
            </ul>
          </div>

          {/* Transporte */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Transporte</h3>
            <p className="text-gray-600 mb-4">
              Ibiza es fácil de recorrer, con opciones de transporte rápido y divertido, ¡ideal para moverse entre las fiestas y playas!
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Taxis y coches alquilados: Perfectos para moverte entre discotecas.</li>
              <li>Fiestas flotantes: Vive la experiencia de la fiesta en alta mar.</li>
              <li>Barcos a Formentera: Escápate a la isla vecina para continuar la aventura.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

