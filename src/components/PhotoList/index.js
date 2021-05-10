import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();


  const [photos] = useState([
    {
      name: 'Weekly Food Planner 1.0',
      category: 'Portfolio',
      description:'An app for meal planning',
      link: "https://github.com/alehr45/weekly-food-planner",
      link2: "https://alehr45.github.io/weekly-food-planner"
    },
    {
      name: 'Gamer-Spot',
      category: 'Portfolio',
      description: 'An online video game store',
      link: "https://github.com/alehr45/gamer-spot",
      link2: "https://gamer-spot-45.herokuapp.com"
    },
    {
      name: 'Team Profile Generator',
      category: 'Portfolio',
      description: 'A node.js team profile generator',
      link: 'https://github.com/alehr45/team-profile-generator',
      link2: "https://alehr45.github.io/team-profile-generator"
    },
    {
      name: 'Note Taker',
      category: 'Portfolio',
      description: 'A quick and easy to use note taker application',
      link: ' https://github.com/alehr45/note-taker',
      link2: "https://note-taker005.herokuapp.com"
    },
    {
      name: 'Budget Tracker',
      category: 'Portfolio',
      description: 'A simple budget tracker app with online and offline functionality',
      link: 'https://github.com/alehr45/budget-tracker',
      link2: "https://budget-tracker-45.herokuapp.com"
    },
       {
      name: 'Run Buddy',
      category: 'Portfolio',
      description: '',
      link: 'https://github.com/alehr45/run-buddy',
      link2: "https://alehr45.github.io/run-buddy"
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
