import { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import classNames from 'classnames/bind'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { CiLogin } from 'react-icons/ci'

import Search from '../Search'
import './Header.css'
import LoginBasic from '../LoginBasic'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

export const ToggleSearchFullscreenContext = createContext(null)

const Header = () => {
  const [optionSocial, setOptionSocial] = useState('loginBasic')
  const handleSelectSocial = (option) => {
    setOptionSocial(option)
  }
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('floor-1')}>
        <div className={cx('left')}>
          <div className={cx('logo')}>QHDev.com</div>
          <Search />
        </div>
        <div className={cx('right')}>
          <div className={cx('margin')}><Link className={cx('text')}>Đăng Cơ Sở Lưu Trú</Link></div>
          <div className={cx('margin')}><Link className={cx('text')}>Ứng Dụng</Link></div>
          <div className={cx('margin')}><Link className={cx('text')}>Trợ Giúp</Link></div>
          <div className={cx('margin')}><Link className={cx('text')}><FiSearch /></Link></div>
          <div className={cx('margin')}><Link className={cx('text')}>USD</Link></div>
          <div className={cx('margin')}><div className={cx('btn-opa')}>Tìm Kiếm Chỗ Đặt</div></div>
          <div className={cx('margin')}><button type='button' className='btn btn-light' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>Đăng Nhập / Đăng Ký</button></div>
          {/* <!-- Modal --> */}
          <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered modal-dialog-scrollablemodal-dialog'>
              <div className='modal-content'>
                {optionSocial === 'loginBasic' && <LoginBasic/>}
                {optionSocial === 'facebook' && null}
                {optionSocial === 'google' && null}
                <div className='footer-custom'>
                  <div className='line'>
                    <div className='text-in-line'>Other Login Methods</div>
                  </div>
                  <div className='social'>
                    <button type='button' className='btn-social google' onClick={() => handleSelectSocial('loginBasic')}><CiLogin className='google-icon' /></button>
                    <button type='button' className='btn-social facebook' onClick={() => handleSelectSocial('facebook')}><FaFacebook className='facebook-icon' /></button>
                    <button type='button' className='btn-social google' onClick={() => handleSelectSocial('google')}><FcGoogle className='google-icon' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('floor-2')}>
        <div className={cx('left')}>
        </div>
      </div>

      {/* search fullscreen */}
    </footer>
  )
}

export default Header
