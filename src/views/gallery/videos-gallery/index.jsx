import React, { useCallback, useState } from 'react'

import Button, { BUTTON_THEMES } from '../../../components/button'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close-black-icon.svg'

import styles from './styles.module.scss'

const MOCK_VIDEOS = {
  mainVideoTitle: "Vakinha CVM",
  mainVideoUrl: "https://www.youtube.com/embed/XTATXaVJU7s",
  otherVideos: [
    {
      title: 'Revitalização parque',
      url: "https://youtube.com/embed/YSoFnzGF02w",
    },
    {
      title: 'CVM Telemarketing',
      url: "https://youtube.com/embed/mfhsXXXNdWA",
    },
    {
      title: 'Dia do voluntário',
      url: "https://youtube.com/embed/CqIcTh0pvZ8"
    },
    {
      title: 'Gente que faz diferença',
      url: "https://youtube.com/embed/q_bM8gPZ5r0"
    },
    {
      title: 'Projeto revitalização',
      url: "https://youtube.com/embed/Xs9IDlJr_dg"
    }
  ]
}

const VideosGallery = () => {
  const { isMobile } = useWindowSize()

  const [videos, setVideos] = useState(MOCK_VIDEOS)

  const handleOnRemove = useCallback(video => {
    const filteredVideos = videos.otherVideos.filter(item => item.title !== video)
    console.log('filter', filteredVideos)
    setVideos(prevValue => ({...prevValue, otherVideos: filteredVideos}))
  }, [videos.otherVideos])

  console.log('videos', videos)

  return (
    <section className={styles['videos-container']}>
      <h1>{MOCK_VIDEOS.mainVideoTitle}</h1>
      <iframe
        className={styles['main-video']}
        width="100%"
        height={isMobile ? "300" : "600"}
        src={MOCK_VIDEOS.mainVideoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />

        <h2 className={styles['others-videos-title']}>Outros vídeos</h2>

        <div className={styles['other-videos-container']}>
          {videos.otherVideos.map(video => (
            <div key={video.title} className={styles['video-card']}>
              <p>{video.title}</p>
              <iframe
                className={styles.video}
                width="100%"
                height="100%"
                src={video.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              />
              {!isMobile && (
                  <Button theme={BUTTON_THEMES.SECONDARY} className={styles['delete-button']} onClick={() => handleOnRemove(video.title)} aria-label="Deletar foto">
                    <CloseIcon />
                 </Button>
              )}
            </div>
          ))}
        </div>

        {!isMobile && <Button>Adicionar vídeo</Button>}
    </section>
  )
}

export default VideosGallery
