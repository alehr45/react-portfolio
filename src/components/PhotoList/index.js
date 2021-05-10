import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();


  const [photos] = useState([
    {
      name: 'Weekly Food Planner 1.0',
      category: 'Portfolio',
      description: 'https://alehr45.github.io/weekly-food-planner',
      link: "https://github.com/alehr45/weekly-food-planner "
    },
    {
      name: 'Gamer-Spot',
      category: 'Portfolio',
      description: 'https://gamer-spot-45.herokuapp.com/, https://github.com/alehr45/gamer-spot',
    },
    {
      name: 'Team Profile Generator',
      category: 'Portfolio',
      description: 'https://alehr45.github.io/team-profile-generator/, https://github.com/alehr45/team-profile-generator',
    },
    {
      name: 'Note Taker',
      category: 'Portfolio',
      description: 'https://note-taker005.herokuapp.com/, https://github.com/alehr45/note-taker',
    },
    {
      name: 'Budget Tracker',
      category: 'Portfolio',
      description: 'https://budget-tracker-45.herokuapp.com/, https://github.com/alehr45/budget-tracker',
    },
       {
      name: 'Run Buddy',
      category: 'Portfolio',
      description: 'https://alehr45.github.io/run-buddy/, https://github.com/alehr45/run-buddy',
    },
  ]);


  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
          src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};


export default PhotoList;
