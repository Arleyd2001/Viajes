import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    id: 1,
    name: 'Ibiza, España',
    image: '/ibiza.jpg',
    description: 'Vive la experiencia única de las mejores fiestas, playas paradisíacas y eventos épicos en Ibiza.',
    price: 'Desde 5,287,500 COP',
    file: '/docs/itinerario.pdf', // Ruta pública al archivo PDF
  }
];

export default function Destinations() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">¡Vive Ibiza al máximo!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div key={destination.id} className="group">
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
                  <span className="text-orange-500 font-extrabold text-lg">
                    {destination.price}
                  </span>
                  <a
                    href={destination.file}
                    download
                    className="text-white bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 rounded-md font-bold group-hover:from-orange-600 group-hover:to-red-700 transition-all duration-300"
                  >
                    ¡Descúbrelo!
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de Información de Ibiza */}
      <div className="my-16">
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
