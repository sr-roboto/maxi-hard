import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin, Clock } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de suscripción
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de contacto
    alert('Mensaje enviado. Te contactaremos pronto!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Suscríbete a nuestras
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  {' '}Ofertas
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Recibe las mejores ofertas y lanzamientos directamente en tu email
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
                Suscribirse
              </button>
            </form>

            {isSubscribed && (
              <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-4">
                <p className="text-green-400 font-semibold">
                  ¡Gracias! Te has suscrito exitosamente.
                </p>
              </div>
            )}

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Beneficios de suscribirse:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Ofertas exclusivas para suscriptores</li>
                <li>• Primeros en conocer nuevos lanzamientos</li>
                <li>• Descuentos especiales en productos seleccionados</li>
                <li>• Guías y consejos de gaming</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Contáctanos
              </h2>
              <p className="text-gray-400 text-lg">
                ¿Tienes alguna pregunta? Estamos aquí para ayudarte
              </p>
            </div>

            <form onSubmit={handleContact} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tu mensaje"
                required
                rows={4}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Enviar Mensaje
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-red-400" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-red-400" />
                <span>info@maxihard.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="h-5 w-5 text-red-400" />
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;