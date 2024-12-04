import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Sección principal de introducción */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-center md:text-left mb-4">
            Bienvenido a Party and Sun Ibiza
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Prepárate para la aventura definitiva en Ibiza, donde el sol brilla durante el día y las noches están llenas de energía vibrante. En Party and Sun Ibiza, nos especializamos en crear experiencias inolvidables para los amantes de la fiesta y los buscadores de adrenalina. Ya sea que vengas por fiestas de clase mundial, playas impresionantes o actividades llenas de emoción, nosotros nos encargamos de todo.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Nuestra misión es simple: hacer que tu experiencia en Ibiza sea extraordinaria. Con itinerarios personalizados, acceso exclusivo a fiestas y aventuras llenas de adrenalina, nos aseguramos de que tu viaje sea uno que nunca olvidarás. Deja que el día brille y la noche vibre con nosotros.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <video
            src="/videos/ibiza-promo.mp4" // Coloca el nombre de tu video aquí
            width={500}
            height={400}
            className="object-cover rounded-lg shadow-lg"
            controls
          >
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </div>
        {/* Sección para la canción MP3 */}
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Escucha el ritmo de Ibiza
          </h3>
          <audio controls className="w-full md:w-1/2 mx-auto">
            <source src="/audio/ibiza-beats.mp3" type="audio/mp3" />
            Tu navegador no soporta la etiqueta de audio.
          </audio>
        </div>


      {/* Lema de la agencia */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Where the Day Shines and the Night Vibrates
        </h2>
        <p className="text-lg text-gray-600">
          Party and Sun Ibiza no es solo una agencia de viajes. Somos tu puerta de entrada a una aventura electrizante. Desde fiestas en la playa al amanecer hasta la vida nocturna vibrante, creamos el equilibrio perfecto entre relajación y emoción.
        </p>
      </div>
    </div>
  )
}

