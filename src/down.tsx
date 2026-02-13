import React from 'react'
import Arrow from './arrow'
import { IconProps } from './icon-props'

const Down = ({ sx, ...props }: IconProps) => {
  return <Arrow sx={{ transform: 'rotate(135deg)', ...sx }} {...props} />
}

export default Down
