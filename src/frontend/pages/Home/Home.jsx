import { useRef, useState } from 'react'
import './Home.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import config from '../../config'

const Home = () => {
  const describeScroll = useRef()
  const listCategories = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3]
  const handleScrollRecommendL = () => { describeScroll.current.scrollLeft -= ((1296/10)*4) }
  const handleScrollRecommendR = () => { describeScroll.current.scrollLeft += ((1296/10)*4) }

  return (
    <div className="w-100">
      <div className="cs-home-baner">
        <div className="container d-flex pb-0">
          <div className="cs-banner-left col-8">
            <div className="cs-banner-carousel h-100">
              <div id="carouselExampleAutoplaying" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner h-100">
                  <Link className="carousel-item active h-100">
                    <img src='https://cf.shopee.vn/file/sg-11134258-7rdys-m0wkshiaifgpd1_xxhdpi' className="d-block w-100 h-100" alt="..." />
                  </Link>
                  <Link className="carousel-item h-100">
                    <img src="https://cf.shopee.vn/file/sg-11134258-7rdvg-m0wus503f6mf03_xxhdpi" className="d-block w-100 h-100" alt="..." />
                  </Link>
                  <Link className="carousel-item h-100">
                    <img src="https://cf.shopee.vn/file/sg-11134258-7rdyr-m0wtw1e6jy9ma4_xxhdpi" className="d-block w-100 h-100" alt="..." />
                  </Link>
                  <Link className="carousel-item h-100">
                    <img src="https://cf.shopee.vn/file/sg-11134258-7rdy3-m0wu2g2ezprm98_xxhdpi" className="d-block w-100 h-100" alt="..." />
                  </Link>
                  <Link className="carousel-item h-100">
                    <img src="https://cf.shopee.vn/file/sg-11134258-7rdvq-m0yb9yecs93332_xxhdpi" className="d-block w-100 h-100" alt="..." />
                  </Link>
                </div>
                <div className='cs-home-carousel-control-prev top-50 start-0' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <FaChevronLeft className='cs-home-carousel-control-icon' />
                </div>
                <div className='cs-home-carousel-control-next top-50 end-0' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <FaChevronRight className='cs-home-carousel-control-icon' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className="cs-banner-right">
              <Link className='cs-banner-right-link w-100'>
                <img className='cs-banner-right-link-img w-100' src="https://cf.shopee.vn/file/sg-11134258-7rdx0-m0ybmsb2vj7272_xhdpi" alt="" />
              </Link>
              <Link className='cs-banner-right-link pt-1 w-100'>
                <img className='cs-banner-right-link-img w-100' src="https://cf.shopee.vn/file/sg-11134258-7rdvs-m0ybmurb90kw6e_xhdpi" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container cs-discount-navbar">
          <Link className='cs-discount-item h-100 col-1'>
            <div className='cs-discount-block h-100'>
              <div className='cs-discount-img'>
                <div className='cs-discount-img-inner'></div>
              </div>
              <div className='cs-discount-title'>
                Voucher Giảm Đến 1 Triệu
              </div>
            </div>
          </Link>
          <Link className='cs-discount-item h-100 col-1'>
            <div className='cs-discount-block h-100'>
              <div className='cs-discount-img'>
                <div className='cs-discount-img-inner'></div>
              </div>
              <div className='cs-discount-title'>
                Voucher Giảm Đến 1 Triệu
              </div>
            </div>
          </Link>
          <Link className='cs-discount-item h-100 col-1'>
            <div className='cs-discount-block h-100'>
              <div className='cs-discount-img'>
                <div className='cs-discount-img-inner'></div>
              </div>
              <div className='cs-discount-title'>
                Voucher Giảm Đến 1 Triệu
              </div>
            </div>
          </Link>
          <Link className='cs-discount-item h-100 col-1'>
            <div className='cs-discount-block h-100'>
              <div className='cs-discount-img'>
                <div className='cs-discount-img-inner'></div>
              </div>
              <div className='cs-discount-title'>
                Voucher Giảm Đến 1 Triệu
              </div>
            </div>
          </Link>
          <Link className='cs-discount-item h-100 col-1'>
            <div className='cs-discount-block h-100'>
              <div className='cs-discount-img'>
                <div className='cs-discount-img-inner'></div>
              </div>
              <div className='cs-discount-title'>
                Voucher Giảm Đến 1 Triệu
              </div>
            </div>
          </Link>
          <Link className='cs-discount-item h-100 col-1'>
            <div className='cs-discount-block h-100'>
              <div className='cs-discount-img'>
                <div className='cs-discount-img-inner'></div>
              </div>
              <div className='cs-discount-title'>
                Voucher Giảm Đến 1 Triệu
              </div>
            </div>
          </Link>
          <Link className='cs-discount-item h-100 col-1'>
            <div className='cs-discount-block h-100'>
              <div className='cs-discount-img'>
                <div className='cs-discount-img-inner'></div>
              </div>
              <div className='cs-discount-title'>
                Voucher Giảm Đến 1 Triệu
              </div>
            </div>
          </Link>
          <Link className='cs-discount-item h-100 col-1'>
            <div className='cs-discount-block h-100'>
              <div className='cs-discount-img'>
                <div className='cs-discount-img-inner'></div>
              </div>
              <div className='cs-discount-title'>
                Voucher Giảm Đến 1 Triệu
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="container">
        container
      </div>
    </div>
  )
}

export default Home