import { Link } from 'react-router-dom'

function Header() {
  return <div>
  <nav className='teal accent-4'>
    <Link to='/' className='brand-logo'>React Food</Link>
    <ul id='nav-mobile' className='right hide-on-med-and-down'>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/contacts'>Contacts</Link>
      </li>
    </ul>
  </nav>
</div>
}

export {Header}