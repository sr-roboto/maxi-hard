import React from 'react';
import { ChevronRight, Zap, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hardware
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  {' '}Gamer
                </span>
                <br />
                de Alto Rendimiento
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Descubre la mejor selección de componentes gaming. RTX 4000 Series, 
                AMD Ryzen, y todo lo que necesitas para dominar cada partida.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                Ver Productos
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Ofertas Especiales
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Alto Rendimiento</h3>
                  <p className="text-gray-400 text-sm">Componentes premium</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Garantía Total</h3>
                  <p className="text-gray-400 text-sm">Soporte completo</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <Truck className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Envío Rápido</h3>
                  <p className="text-gray-400 text-sm">24-48 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl"></div>
            <img
              src="https://images.pexels.com/photos/7148991/pexels-photo-7148991.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gaming Setup"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4">
              <p className="text-red-400 font-semibold">Nuevo</p>
              <p className="text-white font-bold text-lg">RTX 4080 SUPER</p>
              <p className="text-gray-300">Desde $899.999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;