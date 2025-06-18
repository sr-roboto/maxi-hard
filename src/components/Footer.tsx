import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Shield, Truck, CreditCard, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-white font-bold text-xl">MaxiHard</span>
            </div>
            <p className="text-gray-400">
              Tu tienda especializada en hardware gaming de alta performance. 
              Componentes premium para gamers exigentes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-red-400 transition-colors">Inicio</a></li>
              <li><a href="#productos" className="text-gray-400 hover:text-red-400 transition-colors">Productos</a></li>
              <li><a href="#ofertas" className="text-gray-400 hover:text-red-400 transition-colors">Ofertas</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-red-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Categorías</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Placas de Video</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Procesadores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Memorias RAM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Periféricos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Garantías</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-gray-800 mt-8">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-red-400" />
            <div>
              <h4 className="text-white font-semibold">Garantía Total</h4>
              <p className="text-gray-400 text-sm">Productos originales</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="h-8 w-8 text-red-400" />
            <div>
              <h4 className="text-white font-semibold">Envío Gratis</h4>
              <p className="text-gray-400 text-sm">En compras +$100k</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CreditCard className="h-8 w-8 text-red-400" />
            <div>
              <h4 className="text-white font-semibold">Pago Seguro</h4>
              <p className="text-gray-400 text-sm">Múltiples métodos</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-red-400" />
            <div>
              <h4 className="text-white font-semibold">Soporte 24/7</h4>
              <p className="text-gray-400 text-sm">Asistencia experta</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MaxiHard. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Términos de Servicio</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;