import React, { useState, useEffect } from 'react';
import './index.css';

const Popup = ({closeModal, startIndex,images }) => {
  const [index, setIndex] = useState(startIndex)
  useEffect(() => {
    setIndex(startIndex)
  }, [startIndex])

  const nextSlide = (e) => {
    e.stopPropagation()
    setIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = (e) => {
    e.stopPropagation()
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="modal" onClick={closeModal}>
      <span className="close">&times;</span>
      <button className="prev" onClick={prevSlide}>❮</button>
      <img className="modal-content" src={'http://localhost:8055/assets/'+images[index].id}/>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  )
}

export default Popup