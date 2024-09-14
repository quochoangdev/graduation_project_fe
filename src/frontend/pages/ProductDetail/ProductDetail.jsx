import './ProductDetail.css'
import classNames from 'classnames/bind'
import styles from './ProductDetail.module.scss'
import { Link } from 'react-router-dom'
import config from '../../config'
import { useEffect, useRef, useState } from 'react'
import { FaFacebook, FaRegStar, FaStar,FaRegHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'
import { CiShop } from 'react-icons/ci'

const cx = classNames.bind(styles)
let imgStart = 0, imgEnd = imgStart + 5
let indexImgModule = 0

const Product = () => {
  const describeScroll = useRef()
  
  const imgDetail = [
    'https://down-vn.img.susercontent.com/file/109e9c8a5846c0cb011a31afbec653bd',
    'https://down-vn.img.susercontent.com/file/6b0f505aa227f73d5be77e545c48f22d',
    'https://down-vn.img.susercontent.com/file/695e4fa09c4981e2fa972543625c91ab',
    'https://down-vn.img.susercontent.com/file/sg-11134201-22120-s1rvb1lxoskvf1',
    'https://down-vn.img.susercontent.com/file/sg-11134201-22120-sug62o1bzjkvc5',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwiaifs9i7yz8e',
    'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpaa5p7k4eoe8b',
  ]
  const [imageDefault, setImageDefault] = useState(imgDetail[0] || '')
  const [imageList, setImageList] = useState([])
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [imageModule, setImageModule] = useState(imgDetail[0] || '')
  
  //
  useEffect(() => {
    setImageList(imgDetail.slice(0, 5))
  }, [])
  const handleClickListImageLeft = () => {
    if (imgStart > 0) {
      imgStart--
      imgEnd = imgStart + 5
      setImageList(imgDetail.slice(imgStart, imgEnd))
    } else return
  }
  const handleClickListImageRight = () => {
    if (imgEnd < imgDetail.length) {
      imgStart++
      imgEnd = imgStart + 5
      setImageList(imgDetail.slice(imgStart, imgEnd))
    }
    else return
  }
  const handleAddQuantity = () => {
    setQuantityProduct(quantityProduct + 1)
  }
  const handleSubQuantity = () => {
    if (quantityProduct > 1 ) {setQuantityProduct(quantityProduct - 1)}
    return
  }
  const handleClickListImageModalBack = () => {
    if (indexImgModule == 0) {
      indexImgModule = imgDetail.length - 1
      setImageModule(imgDetail[indexImgModule])
    } else {
      indexImgModule--
      setImageModule(imgDetail[indexImgModule])
    }
  }
  const handleClickListImageModalFront = () => {
    if (indexImgModule == imgDetail.length - 1) {
      indexImgModule = 0
      setImageModule(imgDetail[indexImgModule])
    } else {
      indexImgModule++
      setImageModule(imgDetail[indexImgModule])
    }
  }
  const handleClickImageModule = (index) => {
    setImageModule(imgDetail[index])
  }
  const handleClickShowImgModule = (data) => {
    const foundImage = imgDetail.find((element) => element == `${data}`);
    setImageModule(foundImage)
  }

  return (
    <div className='container'>
      <div className='cs-path-product d-flex align-items-center'>
        <div>
          <Link className='cs-path-item gl-font-size-13' to={`${config.routes.home}`}>Shoppe</Link>
          <img className='cs-path-icon mx-1' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"></img>
          <Link className='cs-path-item gl-font-size-13' to={`${config.routes.home}`}>Danh mục</Link>
          <img className='cs-path-icon mx-1' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"></img>
          <span className='cs-path-item gl-font-size-13'>Tên Sản phẩm</span>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='cs-product-briefing d-flex p-0'>
          <div className='col-4'>
            <div className='cs-product-image'>
              <div className='cs-position-relative'>
                <img className='h-100 w-100' src={imageDefault} alt='image'/>
              </div>
              <div className='cs-list-image position-relative my-1'>
                <div className='cs-list-image-block' ref={describeScroll}>
                  {imageList.map((data, index) => {
                    return (
                      <div className='cs-list-img-block-item d-block' key={index} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleClickShowImgModule(data)}>
                        <img className='cs-image-item' src={data} />
                      </div>)
                  })}
                </div>
                <div className='cs-list-image-button start-0 top-50'><FaChevronLeft style={{height: '25'}} onClick={handleClickListImageLeft} /></div>
                <div className='cs-list-image-button top-50 end-0'><FaChevronRight style={{height: '25'}} onClick={handleClickListImageRight} /></div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <div className='cs-share-product d-flex'>
                  <span className='cs-share-title'>Chia sẻ:</span>
                  <div className='cs-share-item'>
                    <FaFacebook style={{ width: '25px', height: '25px', color: 'blue'}} />
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-grow-1'>
                  <FaRegHeart style={{ width: '25px', height: '25px', color: '#ff424f', marginRight: '10px'}} />
                  <span className='gl-font-size-16'>Đã thích</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='cs-product-information-section w-100'>
              <div>
                <span className='cs-name-product'>Quần jeans baggy nam ống suông rộng màu xanh, đen vải bò dày dặn T1 - GenZ Store HN</span>
              </div>
              <div className='cs-rating-shop d-flex mt-2'>
                <div className='d-flex align-items-center pe-3'>
                  <span className='cs-score-rating me-1'>0.0</span>
                  <div className='py-1 me-1 d-flex'>
                    <div style={{ marginRight: '1px'}} className='cs-star'>
                      <FaRegStar style={{width:'16', height:'16', color:'var(--primary)'}}/>
                    </div>
                    <div style={{ marginRight: '1px'}} className='cs-star'>
                      <FaStar style={{width:'16', height:'16', color:'var(--primary)'}}/>
                    </div>
                  </div>
                </div>
                <div className='cs-rating-cmt px-3'>
                  <span className='cs-cmt-quantity'>3.6k</span>
                  <span className='py-1' style={{color: '#767676'}}>Đánh giá</span>
                </div>
                <div className='cs-report'>Tố cáo</div>
              </div>
              <div className='cs-price-product mt-2'>
                <div className='cs-price-default'><span style={{fontSize: '10px'}}>₫</span>199.000</div>
                <div className='d-flex align-items-center'>
                  <div className='cs-price'><span style={{fontSize: '20px'}}>₫</span>129.000</div>
                  <div className='cs-discount'>47% giảm</div>
                </div>
              </div>
              <div className='cs-options mt-4'>
                <div className='d-flex flex-column'>
                  <div className='cs-option-item'>
                    <h3 className='cs-option-title'>Mã giảm giá của shop</h3>
                    <div className='cs-option-value'>

                    </div>
                  </div>
                  <div className='cs-option-item'>
                    <h3 className='cs-option-title'>Phân loại</h3>
                    <div className='cs-option-value'>
                      <div className='cs-option-value-item'>
                        <button className='cs-option-value-item-btn' aria-label="Samsung A05S" aria-disabled="false">Xanh Nhạt T1</button>
                      </div>
                    </div>
                  </div>
                  <div className='cs-option-item'>
                    <h3 className='cs-option-title'>Số lượng</h3>
                    <div className='cs-option-value py-2'>
                      <div className='d-flex me-3'>
                        <button className='cs-btn-quantity' onClick={handleSubQuantity}>
                          <RiSubtractLine/>
                        </button>
                        <input className='cs-quantity-input' type="text" value={quantityProduct} onChange={(e) => setQuantityProduct(e.target.value)}/>
                        <button className='cs-btn-quantity' onClick={handleAddQuantity}>
                          <RiAddLine />
                        </button>
                      </div>
                      <span style={{color: '#757575'}}>... sản phẩm có sẵn</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-3'>
                <button type='button' className='btn btn-primary py-3 px-4'>Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
        <div className='cs-product-shop mt-3 pt-4'>
          <div className='p-3'>
            <div className='d-flex pe-3'>
              <div className='cs-shop-avatar me-3'>
                <img alt="click here to visit shop" className="Qm507c" src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-llddq2htpnee0b_tn" />
              </div>
              <div className='cs-info-shop'>
                <div className="name-shop">Shopee Topick Global</div>
                <div className='cs-status-shop'>Online 11 phút trước</div>
                <div className='cs-shop mt-1'>
                  <Link type="button" className='cs-btn-to-shop px-2'>
                    <CiShop style={{height: '18', width: '18', marginRight: '5'}} />
                    Xem shop
                  </Link>
                </div>
              </div>
              <div className='cs-info-shop-orther ps-4 flex-grow-1'>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Đánh giá</label>
                  <span className="me-2" style={{color: 'var(--primary)'}}>64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Tỉ lệ phản hồi</label>
                  <span className="me-2" style={{color: 'var(--primary)'}}>64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Tham gia</label>
                  <span className="me-2" style={{color: 'var(--primary)'}}>64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Sản phẩm</label>
                  <span className="me-2" style={{color: 'var(--primary)'}}>64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Thời gian phản hồi</label>
                  <span className="me-2" style={{color: 'var(--primary)'}}>64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Người theo dõi</label>
                  <span className="me-2" style={{color: 'var(--primary)'}}>64,4k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cs-product-content p-0 m-0'>
          <div className='cs-product-detail'>
            <div className='p-3'>
              <h2 className='cs-p-3 fs-5 fw-normal'>CHI TIẾT SẢN PHẨM</h2>
              <div className='mx-3 mt-4 mb-3'>
                <div className='d-flex mb-3'>
                  <div className='cs-product-detail-title'>Danh mục</div>
                  <div>1185</div>
                </div>
              </div>
            </div>
            <div className='p-3'>
              <h2 className='cs-p-3 fs-5 fw-normal'>MÔ TẢ SẢN PHẨM</h2>
              <div className='mx-3 mt-4 mb-3'>
                lllll
              </div>
            </div>
            <div></div>
          </div>
          <div className='cs-product-rating mt-3 p-4'>
            <div className='cs-product-rating-header p-3 fs-5 fw-normal mb-3'>ĐÁNH GIÁ SẢN PHẨM</div>
            <div className='cs-product-rating-overview d-flex p-4 mb-3'>
              <div className='cs-product-rating-score me-4'>
                <div className='cs-rating-score'>
                  <span className='fs-3'>4.6 </span>
                  <span>trên 5</span>
                </div>
                <div className='cs-rating-star mt-2'>
                  <div className='d-flex'>
                    <FaRegStar style={{width:'19', height:'19', color:'var(--primary)'}}/>
                    <FaStar style={{width:'19', height:'19', color:'var(--primary)'}}/>
                  </div>
                </div>
              </div>
              <div className='cs-product-rating-filter ms-3 d-flex flex-wrap'>
                <div className='cs-product-rating-filter_item'>Tất cả</div>
                <div className='cs-product-rating-filter_item'>5 Sao</div>
                <div className='cs-product-rating-filter_item'>4 Sao</div>
                <div className='cs-product-rating-filter_item'>3 Sao</div>
                <div className='cs-product-rating-filter_item'>2 Sao</div>
                <div className='cs-product-rating-filter_item'>1 Sao</div>
                <div className='cs-product-rating-filter_item'>Có Bình Luận</div>
                <div className='cs-product-rating-filter_item'>Có Hình Ảnh</div>
              </div>
            </div>
            <div className='cs-product-rating-comment'>
              <div className='cs-product-rating-comment_item'>
                <section className="text-center text-lg-start shadow-1-strong rounded">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="me-4">
                          <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/026.jpg"
                            className="rounded-circle img-fluid shadow-1" alt="avatar" width="40" height="40" />
                        </div>
                        <div className="flex-grow-1">
                          <p className="fs-normal lead mb-2"><strong>Anh</strong></p>
                          <p className="text-muted fw-light mb-4">
                            Ngon
                          </p>
                          <div className='d-flex'>
                            <div className='cs-comment_item__image me-2 mb-2'>
                              <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/026.jpg" width="72" height="72" />
                            </div>
                            <div className='cs-comment_item__image me-2 mb-2'>
                              <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/026.jpg" width="72" height="72" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className='cs-recommendation mt-4'>
            <div className='cs-recommendation-header'>
              <span>CÁC SẢN PHẨM KHÁC CỦA SHOP</span>
            </div>
            <div className='d-flex'>
              <div className='p-1'>Component</div>
            </div>
          </div>
          {/* <div className='cs-recommendation mt-4'>
            <div className='cs-recommendation-header'>
              <span>CÓ THỂ BẠN CŨNG THÍCH</span>
            </div>
            <div className='d-flex'>
              <div className='p-1'>Component</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className='module'>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className='d-flex'>
                  <div className='cs-modal-left'>
                    <div className='position-relative'>
                      <div className='cs-modal-left-img'>
                        <img className='cs-modal-img' src={imageModule} alt="image-product" />
                      </div>
                      <div className='cs-modal-list-image-button start-0 top-50' onClick={handleClickListImageModalBack}><FaChevronLeft /></div>
                      <div className='cs-modal-list-image-button top-50 end-0' onClick={handleClickListImageModalFront}><FaChevronRight /></div>
                    </div>
                  </div>
                  <div className='cs-modal-right'>
                    <div className='cs-modal-name-product'>Quần jeans baggy nam ống suông rộng màu xanh, đen vải bò dày dặn T1 - GenZ Store HN</div>
                    <div className='cs-modal-list-img'>
                      {imgDetail.map((data, index) => {
                        return (
                          <div className='cs-modal-img-block btn-primary' key={index} onClick={() => handleClickImageModule(index)}>
                            <img className='cs-modal-img-item' src={data} />
                          </div>)
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product