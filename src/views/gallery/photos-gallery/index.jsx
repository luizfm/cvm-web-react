import React, { useCallback, useMemo } from 'react'

import CarouselElement from '../../../components/carousel-element'
import AustraliaImage from '../../../assets/images/australia.jpeg'

import styles from './styles.module.scss'
import PhotoItem from './photo-item'
import FileInput from '../../../components/file-input'

const MOCK_IMAGES = [
  {
    label: 'Imagem01',
    photo: AustraliaImage
  },
  {
    label: 'Imagem01',
    photo: AustraliaImage
  },
  {
    label: 'Imagem01',
    photo: AustraliaImage
  },
  {
    label: 'Imagem01',
    photo: AustraliaImage
  }
]

const PhotosGallery = () => {
  const renderElements = useMemo(() => MOCK_IMAGES.map((item, index) => (
    <PhotoItem
      key={index}
      image={item.photo}
      imageDescription={item.label}
      label={item.label}
    />
  )), [])

  const handleAddNewImage = useCallback(file => {
    console.log(file)
    // TODO - Integrate when BE is ready
  }, [])

  return (
    <div className={styles['photos-gallery-container']}>
      <CarouselElement carouselList={renderElements} />
      <FileInput onChange={handleAddNewImage} className={styles['add-button']}>Adicionar imagem</FileInput>
    </div>
  )
}

export default PhotosGallery
