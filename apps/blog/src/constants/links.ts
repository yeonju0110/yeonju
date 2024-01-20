import { homepageUrl, isLocal } from '@/libs/config'

const links = {
  github: 'https://github.com/yeonju0110',
  mail: 'mailto:yjj0287@gmail.com',
  homePage: isLocal ? 'http://localhost:3000' : homepageUrl,
}

export default links
