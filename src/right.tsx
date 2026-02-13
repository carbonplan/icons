import React from 'react'
import Arrow from './arrow'
import { IconProps } from './icon-props'

const Right = ({ sx, ...props }: IconProps) => {
  return <Arrow sx={{ transform: 'rotate(45deg)', ...sx }} {...props} />
}

export default Right
