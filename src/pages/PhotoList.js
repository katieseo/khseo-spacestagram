import React from "react";
import "./PhotoList.scss";

export default function PhotoList({photosData}) {
  function handleLike(classList, photo){
    photo.like = !photo.like;
    photo.like ? classList.add("on") : classList.remove("on");
  }

  function onError(e) {
    e.currentTarget.closest(".photolist__frame").remove();
  }

  return (
    <main className="photolist__container">
        {photosData.map(photo => {
          if (!photo.hdurl) return "";

          return (
            <div className="photolist__frame" key={photo.title}>
              <div className="photolist__date">{photo.date}</div>
              <div className="photolist__img">
                <img src={photo.hdurl} alt={photo.title} onError={onError}/>
              </div>
            
              <div className="photolist__footer">
                <div className="photolist__title">{photo.title}</div>
                <div className="photolist__like_wrap" 
                     onClick={(e)=>handleLike(e.currentTarget.classList, photo)}>
                  <span className="photolist__like" role="img" aria-label="like icon"></span>
                </div>
              </div>
            </div>
          );
        })}
    </main>
  );
}