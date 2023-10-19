import React, { useState } from 'react';

const MyTable = ({ myTableList }) => {
  const [showImages, setShowImages] = useState(true);

  return (
    <div>
      <button onClick={() => setShowImages(!showImages)}>
        {showImages ? "Masquer les images" : "Afficher les images"}
      </button>
      {myTableList.map((myTable, index) => (
        <figure key={index}>
          
          {showImages ? (
            <img src={myTable.imgSrc} alt={myTable.name} />
          ) : (
            <p>???</p>
          )}
          <figcaption>{myTable.name}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default MyTable;