import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types/Product';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onAddToCart }) => {
  const featuredProducts = products.filter(product => product.isFeatured);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Productos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              {' '}Destacados
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Los componentes más potentes y populares para tu setup gaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group hover:transform hover:scale-[1.02]"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Nuevo
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-red-400 text-sm font-medium">{product.brand}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews})</span>
                </div>

                <div className="space-y-2 mb-4">
                  {product.specs.slice(0, 2).map((spec, index) => (
                    <div key={index} className="text-gray-400 text-sm">
                      • {spec}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    {product.originalPrice && (
                      <span className="text-gray-500 text-sm line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                    <div className="text-white font-bold text-xl">
                      {formatPrice(product.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;