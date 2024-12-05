import React, { useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([
    { id: 1, url: 'https://picsum.photos/id/1018/800/600', title: 'Mountain Landscape' },
    { id: 2, url: 'https://picsum.photos/id/1015/800/600', title: 'River Scene' },
    { id: 3, url: 'https://picsum.photos/id/1019/800/600', title: 'Lake View' },
    { id: 4, url: 'https://picsum.photos/id/1020/800/600', title: 'Forest Path' }
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Image Gallery
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-w-full max-h-screen object-contain"
            />
            <p className="text-white text-center mt-4">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ImageGallery />
    </div>
  );
}

export default App;