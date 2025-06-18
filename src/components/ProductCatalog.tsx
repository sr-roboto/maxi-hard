import React, { useState } from 'react';
import { Filter, Grid, List, Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products, onAddToCart, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'gpu', name: 'Placas de Video' },
    { id: 'cpu', name: 'Procesadores' },
    { id: 'ram', name: 'Memorias RAM' },
    { id: 'peripherals', name: 'Periféricos' },
    { id: 'psu', name: 'Fuentes' },
    { id: 'offers', name: 'Ofertas' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="productos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Catálogo de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              {' '}Productos
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Encuentra el hardware perfecto para tu setup
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">Filtrar por:</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-400">
            Mostrando {filteredProducts.length} productos
            {searchQuery && ` para "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-48' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Nuevo
                  </span>
                )}
              </div>

              <div className="p-6 flex-1">
                <div className="mb-2">
                  <span className="text-red-400 text-sm font-medium">{product.brand}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
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

                <div className="space-y-1 mb-4">
                  {product.specs.map((spec, index) => (
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
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;