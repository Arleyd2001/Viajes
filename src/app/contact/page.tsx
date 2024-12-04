'use client'

import { useState } from 'react'
import ChatBot from '../components/ChatBot';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí normalmente enviarías los datos del formulario a tu backend
    console.log('Formulario enviado:', formData)
    // Resetear formulario después de enviar
    setFormData({ name: '', email: '', message: '' })
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">Contáctanos</h1>
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>

      <div className="mt-16 text-center text-orange-600">
        <h2 className="text-2xl font-bold mb-4">Visítanos</h2>
        <p>Calle 10 #25-45, Medellín, Colombia</p>
        <p>Teléfono: +57 (4) 123-4567</p>
        <p>Email: contacto@partyandsunibiza.com</p>
        <p>Horario de Atención: Lunes - Viernes, 9am - 5pm</p>
      </div>
      <ChatBot />
    </div>
  )
}





