import { ImageLoaderProps } from 'next/image'

const prefix =
  process.env.IM === 'local' ? '' : 'https://yeonju0110.github.io/yeonju'

const defaultImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${prefix}${src}?w=${width}&q=${quality}`
}

export default defaultImageLoader
