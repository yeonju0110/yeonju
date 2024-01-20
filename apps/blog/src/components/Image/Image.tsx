'use client'

import NextImage, { ImageProps } from 'next/image'
import { defaultImageLoader, remoteImageLoader } from '@/services/imageLoader'

interface Props extends ImageProps {
  type: 'local' | 'remote'
}

export default function Image({ type, ...props }: Props) {
  return (
    <NextImage
      loader={type === 'local' ? defaultImageLoader : remoteImageLoader}
      {...props}
    />
  )
}
