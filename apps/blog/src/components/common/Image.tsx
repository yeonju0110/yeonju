'use client'

import NextImage, { ImageProps } from 'next/image'
import defaultImageLoader from '@/services/imageLoader'

export default function Image({ ...props }: ImageProps) {
  return <NextImage loader={defaultImageLoader} {...props} />
}
