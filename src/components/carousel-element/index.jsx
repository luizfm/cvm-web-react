import React, { useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-elastic-carousel'

import { useMediaQuery } from '../../hooks/mediaQuery'

import './styles.css'

const CarouselElement = ({ carouselList }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

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

  const settings = useMemo(() => ({
    showArrows: !isMobile,
  }), [isMobile])

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
    <div className="carousel-wrapper">
      <Carousel
        ref={carouselRef}
        breakPoints={breakPoints}
        onNextStart={onNextStart}
        onPrevStart={onPrevStart}
        disableArrowsOnEnd={false}
        {...settings}
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
