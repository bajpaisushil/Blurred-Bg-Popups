// import React, { useState } from "react";
// import "./App.css";

// const App: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleClick = (e: any) => {
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="App">
//     <div className={`${isModalOpen ? "blurry" : ""}`}>
//       <button className="clickBtn" onClick={handleClick}>Click Me</button>
//     </div>
//       {isModalOpen && (
//         <div className="container">
//           <div className="blueBox">
//             <p className="texty">Hello World 1</p>
//             <button
//               className="closeButton"
//               onClick={() => setIsModalOpen(!isModalOpen)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";

const App: React.FC = () => {
  const [popups, setPopups] = useState<any[]>([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const openFirst = () => {
    setPopups(["Hello World 1"]);
  };
  const openNested = (index: number) => {
    setPopups([...popups.slice(0, index + 1), `Hello World ${index + 2}`]);
  };
  const closeIt = (index: number) => {
    setPopups(popups?.filter((_, i) => i !== index));
  };

  // const handleClick = (e: any) => {
  //   setIsModalOpen(true);
  // };
  const blurIntensity=popups?.length*2;

  return (
    <div className="App">
      <div
      style={{filter: `${popups?.length? `blur(${blurIntensity}px)`: 'blur(0)'}`}}
      // className={`content ${popups?.length ? "blurry" : ""}`}
      >
        <button className="clickBtn" onClick={openFirst}>
          Click Me
        </button>
      </div>
      {popups?.map((text, index) => (
        <Popup
          key={index}
          blurAmount={(index+1)*2}
          text={text}
          closePopup={() => closeIt(index)}
          openNested={() => openNested(index)}
        />
      ))}
    </div>
  );
};

export default App;
