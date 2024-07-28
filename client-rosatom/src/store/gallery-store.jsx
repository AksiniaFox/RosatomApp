import { makeAutoObservable,  runInAction } from 'mobx';
import $api from '../app/api.js'

class ImageStore {
  images = []
  load = true
  selectedImage = null
  currentIndex = null
  currentPage = 1
  imagesPage = 8

  constructor() {
    makeAutoObservable(this)
  }

  setImages(images) {
    this.images = images
  }

  setLoad(load) {
    this.load = load
  }

  setSelectedImage(image, index) {
    this.selectedImage = image
    this.currentIndex = index
  }

  setCurrentPage(page) {
    this.currentPage = page
  }


  get totalPages() {
    return Math.ceil(this.images.length / this.imagesPage)
  }

  get currentImages() {
    return this.images.slice(
        (this.currentPage - 1) * this.imagesPage,
        this.currentPage * this.imagesPage
    )
  }

  async fetchImages() {
    this.setLoad(true)
    try {
      const res = await $api.get('/files')
      runInAction(() => {
        console.log(res);
        this.setImages(res.data.data)
        this.setLoad(false)
      });
    } catch (error) {
      console.log('Произошла ошибка')
      runInAction(() => {
        this.setLoad(false)
      })
    }
  }
}

export default new ImageStore()