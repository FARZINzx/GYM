import { CurrentPage } from '@/Utils/CurrentPage'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
     setCurrentPage : (value : CurrentPage) => void
     target : string,
     content : string
}

const ActionButton = ({setCurrentPage ,target , content }: Props) => {
  return (
    <AnchorLink
     className='py-2 px-10 bg-secondary-500 hover:bg-primary-500 rounded-md duration-150 hover:text-white'
     href={`#${target}`}
     onClick={()=>setCurrentPage(target as CurrentPage)}
    >
      {content}
    </AnchorLink>
  )
}

export default ActionButton