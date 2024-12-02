import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const services = [
  {
    name: "Paquete Básico",
    description: "Ideal para viajeros con presupuesto ajustado",
    price: "$599",
    features: [
      "Vuelos de ida y vuelta",
      "Alojamiento por 3 noches",
      "Traslados aeropuerto-hotel",
    ],
  },
  {
    name: "Paquete Estándar",
    description: "Perfecto para unas vacaciones cómodas",
    price: "$999",
    features: [
      "Vuelos de ida y vuelta",
      "Alojamiento por 5 noches",
      "Traslados aeropuerto-hotel",
      "Tour guiado de medio día",
    ],
  },
  {
    name: "Paquete Premium",
    description: "Para una experiencia de viaje de lujo",
    price: "$1,499",
    features: [
      "Vuelos de ida y vuelta en clase ejecutiva",
      "Alojamiento por 7 noches en hotel 5 estrellas",
      "Traslados privados aeropuerto-hotel",
      "Tour guiado de día completo",
      "Cena gourmet",
    ],
  },
  {
    name: "Paquete Aventura",
    description: "Para los amantes de la adrenalina",
    price: "$1,299",
    features: [
      "Vuelos de ida y vuelta",
      "Alojamiento por 6 noches",
      "Traslados aeropuerto-hotel",
      "Actividades de aventura (rafting, senderismo, etc.)",
      "Equipo de seguridad incluido",
    ],
  },
];

export default function Servicios() {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        Descubre nuestros planes y costos diseñados para hacer tu viaje inolvidable
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-3xl font-bold text-blue-600 mb-4">{service.price}</p>
              <ul className="list-disc list-inside space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
