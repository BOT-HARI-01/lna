import React, { useState } from 'react';
import Image from "next/image";
import Styles from './card.module.css'
const HoverCard = ({ src, title, content, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isSaved, setIsSaved] = useState(false); // State to track if the post is saved

  // for saving
  const handleSave = () => {
    setIsSaved(false);
    // use the local storage or better to use db to store the users saved links
    if (!isSaved) {
      alert('Post saved!');
    } else {
      alert('Post removed from saved!');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleNavigate = () => {
    window.open(link, "_blank");
  };

  return (
    <div>
      {/* Small Card */}
      <div className="card my-20"  onClick={openModal}>
        <div className={Styles.cardBody}>
          <Image className={Styles.cardImgTop} src={`http://localhost:3001/proxy_image?url=${encodeURIComponent(src)}`} alt="Card img cap" width={150} height={200} />
          <h5 className="card-title" style={{ color: 'black', padding: '5px',fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</h5>
        </div>
      </div>

      {/*Large Card */}
      {isModalOpen && (
        <div className={Styles.modalOverlay} onClick={closeModal}>
          <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image className={Styles.cardImgExp} src={`http://localhost:3001/proxy_image?url=${encodeURIComponent(src)}`} alt="Card img cap" width={400} height={500} />
            <div className={Styles.cardBody}>
              <h5 className="card-title" style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }}>{title}</h5>
              <p className="card-text" style={{ color: 'gray', fontSize: '1rem' }}>{content}</p>

              {/* Btns */}
              <div className="d-flex justify-content-between">
                <button onClick={handleSave} className="btn btn-primary">
                  {isSaved ? 'Remove from Saved' : 'Save Post'}
                </button>
                <button onClick={handleNavigate} className="btn btn-secondary">
                  Open Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HoverCard;