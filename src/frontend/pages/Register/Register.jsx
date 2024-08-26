import './Register.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import config from '../../../frontend/config'
import logoLarge from '../../assets/img/logo_large.png'


const Register = () => {
  return (
    <div className='wrapper'>
      <div className='cs-logo-large'>
        <img className='cs-img-large' src={logoLarge} draggable="false" />
      </div>
      <form className='cs-form-block p-4'>
        <div className='d-flex justify-content-between'>
          <h4 className='fw-normal'>Đăng Ký</h4>
          <p><Link className="cs-redirect-link link-offset-2 link-underline link-underline-opacity-0 gl-font-size-14" to={`${config.routes.login}`}>Already have an account?</Link></p>
        </div>
        <div className="mb-2 pt-3">
          <label htmlFor="email" className="form-label mb-1 fw-light gl-font-size-14">Số điện thoại</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' required />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Tiếp Theo</button>
        <div className="d-flex align-items-center pt-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 cs-text-line">Hoặc</span>
          <hr className="flex-grow-1" />
        </div>
        <div className=''>
          <p className='gl-font-size-12 gl-color-primary mt-2 mb-0'>By Signing up, you agree to our  <Link className='link-underline link-underline-opacity-0'>Terms of Service</Link>  and  <Link className='link-underline link-underline-opacity-0'>Privacy Policy</Link></p>
        </div>
        <div className='d-flex justify-content-between py-3'>
          <button type="button" className="d-flex align-items-center btn btn-outline-secondary cs-hover">
            <FcGoogle /><span className='mx-1'>{''}</span><span className='gl-font-size-14'>Google</span>
          </button>
          <button type="button" className="d-flex align-items-center btn btn-outline-secondary cs-hover">
            <FaFacebookF className='text-primary' /><span className='mx-1'>{''}</span><span className='gl-font-size-14'>Facebook</span>
          </button>
          <button type="button" className="d-flex align-items-center btn btn-outline-secondary cs-hover">
            <FaTwitter className='text-info'/><span className='mx-1'>{''}</span><span className='gl-font-size-14'>Twitter</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register