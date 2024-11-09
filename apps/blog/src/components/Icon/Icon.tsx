'use client'

import * as Icons from '@/assets/icons'

export type IconProps = {
  name: keyof typeof Icons
  size?: number
  fill?: string
}

const Icon = ({ name, size = 24, fill = '#959db1' }: IconProps) => {
  const CustomIcon = Icons[name]

  return <CustomIcon width={size} height={size} fill={fill} />
}

export default Icon
