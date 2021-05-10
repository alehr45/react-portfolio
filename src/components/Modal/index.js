import React from 'react';


const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, link, link2 } = currentPhoto;

 
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
        <button type="button" onClick={event =>  window.location.href=`${link2}`}>
          Go to site
        </button>
        
        <button type="button" onClick={event =>  window.location.href=`${link}`}>
          Go to Github repo
        </button>
      </div>
    </div>
  );
};

export default Modal;
