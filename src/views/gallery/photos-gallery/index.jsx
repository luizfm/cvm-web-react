import React, { useCallback, useMemo, useState } from 'react'

import CarouselElement from '../../../components/carousel-element'
import AustraliaImage from '../../../assets/images/australia.jpeg'

import styles from './styles.module.scss'
import PhotoItem from './photo-item'
import useToggle from '../../../hooks/use-toggle'
import Button from '../../../components/button'
import AddPhotoModal from './add-photo-modal'

const MOCK_IMAGES = [
  {
    id: 1,
    label: 'Imagem01',
    photo: AustraliaImage
  },
  {
    id: 2,
    label: 'Imagem01',
    photo: AustraliaImage
  },
  {
    id: 3,
    label: 'Imagem01',
    photo: AustraliaImage
  },
  {
    id: 4,
    label: 'Imagem01',
    photo: AustraliaImage
  }
]

const PhotosGallery = () => {
  const [isAddPhotosModalOpen, onToggleAddPhotosModal] = useToggle()
  const [photosList, setPhotosList] = useState(MOCK_IMAGES)

  const onRemoveClick = useCallback(id => {
    if(photosList.length > 1) {
      const newPhotos = photosList.filter(item => item.id !== id)
      setPhotosList(newPhotos)
      // TODO - integrate when BE is ready
      return
    }
    return window.alert("Você não ficar sem fotos. Por favor adicione outra para poder remover esta")
  }, [photosList])

  console.log(photosList)

  const renderElements = useMemo(() => photosList.map(item => (
    <PhotoItem
      key={item.id}
      id={item.id}
      image={item.photo}
      imageDescription={item.label}
      label={item.label}
      onRemove={onRemoveClick}
    />
  )), [onRemoveClick, photosList])

  return (
    <div className={styles['photos-gallery-container']}>
      <CarouselElement carouselList={renderElements} />
      <Button onClick={onToggleAddPhotosModal}>Adicionar Imagem</Button>
      {isAddPhotosModalOpen && (
        <AddPhotoModal onClose={onToggleAddPhotosModal} />
      )}
    </div>
  )
}

export default PhotosGallery
