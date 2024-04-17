import React, { useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';

const profilepictureLogic = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    try {
      const formData = new FormData();
      formData.append('file', image);

      const response = await fetch('https://api.cloudinary.com/v1_1/<TU_CLOUD_NAME>/image/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.secure_url;
        console.log('Imagen subida:', imageUrl);
      } else {
        console.error('Error al subir la imagen');
      }
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <Image publicId={image} width="150">
            <Transformation width="150" height="150" crop="fill" />
          </Image>
          <button onClick={handleUpload}>Actualizada</button>
        </div>
      )}
    </div>
  );
};

export default profilepictureLogic;
