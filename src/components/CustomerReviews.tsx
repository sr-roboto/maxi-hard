import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { CustomerReview } from '../types/Product';

interface CustomerReviewsProps {
  reviews: CustomerReview[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              {' '}Clientes
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Testimonios reales de gamers satisfechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs">Verificado</span>
                  </div>
                )}
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                "{review.comment}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{review.name}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(review.date).toLocaleDateString('es-AR')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">4.8</div>
            <div className="text-gray-400">Calificación promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">1,250+</div>
            <div className="text-gray-400">Clientes satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">98%</div>
            <div className="text-gray-400">Recomendaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">24h</div>
            <div className="text-gray-400">Tiempo de respuesta</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;