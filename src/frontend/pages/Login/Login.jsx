import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import config from '../../../frontend/config'
import logoLarge from '../../assets/img/logo_large.png'


const Login = () => {
  return (
    <div className='wrapper'>
      <div className='cs-logo-large'>
        <img className='cs-img-large' src={logoLarge} draggable="false" />
      </div>
      <form className='cs-form-block p-4'>
        <div className='d-flex justify-content-between'>
          <h4 className='fw-normal'>Đăng Nhập</h4>
          <p><Link className="cs-redirect-link link-offset-2 link-underline link-underline-opacity-0 gl-font-size-14" to={`${config.routes.register}`}>Don&apos;t have an account?</Link></p>
        </div>
        <div className="mb-2 pt-3">
          <label htmlFor="email" className="form-label mb-1 fw-light gl-font-size-14">Email/Phone address</label>
          <input type="text" className="form-control" id="email" aria-describedby="emailHelp" name='email' required />
        </div>
        <div className="mb-2 pt-2">
          <label htmlFor="password" className="form-label mb-1 fw-light gl-font-size-14">Password</label>
          <input type="password" className="form-control" id="password" name='password' required />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        <div className="d-flex align-items-center pt-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 cs-text-line">Login with</span>
          <hr className="flex-grow-1" />
        </div>
        <div className=''>
          <p className='gl-font-size-12 mt-2 mb-0'><Link className='gl-color-primary link-underline link-underline-opacity-0'>Quên mật khẩu</Link></p>
        </div>
        <div className='d-flex justify-content-between py-3'>
          <button type="button" className="d-flex align-items-center btn btn-outline-secondary cs-hover">
            <FcGoogle /><span className='mx-1'>{''}</span><span className='gl-font-size-14'>Google</span>
          </button>
          <button type="button" className="d-flex align-items-center btn btn-outline-secondary cs-hover">
            <FaFacebookF className='text-primary' /><span className='mx-1'>{''}</span><span className='gl-font-size-14'>Facebook</span>
          </button>
          <button type="button" className="d-flex align-items-center btn btn-outline-secondary cs-hover">
            <FaGithub className='text-dark'/><span className='mx-1'>{''}</span><span className='gl-font-size-14'>Github</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login