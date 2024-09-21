import './DetailCategories.css'
import banner from '../../assets/img/banner.png'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import pic from '../../assets/img/logo-thuong-hieu.jpg'
import pic1 from '../../assets/img/logo-thuong-hieu-1.jpg'
import voucher from '../../assets/img/voucher.png'
import clo1 from '../../assets/img/item.jpg'
import clo from '../../assets/img/quan-ao.jpg'
import { FaList } from 'react-icons/fa6'
import { CiFilter } from 'react-icons/ci'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import Rating from '@mui/material/Rating'
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const listCarousel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const listItem = [1, 2, 3, 4, 5]
const listCarouselItem = [1, 2, 3, 4, 5, 6]
const DetailCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardState, setCardState] = useState(Array(listItem.length).fill(false))

  useEffect(() => {
    const carousel = document.querySelector('#carouselExample')
    carousel.addEventListener('slid.bs.carousel', (event) => {
      setCurrentIndex(event.to)
    })
  }, [])

  const isPrevDisabled = currentIndex === 0
  const isNextDisabled = currentIndex === 1

  const firstSlideItems = listCarousel.slice(0, 6)
  const secondSlideItems = listCarousel.slice(6, 12)

  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = ['Balo & Túi Ví Nam', 'Giày dép Nam', 'Phụ kiện Nam']

  const handleCategoryClick = (e, category) => {
    e.preventDefault()
    setSelectedCategory(category)
  }

  const [selectedButton, setSelectedButton] = useState(1)

  const handleButtonClick = (Btnid) => {
    setSelectedButton(Btnid)
  }

  const handelCheckShowBtn = (index) => {
    const newCardState = [...cardState]
    newCardState[index] = !newCardState[index]
    setCardState(newCardState)
  }

  const handleFavoriteClick = (event) => {
    event.stopPropagation()
  }
  return (
    <>
      <div className='container p-0 mt-4'>
        <div className='row'>
          <div className='col'>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={banner} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={banner1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={banner2} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='container p-0 mt-4'>
        <div className='cs-carousel-header d-flex justify-content-between align-items-center'>
          <a href='#' className='cs-carousel-header-left '>SHOPEE MALL</a>
          <a href='#' className='cs-carousel-header-right'>Xem tất cả <span className=''>&gt;</span></a>
        </div>
        <div className='cs-carousel-content'>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='row'>
                  {firstSlideItems.map((item, index) => {
                    return (
                      <div key={index} className='cs-carousel-content-block col-lg-2 p-0'>
                        <div className='cs-carousel-content-item'><a href='#'><img src={pic} className='w-100'/></a></div>
                        <div className='cs-carousel-content-item'><a href='#'><img src={pic} className='w-100'/></a></div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="carousel-item">
                <div className='row'>
                  {secondSlideItems.map((item, index) => {
                    return (
                      <div key={index} className='cs-carousel-content-block col-lg-2 p-0'>
                        <div className='cs-carousel-content-item'><a href='#'><img src={pic1} className='w-100'/></a></div>
                        <div className='cs-carousel-content-item'><a href='#'><img src={pic1} className='w-100'/></a></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <button className="cs-carousel-control-prev carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ display: isPrevDisabled ? 'none' : 'block' }}>
              <span className="cs-carousel-control-prev-icon carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="cs-carousel-control-next carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ display: isNextDisabled ? 'none' : 'block' }}>
              <span className="cs-carousel-control-next-icon carousel-control-next-icon " aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='container p-0 '>
        <div className='cs-header-section'>
          <div className='cs-header-section-header row'>
            <div className='col'>
              <div className='cs-header-section-header-title gl-font-size-16'>SIÊU SHOP THỊNH HÀNH - BUNG DEAL SIÊU PHẨM</div>
            </div>
          </div>
          <div className='cs-header-section-content d-flex  justify-content-between'>
            {listCarouselItem.map((item, index) => {
              return (
                <a key={index} href='#' className="cs-header-section-item card">
                  <img src={ voucher } className="cs-header-section-item-img card-img-top" />
                  <div className="card-body">
                    <p className="cs-collection-card-title card-title text-center">FREESHIP & HOÀN XU XTRA</p>
                    <div className="cs-collection-card-price card-text text-center"><span>Từ</span> ₫19.800</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className='container p-0 mt-4'>
        <div className='cs-header-section'>
          <div className='cs-header-section-header row'>
            <div className='col'>
              <div className='cs-header-section-header-title gl-font-size-16'>KIỂU CÁCH THỊNH HÀNH - DIỆN BẢNH MẶC SANG</div>
            </div>
          </div>
          <div className='cs-header-section-content d-flex  justify-content-between'>
            {listCarouselItem.map((item, index) => {
              return (
                <a key={index} href='#' className="cs-header-section-item card">
                  <img src={ clo } className="cs-header-section-item-img card-img-top" />
                  <div className="card-body">
                    <div className="cs-collection-card-price card-text text-center mt-4"><span>Từ</span> ₫19.800</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='cs-panel col-lg-2'>
            <div className='row'>
              <div className='categories-list'>
                <a href='#' className='categories-list-header d-flex align-items-center'><FaList className='me-2'/>Tất cả Danh Mục</a>
                <div className='categories-list-body'>
                  <div className='categories-list-categories'>
                    {categories.map((category, index) => (
                      <div className='row m-2' key={index}>
                        <a
                          className={`categories-list-sub-categories ${
                            selectedCategory === category ? 'active' : ''
                          }`}
                          href='#'
                          onClick={(e) => handleCategoryClick(e, category)}
                        >
                          {category}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='categories-list'>
                <a href='#' className='categories-list-header-filter d-flex align-items-center'><CiFilter className='me-2'/>BỘ LỌC TÌM KIẾM</a>
                <div className='categories-list-body'>
                  <div className='cs-filter-header'>Theo Danh Mục</div>
                  <div className='categories-list-categories mt-2 border-bottom pb-4 d-flex flex-column'>
                    <FormControlLabel control={<Checkbox defaultChecked color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}/>} label="Áo thun (838k+)" />
                    <FormControlLabel control={<Checkbox defaultChecked color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}/>} label="Áo sơ mi (176k+)" />
                    <FormControlLabel control={<Checkbox defaultChecked color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}/>} label="Áo khoác (147k+)" />
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-2'>
              <div className='categories-list'>
                {/* <a href='#' className='categories-list-header-filter d-flex align-items-center'><CiFilter className='me-2'/>BỘ LỌC TÌM KIẾM</a> */}
                <div className='categories-list-body'>
                  <div className='cs-filter-header'>Nơi bán</div>
                  <div className='categories-list-categories mt-2 border-bottom pb-4 d-flex flex-column'>
                    <FormControlLabel control={<Checkbox defaultChecked color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}/>} label="TP. Hồ CHí Minh" />
                    <FormControlLabel control={<Checkbox defaultChecked color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}/>} label="Đà Nẵng" />
                    <FormControlLabel control={<Checkbox defaultChecked color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}/>} label="Hưng Yên " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-10 p-0'>
            <div className='row m-0'>
              <div className='cs-sort-bar col-lg-8 d-flex justify-content-between align-items-center'>
                <div className='cs-title'>Sắp xếp theo</div>
                <div><button type="button" className={`cs-button ${selectedButton === 1 ? 'cs-hightlight' : ''}`} onClick={() => handleButtonClick(1)} >Phổ Biến</button></div>
                <div><button type="button" className={`cs-button ${selectedButton === 2 ? 'cs-hightlight' : ''}`} onClick={() => handleButtonClick(2)}>Mới Nhất</button></div>
                <div><button type="button" className={`cs-button ${selectedButton === 3 ? 'cs-hightlight' : ''}`} onClick={() => handleButtonClick(3)}>Bán Chạy</button></div>
                <div className="dropdown">
                  <button className="cs-price btn dropdown-toggle text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Giá
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Giá : Thấp đến cao</a></li>
                    <li><a className="dropdown-item" href="#">Giá : Cao đến thấp </a></li>
                  </ul>
                </div>
              </div>
              <div className='cs-sort-bar col-lg-4 d-flex align-items-center justify-content-end'>
                <span className='me-4'><span className='cs-num-page'>1</span>/9</span>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" className="cs-btn-outline">&lt;</button>
                  <button type="button" className="cs-btn-outline">&gt;</button>
                </div>
              </div>
            </div>
            <div className='row m-0'>
              <div className='main-contain'>
                {listItem.map((item, index) => {
                  return (<div key={index} className='cs-list-item p-0'>
                    <a className='cs-item-link'>
                      <div className='cs-item-block'>
                        <div className='cs-card'>
                          <div className='cs-item-pic'>
                            <img className='cs-item-pic-content' src={clo1}></img>
                          </div>
                          <div className='cs-card-body'>
                            <Link to = '#' ><button className='cs-custom-btn codepro-custom-btn codepro-btn-3 me-2'><span>ADD TO CART</span></button></Link>
                            <Link to = '#' ><button className='cs-custom-btn codepro-custom-btn codepro-btn-3' ><span>SEE DETAIL</span></button></Link>
                          </div>
                        </div>
                        <div className='cs-item-desc'>
                          <div className='cs-item-desc-title'>
                            <div className='cs-item-desc-content'>⚡️ Giá Sốc ⚡️Thắt lưng nam da cao cấp khóa kim loại tự động không gỉ - Cam kết 1 đổi 1 bảo hành 12 tháng</div>
                          </div>
                          <div className='cs-item-desc-voucher d-flex'>
                            <div className='cs-voucher'>Rẻ Vô Địch</div>
                            <div className='cs-voucher'>#ShopXuHuong</div>
                          </div>
                          <div className='cs-item-desc-price'>
                            <div className='cs-item-desc-price-sale'><span className='cs-unit'>₫</span> <span className='cs-price'>1.000</span></div>
                            <div className='cs-item-desc-price-origin'>₫10.000</div>
                            <div className='cs-item-desc-price-percent'>
                              <div className='cs-box-percent'>
                                <span className='cs-content-percent'>-90%</span>
                              </div>
                            </div>
                          </div>
                          <div className='cs-item-rating d-flex align-items-center'>
                            <div className='cs-item-rating-start me-2'>
                              <Rating name="size-small" value={4} size="small" readOnly />
                            </div>
                            <div className='cs-item-sell'>Đã bán 366,2k</div>
                          </div>
                          <div className='cs-item-located d-flex align-items-center justify-content-between '>
                            <div className='cs-destination'>TP. Hồ Chí Minh</div>
                            <div><Checkbox {...label} onClick={handleFavoriteClick} icon={<FavoriteBorder />} checkedIcon={<Favorite />} sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }}/></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>)
                })}
              </div>
            </div>
            <div className='row m-0'>
              <div className='main-contain'>
                {listItem.map((item, index) => {
                  return (<div key={index} className='cs-list-item p-0'>
                    <a className='cs-item-link'>
                      <div className='cs-item-block'>
                        <div className='cs-card'>
                          <div className='cs-item-pic'>
                            <img className='cs-item-pic-content' src={clo1}></img>
                          </div>
                          <div className='cs-card-body'>
                            <Link to = '#' ><button className='cs-custom-btn codepro-custom-btn codepro-btn-3 me-2'><span>ADD TO CART</span></button></Link>
                            <Link to = '#' ><button className='cs-custom-btn codepro-custom-btn codepro-btn-3' ><span>SEE DETAIL</span></button></Link>
                          </div>
                        </div>
                        <div className='cs-item-desc'>
                          <div className='cs-item-desc-title'>
                            <div className='cs-item-desc-content'>⚡️ Giá Sốc ⚡️Thắt lưng nam da cao cấp khóa kim loại tự động không gỉ - Cam kết 1 đổi 1 bảo hành 12 tháng</div>
                          </div>
                          <div className='cs-item-desc-voucher d-flex'>
                            <div className='cs-voucher'>Rẻ Vô Địch</div>
                            <div className='cs-voucher'>#ShopXuHuong</div>
                          </div>
                          <div className='cs-item-desc-price'>
                            <div className='cs-item-desc-price-sale'><span className='cs-unit'>₫</span> <span className='cs-price'>1.000</span></div>
                            <div className='cs-item-desc-price-origin'>₫10.000</div>
                            <div className='cs-item-desc-price-percent'>
                              <div className='cs-box-percent'>
                                <span className='cs-content-percent'>-90%</span>
                              </div>
                            </div>
                          </div>
                          <div className='cs-item-rating d-flex align-items-center'>
                            <div className='cs-item-rating-start me-2'>
                              <Rating name="size-small" value={4} size="small" readOnly />
                            </div>
                            <div className='cs-item-sell'>Đã bán 366,2k</div>
                          </div>
                          <div className='cs-item-located d-flex align-items-center justify-content-between '>
                            <div className='cs-destination'>TP. Hồ Chí Minh</div>
                            <div><Checkbox {...label} onClick={handleFavoriteClick} icon={<FavoriteBorder />} checkedIcon={<Favorite />} sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }}/></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailCategories


