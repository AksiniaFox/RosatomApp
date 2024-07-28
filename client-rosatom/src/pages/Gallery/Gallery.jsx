import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import './index.css'
import Popup from "../../components/popup/popup.jsx"
import imageStore from "../../store/gallery-store.jsx"

import Loader from '../../components/loader/loader.jsx'

const Body = observer(() => {

    useEffect(() => {
        imageStore.fetchImages()
    }, [])
  
    const openModal = (index) => {
        imageStore.setSelectedImage(imageStore.images[index], index)
    }
  
    const closeModal = () => {
        imageStore.setSelectedImage(null, null)
    }


    const PageChange = (newPage) => {
        imageStore.setCurrentPage(newPage)
      }
  

    return (
        
        <div>
            <h1 className='head'> Фото галерея </h1>

            {imageStore.load? <Loader/> : 
                <div className='container_blocks'>
                    {imageStore.currentImages.map((image, index) => (
                        <div className='block' key={index}>
                            <img 
                            src={'http://localhost:8055/assets/'+image.id} 
                            className='icon' 
                            onClick={() => openModal((imageStore.currentPage - 1) * imageStore.imagesPage + index)} />
                        </div>
                    ))}
                </div>
            }
                    
            <div className='pagination'>
                <button
                    className="prev"
                    onClick={() => PageChange(imageStore.currentPage - 1)}
                    disabled={imageStore.currentPage === 1}
                    >
                    Предыдущая
                </button>
                <div>{`${imageStore.currentPage} / ${imageStore.totalPages}`}</div>
                <button
                    className="next"
                    onClick={() => PageChange(imageStore.currentPage + 1)}
                    disabled={imageStore.currentPage === imageStore.totalPages}
                    >
                    Следующая
                </button>
            </div>

            {imageStore.selectedImage && <Popup closeModal={closeModal} startIndex={imageStore.currentIndex} images = {imageStore.images}/>}
        
        </div>
            
    )
})

export default Body