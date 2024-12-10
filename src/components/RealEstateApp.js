import React, { useState } from 'react';
import { Star, MapPin, Calculator, Heart, Share2, Phone, Mail, Calendar, ChevronLeft, ChevronRight, Search, Bed, Bath, Maximize2, DollarSign } from 'lucide-react';

const RealEstateApp = () => {
  // State management
  const [filters, setFilters] = useState({
    priceRange: [200000, 800000],
    propertyType: 'all',
    location: '',
    bedrooms: 'any',
    bathrooms: 'any',
  });

  const [favorites, setFavorites] = useState(new Set());
  
  // Sample data
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      price: 450000,
      type: "Condo",
      location: "Downtown",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      yearBuilt: 2020,
      images: ["/api/placeholder/800/600"],
      status: "For Sale"
    },
    {
      id: 2,
      title: "Suburban Family Home",
      price: 650000,
      type: "Single Family",
      location: "Suburbs",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      yearBuilt: 2018,
      images: ["/api/placeholder/800/600"],
      status: "For Sale"
    }
  ];

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId);
      } else {
        newFavorites.add(propertyId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => toggleFavorite(property.id)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.has(property.id) ? 'text-red-500 fill-red-500' : ''
                  }`}
                />
              </button>
              <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-full">
                ${property.price.toLocaleString()}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="font-semibold">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Beds</div>
                </div>
                <div>
                  <div className="font-semibold">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Baths</div>
                </div>
                <div>
                  <div className="font-semibold">{property.sqft}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstateApp;