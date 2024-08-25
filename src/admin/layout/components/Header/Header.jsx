import './Header.css'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg w-100 px-0s py-0 custom-navbar'>
      <div className='d-flex justify-content-between align-items-center container-fluid ps-4 pe-5 py-1'>
        <div className='d-flex align-items-center navbar-brand' href='#'>
          <img className='custom-logo' src='data:image/png;base64,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'/>
          <div className='custom-logo-text'>QHDev</div>
        </div>
        <div className='w-25'>
          <form className='d-flex' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-dark' type='submit'>Search</button>
          </form>
        </div>
        <div className='' id='navbarScroll'>
          <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll' style={{ '--bs-scroll-height': '100px' }}>
            <li className='d-flex align-items-center nav-item dropdown'>
              <a className='nav-link text-center' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                <div className='position-relative px-0'>
                  <IoMdNotificationsOutline className='fs-4 text-body-secondary'/>
                  {false && <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                    0
                    <span className='visually-hidden'>unread messages</span>
                  </span>}
                </div>
              </a>
              <ul className='dropdown-menu dropdown-menu-end cart-view'>
                <li><a className='dropdown-item' href='#'>Action</a></li>
                <li><a className='dropdown-item' href='#'>Another action</a></li>
                <li><hr className='dropdown-divider'/></li>
                <li><a className='dropdown-item' href='#'>Something else here</a></li>
              </ul>
            </li>
            <li className='d-flex align-items-center nav-item dropdown'>
              <a className='d-flex align-items-center nav-link text-center' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='2' cy='2' r='2' fill='currentColor'></circle><circle cx='2' cy='8' r='2' fill='currentColor'></circle><circle cx='2' cy='14' r='2' fill='currentColor'></circle><circle cx='8' cy='8' r='2' fill='currentColor'></circle><circle cx='8' cy='14' r='2' fill='currentColor'></circle><circle cx='14' cy='8' r='2' fill='currentColor'></circle><circle cx='14' cy='14' r='2' fill='currentColor'></circle><circle cx='8' cy='2' r='2' fill='currentColor'></circle><circle cx='14' cy='2' r='2' fill='currentColor'></circle></svg>
              </a>
              <ul className='dropdown-menu dropdown-menu-end cart-view'>
                <li><a className='dropdown-item' href='#'>Action</a></li>
                <li><a className='dropdown-item' href='#'>Another action</a></li>
                <li><hr className='dropdown-divider' /></li>
                <li><a className='dropdown-item' href='#'>Something else here</a></li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link text-center' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                <img className='custom-image' alt='...' src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/449391289_1627235181402546_3351840801085214001_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGgMJ6UlggNgL6N3KiToL64eCjHHO8CVlx4KMcc7wJWXGneyh8UQyjwDqpXlvMpM-AMcSBX5Fmj8Q_gZFir0lW_&_nc_ohc=2F1jW2R8EFgQ7kNvgGx4N2a&_nc_ht=scontent.fdad3-5.fna&_nc_gid=A9MVBT3FelGx2PgQg3tuwCE&oh=00_AYC-MEBwPVs-5BzQEzvaff94RQP9wm4BiQkZq7yGFTuKjA&oe=66CF75AA' />
              </a>
              <ul className='dropdown-menu dropdown-menu-end cart-view'>
                <li><a className='dropdown-item' href='#'>Action</a></li>
                <li><a className='dropdown-item' href='#'>Another action</a></li>
                <li><hr className='dropdown-divider' /></li>
                <li><a className='dropdown-item' href='#'>Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
