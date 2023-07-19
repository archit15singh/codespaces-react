
import Logo from './Logo'

function Header() {
    return (
      <header>
        <nav className='navigation__bar'>
          <Logo/>
          <p className='navigation__heading'>
            ReactCourse - Project 1
          </p>
        </nav>
      </header>
    )
  }

export default Header;
