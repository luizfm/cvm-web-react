import React, { useMemo } from 'react';

import CarouselElement from '../../components/carousel-element';
import CarouselItem from '../../components/carousel-element/carousel-item'
import { HELP_METHODS } from '../../constants/cvm-helper'

const Help = () => {
  const renderList = useMemo(() => Object.values(HELP_METHODS).map(item => (
      <CarouselItem key={item.SLUG} id={item.SLUG} title={item.TITLE} animation={item.ANIMATION} />
    )
  ), [])

  return (
    <div>
      <CarouselElement carouselList={renderList} />
    </div>
  )
}

export default Help
