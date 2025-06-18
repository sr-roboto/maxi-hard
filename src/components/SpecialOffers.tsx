import React, { useState, useEffect } from 'react';
import { Clock, ShoppingCart, Flame } from 'lucide-react';
import { Product } from '../types/Product';

interface SpecialOffersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ products, onAddToCart }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offersProducts = products.filter(product => product.originalPrice);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section id="ofertas" className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="h-8 w-8 text-red-500" />
            <h2 className="text-4xl font-bold text-white">
              Ofertas
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                {' '}Especiales
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg mb-8">
            Precios increíbles por tiempo limitado
          </p>

          {/* Countdown Timer */}
          <div className="bg-black/50 backdrop-blur-sm border border-red-600/30 rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-semibold">Oferta termina en:</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { value: timeLeft.days, label: 'Días' },
                { value: timeLeft.hours, label: 'Horas' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Seg' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white font-bold text-xl p-2 rounded-lg">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersProducts.map((product) => (
            <div
              key={product.id}
              className="bg-black border-2 border-red-600/50 rounded-xl overflow-hidden hover:border-red-600 transition-all duration-300 group hover:transform hover:scale-[1.02] relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  -{calculateDiscount(product.originalPrice!, product.price)}%
                </div>
              </div>

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-red-400 text-sm font-medium">{product.brand}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  {product.name}
                </h3>

                <div className="space-y-2 mb-4">
                  {product.specs.slice(0, 2).map((spec, index) => (
                    <div key={index} className="text-gray-400 text-sm">
                      • {spec}
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-lg line-through">
                      {formatPrice(product.originalPrice!)}
                    </span>
                    <span className="text-red-400 font-semibold">
                      Ahorras {formatPrice(product.originalPrice! - product.price)}
                    </span>
                  </div>
                  <div className="text-white font-bold text-2xl">
                    {formatPrice(product.price)}
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Aprovechar Oferta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;