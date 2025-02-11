// import React, { useState } from 'react';
// import Image from "next/image";
// import Styles from './card.module.css'
// const HoverCard = ({ src, title, content, link }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
//   const [isSaved, setIsSaved] = useState(false); // State to track if the post is saved

//   // for saving
//   const handleSave = () => {
//     setIsSaved(false);
//     // use the local storage or better to use db to store the users saved links
//     if (!isSaved) {
//       alert('Post saved!');
//     } else {
//       alert('Post removed from saved!');
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };


//   const closeModal = () => {
//     setIsModalOpen(false);
//   };


//   const handleNavigate = () => {
//     window.open(link, "_blank");
//   };

//   return (
//     <div>
//       {/* Small Card */}
//       <div className="card my-20" onClick={openModal}>
//         <div className={Styles.cardBody}>
//           <Image className={Styles.cardImgTop} src={`http://localhost:3001/proxy_image?url=${encodeURIComponent(src)}`} alt="Card img cap" width={150} height={200} />
//           <h5 className="card-title" style={{ color: 'black', padding: '5px', fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</h5>
//         </div>
//       </div>

//       {/*Large Card */}
//       {isModalOpen && (
//         <div className='hoverContainer'>
//           <div className={Styles.modalOverlay} onClick={closeModal}>
//             <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
//               <Image className={Styles.cardImgExp} src={`http://localhost:3001/proxy_image?url=${encodeURIComponent(src)}`} alt="Card img cap" width={400} height={500} />
//               <div className={Styles.cardBody}>
//                 <h5 className="card-title" style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }}>{title}</h5>
//                 <p className="card-text" style={{ color: 'gray', fontSize: '1rem' }}>{content}</p>

//                 {/* Btns */}
//                 <div className="d-flex justify-content-between">
//                   <button onClick={handleSave} className="btn btn-primary">
//                     {isSaved ? 'Remove from Saved' : 'Save Post'}
//                   </button>
//                   <button onClick={handleNavigate} className="btn btn-secondary">
//                     Open Post
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HoverCard;



// import React, { useState } from "react";
// import Image from "next/image";
// import Styles from "./card.module.css";

// const HoverCard = ({ src, title, content, link }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleNavigate = () => {
//     window.open(link, "_blank");
//   };

//   // Adjust the threshold as needed to trigger scrolling
//   const isContentLarge = content.length > 50; // Condition to check if content length requires scrolling

//   return (
//     <div>
//       {/* Small Card */}
//       <div className="card my-20" onClick={openModal}>
//         <div className={Styles.cardBody}>
//           <Image
//             className={Styles.cardImgTop}
//             src={`http://localhost:3001/proxy_image?url=${encodeURIComponent(src)}`}
//             alt="Card img cap"
//             width={150}
//             height={200}
//           />
//           <h5
//             className="card-title"
//             style={{
//               color: "black",
//               padding: "5px",
//               fontSize: "1.2rem",
//               fontWeight: "bold",
//             }}
//           >
//             {title}
//           </h5>
//         </div>
//       </div>

//       {/* Large Card (Modal) */}
//       {isModalOpen && (
//         <div className="hoverContainer">
//         <div className={Styles.modalOverlay} onClick={closeModal}>
//           <div
//             className={Styles.modalContent}
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               border: "1px solid #ddd", 
//               borderRadius: "8px",
//               display: "flex",
//               flexDirection: "column",
//               backgroundColor: "#fff",
//               position: "relative",
//               // width: "90%", // Control the width of the modal  
//               maxHeight: "100vh", 
//             }}
//           >
//             {/* Header with Open Post Button */}
//             <div
//               style={{
//                 position: "sticky",
//                 top: 0,
//                 zIndex: 1000,
//                 backgroundColor: "#fff",
//                 padding: "10px",
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 alignItems: "center",
//                 borderBottom: "1px solid #ddd",
//               }}
//             >
//               <button
//                 onClick={handleNavigate}
//                 className="btn btn-primary px-4 py-2 shadow border-0 outline-0"
//                 style={{ backgroundColor: "grey" }}
//               >
//                 Open Post
//               </button>
//             </div>
//             {/* Scrollable Content */}
//             <div
//               style={{
//                 flexGrow : '1',
//                 padding: "20px",
//                 maxHeight: "calc(100vh - 160px)", 
//                 overflowY: "auto",
//                 scrollbarWidth: "none",
//               }}
//             >
//               <Image
//                 className={Styles.cardImgExp}
//                 src={`http://localhost:3001/proxy_image?url=${encodeURIComponent(src)}`}
//                 alt="Card img cap"
//                 width={400}
//                 height={500}
//               />
//               <div className={Styles.cardBody}>
//                 <h5
//                   className="card-title"
//                   style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}
//                 >
//                   {title}
//                 </h5>
//                 <p
//                   className="card-text"
//                   style={{ color: "gray", fontSize: "1rem" }}
//                 >
//                   {content}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HoverCard;

import React, { useState } from "react";
import Image from "next/image";
import Styles from "./card.module.css";
import {Bookmark} from "lucide-react";
const HoverCard = ({ src, title, content, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = () => {
    window.open(link, "_blank");
  };
  const handleSave = (e) => {
    e.stopPropagation(); // Prevent triggering modal open
    setIsSaved((prev) => !prev); // Toggle save state
  };

  // Adjust the threshold as needed to trigger scrolling
  const isContentLarge = content.length > 50; // Condition to check if content length requires scrolling

  return (
    <div>
      {/* Small Card */}
      <div className="card my-20" onClick={openModal}>
        <div className={Styles.cardBody}>
          <Image
            className={Styles.cardImgTop}
            src={`http://localhost:3001/proxy_image?url=${encodeURIComponent(src)}`}
            alt="Card img cap"
            width={150}
            height={200}
          />
          <h5
            className="card-title"
            style={{
              color: "black",
              padding: "5px",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            {/* Save Icon */}
          <div
            className={Styles.saveIcon}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              cursor: "pointer",
              // zIndex: 0,
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "5px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
            onClick={handleSave}
          >
            <Bookmark
              size={20}
              color={isSaved ? "" : "gray"}
              fill={isSaved ? "blue" : "none"}
            />
          </div>
            {title}
          </h5>
        </div>
      </div>

      {/* Large Card (Modal) */}
      {isModalOpen && (
        <div className="hoverContainer">
        <div className={Styles.modalOverlay} onClick={closeModal}>
          <div
            className={Styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            style={{
              border: "1px solid #ddd", 
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              position: "relative",
              // width: "90%", // Control the width of the modal  
              maxHeight: "100vh", 
            }}
          >
            {/* Header with Open Post Button */}
            <div
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                backgroundColor: "#fff",
                padding: "10px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <button
                onClick={handleNavigate}
                className="btn btn-primary px-4 py-2 shadow border-0 outline-0"
                style={{ backgroundColor: "grey" }}
              >
                Open Post
              </button>
            </div>
            {/* Scrollable Content */}
            <div
              style={{
                flexGrow : '1',
                padding: "20px",
                maxHeight: "calc(100vh - 160px)", 
                overflowY: "auto",
                scrollbarWidth: "none",
              }}
            >
              <Image
                className={Styles.cardImgExp}
                src={`http://localhost:3001/proxy_image?url=${encodeURIComponent(src)}`}
                alt="Card img cap"
                width={400}
                height={500}
              />
              <div className={Styles.cardBody}>
                <h5
                  className="card-title"
                  style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}
                >
                  {title}
                </h5>
                <p
                  className="card-text"
                  style={{ color: "gray", fontSize: "1rem" }}
                >
                  {content}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
