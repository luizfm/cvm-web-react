import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-elastic-carousel'

import styles from './styles.module.scss'

const CarouselElement = ({ carouselList }) => {
  const breakPoints = [
    {
      width: 1, itemsToShow: 1
    },
    {
      width: 550, itemsToShow: 1
    },
    {
      width: 768, itemsToShow: 1
    },
    {
      width: 1200, itemsToShow: 1
    }
  ]

  const carouselRef = useRef(null)
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(carouselList.length);
    }
  };


  return (
    <div className={styles['carousel-wrapper']}>
      <Carousel
        ref={carouselRef}
        breakPoints={breakPoints}
        onNextStart={onNextStart}
        onPrevStart={onPrevStart}
        disableArrowsOnEnd={false}
      >
        {carouselList}
      </Carousel>
    </div>
  )
}

CarouselElement.propTypes = {
  carouselList: PropTypes.arrayOf(PropTypes.node)
}

CarouselElement.defaultProps = {
  carouselList: []
}

export default CarouselElement
