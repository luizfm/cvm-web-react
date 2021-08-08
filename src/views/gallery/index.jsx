import React, { useMemo } from 'react'

import Tabs from '../../components/tabs'
import VideosGallery from './videos-gallery'
import PhotosGallery from './photos-gallery'

import styles from './styles.module.scss'


const Gallery = () => {
  const sectionTabs = useMemo(() => ([
    {
      label: 'Fotos',
      component: <PhotosGallery />
    },
    {
      label: 'Videos',
      component: <VideosGallery />
    }
  ]), [])

  return (
    <div className={styles['gallery-container']}>
      <Tabs dataTabs={sectionTabs} />
    </div>
  )
}

export default Gallery
