import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { url: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1730805934/oram/m2xuqazvpyjnti6natzb.jpg', alt: 'Placeholder 1' },
  { url: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1730805934/oram/rh5senaibmplp6vevyvv.jpg', alt: 'Placeholder 2' },
  { url: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1730805934/oram/ajgrjtyggrmx16t6t8ff.jpg', alt: 'Placeholder 3' },
  { url: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1730805935/oram/rj4gk8i6k9hjx2ue3c2c.jpg', alt: 'Placeholder 4' },
  { url: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1730805935/oram/y3wxpgxzjosvs7vlh93k.jpg', alt: 'Placeholder 5' },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const goToImage = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto p-6">
      <div className="relative aspect-video mb-6 rounded-lg overflow-hidden shadow-md">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 shadow-lg hover:bg-gray-100 p-3 rounded-full transition duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 shadow-lg hover:bg-gray-100 p-3 rounded-full transition duration-200"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      </div>
      <div className="flex justify-center gap-4 overflow-x-auto py-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`flex-shrink-0 focus:outline-none transition-transform duration-200 hover:scale-105 ${
              index === currentIndex ? 'ring-2 ring-blue-500' : ''
            }`}
            aria-label={`Go to image ${index + 1}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              width={60}
              height={40}
              className="rounded-lg shadow-md object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
