import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'

import { useMediaQuery } from '../../hooks/mediaQuery'

const StyledLottie = ({ animation, className }) => {
  const hasMediaMatch = useMediaQuery('(min-width: 500px)');

    const [animationState] = useState({
        isStopped: false, isPaused: false
    });

  const defaultOptions = useCallback((data) => {
    return {
        loop: true,
        autoplay: true,
        animationData: data,
        renderSettings: {
            preserveAspectRadio: 'xMidYMid slice'
        }
    }
  }, []);

  return (
    <div className={className}>
      <Lottie
        style={hasMediaMatch ? lottieStyles.container : lottieStyles.containerMobile}
        options={defaultOptions(animation)}
        isPaused={animationState.isPaused}
        isStopped={animationState.isStopped}
      />
    </div>
  )
}


const lottieStyles = {
  containerMobile: {
      width: 270,
      height: 270,
  },
  container: {
      width: 330,
      height: 330
  }
};

StyledLottie.propTypes = {
  animation: PropTypes.shape().isRequired,
  className: PropTypes.string,
}

StyledLottie.defaultProps = {
  className: '',
}

export default StyledLottie
