import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './ProductCard.module.scss'

const cx = classNames.bind(styles)

const ProductCard = () => {
  return (
    <div className={cx('container', 'p-0')}>
      <div className={cx('cs-item-block')}>
        <div className={cx('cs-card')}>
          <div className={cx('cs-item-pic')}>
            <img className={cx('cs-item-pic-content')} src='https://down-vn.img.susercontent.com/file/sg-11134201-7rdxj-m0bbxewraeey01@resize_w450_nl.webp'></img>
          </div>
          <div className={cx('cs-card-body')}>
            <Link to = '#' ><button className={cx('cs-custom-btn', 'codepro-custom-btn', 'codepro-btn-3', 'me-2')}><span>ADD TO CART</span></button></Link>
            <Link to = '#' ><button className={cx('cs-custom-btn', 'codepro-custom-btn', 'codepro-btn-3')}><span>SEE DETAIL</span></button></Link>
          </div>
        </div>
        <div className={cx('cs-item-desc')}>
          <div className={cx('cs-item-desc-title')}>
            <div className={cx('cs-item-desc-content')}>⚡️ Giá Sốc ⚡️Thắt lưng nam da cao cấp khóa kim loại tự động không gỉ - Cam kết 1 đổi 1 bảo hành 12 tháng</div>
          </div>
          <div className={cx('cs-item-desc-voucher d-flex')}>
            <div className={cx('cs-voucher')}>Rẻ Vô Địch</div>
            <div className={cx('cs-voucher')}>#ShopXuHuong</div>
          </div>
          <div className={cx('cs-item-desc-price')}>
            <div className={cx('cs-item-desc-price-sale')}>
              <span className={cx('cs-unit')}>₫</span> <span className={cx('cs-price')}>1.000</span></div>
          </div>
          <div className={cx('cs-item-rating d-flex align-items-center')}>
            <div className={cx('cs-item-sell')}>Đã bán 366,2k</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard