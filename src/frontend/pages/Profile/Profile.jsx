import classNames from 'classnames/bind'
import styles from './Profile.module.scss'

const cx = classNames.bind(styles)

const Profile = () => {
  return (
    <div className={cx('wrapper', 'd-flex pt-3')}>
        <div className={cx('left', 'row col-lg-3')}>
          <div className={cx('d-flex')}>
            <div className={cx('avatar', 'position-relative')}>
              <img src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp' className='rounded-circle position-absolute w-100'/>
            </div>
            <div className={cx('name', 'font-weight-bold px-3')}>
            leconganh2003
            </div>
          </div>
          <div className={cx('nav d-block mt-3')}>
            <div className={cx('navbar-item', 'mb-2')}>
                <div className={cx('d-inline-flex ms-1')}>
                  icon
                </div>
                <span>Tài khoản của tôi</span>
            </div>
            <div className={cx('navbar-item', 'mb-2')}>
                <div className={cx('d-inline-flex ms-1')}>
                  icon
                </div>
                <span>Tài khoản của tôi</span>
            </div>
        </div>
        </div>
      <div className={cx('right', 'row col-lg-9 px-3')}>
        <div className='title'>
          <h4 className='font-weight-normal display-7'>Hồ sơ của tôi</h4>
          <div className="">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
        </div>
        <div className='info pt-4'>
        <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">Tên đăng nhập</label>
              <label for="staticEmail" class="col col-form-label">leconganh2003</label>
            </div>
            <div class="form-group row">
              <label for="text" class="col-3 col-form-label">Tên</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="inputtext" placeholder="" />
              </div>
            </div>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
              <label for="staticEmail" class="col col-form-label">leconganh2003</label>
            </div>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">Số điện thoại</label>
              <label for="staticEmail" class="col col-form-label">leconganh2003</label>
            </div>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-3 col-form-label">Ngày sinh</label>
              <label for="staticEmail" class="col col-form-label">leconganh2003</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile