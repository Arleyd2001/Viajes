import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Planificación Personalizada',
    image: '/planificacion.jpg', // Imagen de alta calidad relacionada con planificación (por ejemplo, mapa, itinerarios)
    description:
      'Crea tu itinerario a medida. Ya sea que busques relajarte en la playa, explorar los mercados hippies, o sumergirte en la vida nocturna, te ayudamos a diseñar el viaje perfecto para ti y tu grupo.',
  },
  {
    id: 2,
    title: 'Recomendaciones Exclusivas',
    image: '/recomendaciones.jpg', // Imagen relacionada con la vida nocturna, restaurantes, fiestas exclusivas
    description:
      'Te damos acceso a las mejores fiestas, restaurantes secretos y actividades locales que no encontrarás en guías turísticas. ¡Solo lo mejor para nuestros viajeros más aventureros!',
  },
  {
    id: 3,
    title: 'Excursiones Privadas',
    image: '/excursiones.jpg', // Imagen de excursiones en Ibiza, como barcos o visitas privadas
    description:
      'Descubre Ibiza desde una perspectiva diferente con nuestras excursiones privadas. Navega hacia Formentera, haz deportes acuáticos, o disfruta de un tour personalizado por las mejores playas.',
  },
  {
    id: 4,
    title: 'Transporte VIP',
    image: '/transporte.jpg', // Imagen de vehículos de lujo o transporte privado
    description:
      'Disfruta de transporte VIP con servicios exclusivos. Te llevamos directamente a donde necesitas estar, ya sea para llegar a una fiesta a tiempo o explorar la isla cómodamente.',
  },
  {
    id: 5,
    title: 'Asesoría 24/7',
    image: '/asesoria.jpg', // Imagen de un servicio al cliente, teléfono o chat
    description:
      '¿Necesitas ayuda en cualquier momento? Nuestro equipo está disponible 24/7 para resolver dudas, realizar ajustes en tu itinerario o recomendarte lugares únicos durante tu viaje.',
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Servicios Personalizados para Tu Aventura en Ibiza</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Detalles adicionales de servicios */}
      <div className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-8">¿Por qué elegir nuestros servicios?</h2>
        <p className="text-gray-600 text-lg mb-4 text-center">
          Nuestro objetivo es brindarte una experiencia única en Ibiza, adaptada completamente a tus gustos y deseos. Ya sea que quieras disfrutar de la mejor fiesta, un día lleno de adrenalina, o simplemente relajarte en un lugar exclusivo, ¡te ayudamos a crear recuerdos inolvidables!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Beneficios adicionales */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Itinerarios Flexibles</h3>
            <p className="text-gray-600">
              Todos nuestros itinerarios se adaptan a tus intereses. ¿Quieres más fiesta? ¿Un día de aventura? ¡Dínoslo y personalizamos cada detalle!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Conexiones Locales Exclusivas</h3>
            <p className="text-gray-600">
              Gracias a nuestras conexiones locales, te ofrecemos acceso a experiencias que otros turistas no tienen, como fiestas privadas y lugares secretos.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Asesoría Personalizada</h3>
            <p className="text-gray-600">
              Recibe recomendaciones personalizadas basadas en tus gustos y preferencias. Te ayudamos a escoger la mejor opción para cada momento del viaje.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Experiencias Extremas</h3>
            <p className="text-gray-600">
              Si buscas algo fuera de lo común, tenemos actividades extremas como paracaidismo, rutas en quads y fiestas privadas en yates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
