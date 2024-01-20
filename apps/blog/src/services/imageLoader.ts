import { ImageLoaderProps } from 'next/image'
import { homepageUrl } from '@/libs/config'

const prefix = process.env.IM === 'local' ? '' : homepageUrl

export const defaultImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  return `${prefix}${src}?w=${width}&q=${quality}`
}

export const remoteImageLoader = ({ src }: ImageLoaderProps) => {
  return src
}
