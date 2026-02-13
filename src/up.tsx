import React from 'react'
import Arrow from './arrow'
import { IconProps } from './icon-props'

const Up = ({ sx, ...props }: IconProps) => {
  return <Arrow sx={{ transform: 'rotate(-45deg)', ...sx }} {...props} />
}

export default Up
