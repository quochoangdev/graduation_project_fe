import './Header.css'
import Search from '../Search'
import { CgShoppingCart } from 'react-icons/cg'
import LogoSmall from '../../../../components/Logo/LogoSmall'

const Header = () => {
  return (
    <header className='gl-bg-primary w-100'>
      <div className='container gl-bg-transparent'>
        <div className='row'>
          <div className='col-4'>1</div>
          <div className='col-4'>2</div>
          <div className='col-4'>3</div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <LogoSmall/>
          </div>
          <div className='col-8'>
            <Search/>
          </div>
          <div className='col-2 d-flex justify-content-center align-items-center'>
            <button type="button" className="btn btn-primary position-relative">
              <CgShoppingCart className='icon-cart'/>
              <span className="position-absolute translate-middle badge rounded-pill bg-danger cs-badges">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
        <div className='row mb-1'>
          <div className='col-2'></div>
          <div className='col-8'>
            <div className='d-flex align-items-center'>
              <a className='link-categories' href='#'>Categories Item</a>
              <a className='link-categories' href='#'>Categories Item</a>
              <a className='link-categories' href='#'>Categories Item</a>
              <a className='link-categories' href='#'>Categories Item</a>
              <a className='link-categories' href='#'>Categories Item</a>
            </div>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    </header>
  )
}

export default Header
