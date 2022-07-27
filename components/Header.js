import Link from 'next/link'

const Header = ({}) => {
  return(
    <nav>
      <ul className='flex justify-start gap-10 text-2xl m-5'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/fishing'>Fishing</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Header