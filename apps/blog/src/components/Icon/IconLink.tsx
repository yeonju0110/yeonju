import Link from 'next/link'
import Icon, { IconProps } from './Icon'

type Props = IconProps & {
  href: string
}

const IconLink = ({ href, ...props }: Props) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Icon {...props} />
    </Link>
  )
}

export default IconLink
