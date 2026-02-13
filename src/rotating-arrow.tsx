import React from 'react'
import { ThemeUIStyleObject } from 'theme-ui'
import Arrow from './arrow'
import { IconProps } from './icon-props'

const RotatingArrow = ({ sx, ...props }: IconProps) => {
  return (
    <Arrow
      sx={{
        transition: 'transform 0.15s',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            transform: 'rotate(45deg)',
          },
        },
        ...sx,
      }}
      {...props}
    />
  )
}

RotatingArrow.hover = { transform: 'rotate(45deg)' } as ThemeUIStyleObject

export default RotatingArrow
