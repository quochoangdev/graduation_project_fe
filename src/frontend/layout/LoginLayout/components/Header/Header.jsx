import { Link } from 'react-router-dom'
import './Header.css'
import logoSmall from '../../../../assets/img/logo_small.jpg'


const Header = () => {
  return (
    <header className='container text-center'>
      <div className='row cs-wrapper'>
        <div className="d-flex align-items-end col">
          <img className='cs-logo' src={logoSmall}/>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to='#' className='cs-help'>you need help?</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
