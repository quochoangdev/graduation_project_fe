import './ProductDetail.css'
import { Link } from 'react-router-dom'
import config from '../../config'
import { useRef, useState } from 'react'
import { FaFacebook, FaRegStar, FaStar, FaRegHeart, FaChevronLeft, FaChevronRight, FaAngleDown } from 'react-icons/fa6'
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'
import { CiShop } from 'react-icons/ci'
import { BsCartPlus, BsThreeDotsVertical } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { IoIosChatboxes } from 'react-icons/io'
import { BiSolidLike } from 'react-icons/bi'
import ProductCard from '../component/ProductCard'

let indexImgModule = 0

const ProductDetail = () => {
  const describeScroll = useRef()
  const imgDetail = [1, 2, 3, 4, 5, 6, 7]
  const imageList = imgDetail.slice(0, 5)
  const classify = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const productsHotSale = [1, 2, 3]
  const listComment = [1, 2, 3, 4]
  const commentImg = ['https://down-vn.img.susercontent.com/file/vn-11134103-7r98o-lxwbzb1cel0b34.webp', 'https://down-vn.img.susercontent.com/file/vn-11134103-7r98o-lxwbzb1bz4yh42.webp', 'https://down-vn.img.susercontent.com/file/vn-11134103-7r98o-lxwbzb1bz4rfb5.webp']
  const productShopRecomend = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [imageModule, setImageModule] = useState(imgDetail[0] || '')

  const [isCheckedReport, setIsCheckedReport] = useState('')
  const [commentImgZoom, setCommentImgZoom] = useState('')
  const [isZoomImg, setIsZoomImg] = useState(false)
  const [indexCmtHook, setIndexCmtHook] = useState()
  const [indexImageProductModule, setIndexImageProductModule] = useState(0)
  const [indexSelectTypeProduct1, setIndexSelectTypeProduct1] = useState()
  const [indexSelectTypeProduct2, setIndexSelectTypeProduct2] = useState()
  const [idFilterComment, setIdFilterComment] = useState('')
  const [indexImgItemHook, setIndexImgItemHook] = useState()

  const handleClickListImageLeft = () => {
  }

  const handleClickListImageRight = () => {
  }

  const handleAddQuantity = () => {
    setQuantityProduct(quantityProduct + 1)
  }
  const handleSubQuantity = () => {
    if (quantityProduct > 1 ) {setQuantityProduct(quantityProduct - 1)}
    return
  }

  const handleClickListImageModalPrev = () => {
    if (indexImgModule == 0) {
      indexImgModule = imgDetail.length - 1
      setImageModule(imgDetail[indexImgModule])
    } else {
      indexImgModule--
      setImageModule(imgDetail[indexImgModule])
    }
  }
  const handleClickListImageModalNext = () => {
    if (indexImgModule == imgDetail.length - 1) {
      indexImgModule = 0
      setImageModule(imgDetail[indexImgModule])
    } else {
      indexImgModule++
      setImageModule(imgDetail[indexImgModule])
    }
  }

  const handleClickImageModule = (index) => {
    setIndexImageProductModule(index)
    setImageModule(imgDetail[index])
  }

  const handleClickShowImgModule = (data) => {
    const foundImage = imgDetail.find((element) => element == `${data}`)
    setImageModule(foundImage)
  }
  const handleSelectType1 = (index) => {
    setIndexSelectTypeProduct1(index)
  }
  const handleSelectType2 = (index) => {
    setIndexSelectTypeProduct2(index)
  }

  const handleFilterCmt = (event) => {
    setIdFilterComment(event.target.id)
  }
  const handleRadioChange = (event) => {
    // Kiểm tra nếu radio này được chọn
    setIsCheckedReport(event.target.id)
  }
  const handleImgCmt = (src, indexCmt, indexImgItem) => {
    setIndexImgItemHook(indexImgItem)
    if (commentImgZoom === src) {
      setCommentImgZoom('')
      setIsZoomImg(false)
    }
    else {
      setIndexCmtHook(indexCmt)
      setIsZoomImg(true)
      setCommentImgZoom(src)
    }
  }
  const handlePrevImgZoom = () => {
  }
  const handleNextImgZoom = () => {
  }
  const handleScrollRecommendL = () => { describeScroll.current.scrollLeft -= 1100 }
  const handleScrollRecommendR = () => { describeScroll.current.scrollLeft += 1100 }
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
              <div className='position-relative'>
                <img className='cs-product-img-block h-100 w-100' data-bs-toggle="modal" data-bs-target="#imgProductModal" src={'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpdn4wv4disb21_tn.webp'} alt='image'/>
              </div>
              <div className='cs-list-image position-relative my-1'>
                <div className='cs-list-image-block'>
                  {imageList.map((data, index) => {
                    return (
                      <div className='cs-list-img-block-item d-block' key={index} data-bs-toggle="modal" data-bs-target="#imgProductModal" onClick={() => handleClickShowImgModule(data)}>
                        <img className='cs-image-item' src={'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpdn4wv4disb21_tn.webp'} />
                      </div>
                    )
                  })}
                </div>
                <div className='cs-list-image-button start-0 top-50'><FaChevronLeft style={{ height: '25' }} onClick={handleClickListImageLeft} /></div>
                <div className='cs-list-image-button top-50 end-0'><FaChevronRight style={{ height: '25' }} onClick={handleClickListImageRight} /></div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <div className='cs-share-product d-flex'>
                  <span className='cs-share-title'>Chia sẻ:</span>
                  <div className='cs-share-item'>
                    <FaFacebook className='cs-share-fb'/>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-grow-1'>
                  <FaRegHeart className='cs-likes-product-icon'/>
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
                    <div className='cs-star'>
                      <FaStar className='gl-star'/>
                    </div>
                    <div className='cs-star'>
                      <FaStar className='gl-star'/>
                    </div>
                    <div className='cs-star'>
                      <FaRegStar className='gl-star'/>
                    </div>
                    <div className='cs-star'>
                      <FaRegStar className='gl-star'/>
                    </div>
                    <div className='cs-star'>
                      <FaRegStar className='gl-star'/>
                    </div>
                  </div>
                </div>
                <div className='cs-rating-cmt px-3'>
                  <span className='cs-cmt-quantity'>3.6k</span>
                  <span className='py-1 gl-sub-color-text'>Đánh giá</span>
                </div>
                <div className='cs-rating-cmt px-3'>
                  <span className='cs-sold'>3.6k</span>
                  <span className='py-1 gl-sub-color-text'>Đã bán</span>
                </div>
                <div className='cs-report'>Tố cáo</div>
              </div>
              <div className='cs-price-product mt-2'>
                <div className='cs-price-default'><span className='gl-font-size-10'>₫</span>199.000</div>
                <div className='d-flex align-items-center'>
                  <div className='cs-price'><span className='gl-font-size-20'>₫</span>129.000</div>
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
                    <h3 className='cs-option-title'>Vận chuyển</h3>
                    <div className='cs-option-transport'>
                      <div className='mx-1'>
                        <FiTruck className='cs-option-transport-icon'/>
                      </div>
                      <div className='d-flex ms-2'>
                        <span className='gl-sub-color-text me-2'>Vận chuyển tới</span>
                        <div className='cs-option-transport-location ps-1'>Phường Hòa An, Quận Cẩm Lệ<FaAngleDown className='ms-1'/></div>
                      </div>
                    </div>
                  </div>
                  <div className='cs-option-item'>
                    <h3 className='cs-option-title'>Phân loại</h3>
                    <div>
                      <div className='cs-option-value'>
                        {classify.map((data, index) => {
                          return (
                            <div className='cs-option-value-item' key={index}>
                              <button className={indexSelectTypeProduct1 === index ? 'active cs-option-value-item-btn' : 'cs-option-value-item-btn'} onClick={() => handleSelectType1(index)}>Xanh Nhạt T1</button>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='cs-option-item'>
                    <h3 className='cs-option-title'>Kích cỡ</h3>
                    <div>
                      <div className='cs-option-value'>
                        {classify.map((data, index) => {
                          return (
                            <div className='cs-option-value-item' key={index}>
                              <button className={indexSelectTypeProduct2 === index ? 'active cs-option-value-item-btn' : 'cs-option-value-item-btn'} onClick={() => handleSelectType2(index)}>26</button>
                            </div>
                          )
                        })}
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
                      <span className='gl-sub-color-text'>... sản phẩm có sẵn</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ps-3 mt-3 d-flex align-items-center'>
                <button type='button' className='cs-btn-add-cart me-3'><BsCartPlus className='cs-btn-add-cart-icon'/>Thêm vào giỏ hàng</button>
                <button type='button' className='cs-btn-buy btn-primary'>Mua ngay</button>
              </div>
              <div style={{ marginTop: '30px', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}></div>
            </div>
          </div>
        </div>
        <div className='cs-product-shop mt-3 pt-4'>
          <div className='p-3'>
            <div className='d-flex pe-3'>
              <div className='cs-shop-avatar me-3'>
                <img alt="click here to visit shop" className="" src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-llddq2htpnee0b_tn" />
              </div>
              <div className='cs-info-shop'>
                <div className="name-shop">Shopee Topick Global</div>
                <div className='cs-status-shop'>Online 11 phút trước</div>
                <div className='cs-shop'>
                  <button type="button" className='cs-btn-chat-shop px-3 me-2'>
                    <IoIosChatboxes className='btn-shop-icon'/>
                    Chat ngay
                  </button>
                  <Link type="button" className='cs-btn-to-shop px-3'>
                    <CiShop className='btn-shop-icon'/>
                    Xem shop
                  </Link>
                </div>
              </div>
              <div className='cs-info-shop-orther ps-4 flex-grow-1'>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Đánh giá</label>
                  <span className="me-2 gl-color-primary">64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Tỉ lệ phản hồi</label>
                  <span className="me-2 gl-color-primary">64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Tham gia</label>
                  <span className="me-2 gl-color-primary">64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Sản phẩm</label>
                  <span className="me-2 gl-color-primary">64,4k</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Thời gian phản hồi</label>
                  <span className="me-2 gl-color-primary">Trong vài giờ</span>
                </div>
                <div className="d-flex justify-content-between">
                  <label className="me-2">Người theo dõi</label>
                  <span className="me-2 gl-color-primary">64,4k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product detail */}
        <div className='cs-product-content p-0 m-0 row'>
          <div className='left-content col-10 p-0'>
            <div className='cs-product-detail'>
              <div className='p-3'>
                <h2 className='cs-content-header p-3 fs-5 fw-normal'>CHI TIẾT SẢN PHẨM</h2>
                <div className='mx-3 mt-4 mb-3'>
                  <div className='d-flex mb-3'>
                    <div className='cs-product-detail-title'>Danh mục</div>
                    <div>1185</div>
                  </div>
                  <div className='d-flex mb-3'>
                    <div className='cs-product-detail-title'>Danh mục</div>
                    <div>1185</div>
                  </div>
                  <div className='d-flex mb-3'>
                    <div className='cs-product-detail-title'>Danh mục</div>
                    <div>1185</div>
                  </div>
                </div>
              </div>
              <div className='p-3'>
                <h2 className='cs-content-header p-3 fs-5 fw-normal'>MÔ TẢ SẢN PHẨM</h2>
                <div className='mx-3 mt-4 mb-3'>
                  lllll
                </div>
              </div>
              <div></div>
            </div>
            {/* product reviews */}
            <div className='cs-product-rating mt-3 p-4'>
              <div className='cs-content-header p-3 fs-5 fw-normal mb-3'>ĐÁNH GIÁ SẢN PHẨM</div>
              <div className='cs-product-rating-overview d-flex p-4 mb-3'>
                {/* product rating star */}
                <div className='cs-product-rating-score me-4'>
                  <div className='cs-rating-score'>
                    <span className='fs-3'>4.6 </span>
                    <span className='gl-font-size-16'>trên 5</span>
                  </div>
                  <div className='cs-rating-star mt-2'>
                    <div className='d-flex gl-font-size-20'>
                      <FaRegStar className='gl-star'/>
                      <FaRegStar className='gl-star'/>
                      <FaStar className='gl-star'/>
                      <FaStar className='gl-star'/>
                      <FaStar className='gl-star'/>
                    </div>
                  </div>
                </div>
                {/* Product review filter */}
                <div className='cs-product-rating-filter ms-3 d-flex flex-wrap'>
                  <div className={`cs-product-rating-filter_item ${idFilterComment === 'allCmt' ? 'active' : ''}`} id='allCmt' onClick={handleFilterCmt}>Tất cả</div>
                  <div className={`cs-product-rating-filter_item ${idFilterComment === 'fiveStar' ? 'active' : ''}`} id='fiveStar' onClick={handleFilterCmt}>5 Sao</div>
                  <div className={`cs-product-rating-filter_item ${idFilterComment === 'fourStar' ? 'active' : ''}`} id='fourStar' onClick={handleFilterCmt}>4 Sao</div>
                  <div className={`cs-product-rating-filter_item ${idFilterComment === 'threeStart' ? 'active' : ''}`} id='threeStart' onClick={handleFilterCmt}>3 Sao</div>
                  <div className={`cs-product-rating-filter_item ${idFilterComment === 'twoStar' ? 'active' : ''}`} id='twoStar' onClick={handleFilterCmt}>2 Sao</div>
                  <div className={`cs-product-rating-filter_item ${idFilterComment === 'oneStar' ? 'active' : ''}`} id='oneStar' onClick={handleFilterCmt}>1 Sao</div>
                  <div className={`cs-product-rating-filter_item ${idFilterComment === 'isText' ? 'active' : ''}`} id='isText' onClick={handleFilterCmt}>Có Bình Luận</div>
                  <div className={`cs-product-rating-filter_item ${idFilterComment === 'isImgVideo' ? 'active' : ''}`} id='isImgVideo' onClick={handleFilterCmt}>Có Hình Ảnh</div>
                </div>
              </div>
              <div className='cs-product-rating-comment'>
                {listComment.map((data, indexCmt) => {
                  return (
                    <div className='cs-product-rating-comment-item' key={indexCmt}>
                      <section className="text-center text-lg-start shadow-1-strong rounded">
                        <div className="d-flex">
                          <div className="me-4">
                            <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/026.jpg"
                              className="rounded-circle shadow-1" alt="avatar" width="40" height="40" />
                          </div>
                          <div className="cs-comment-main flex-grow-1">
                            <Link className='cs-comment-author-name'>giangng988</Link>
                            <div className='d-flex mt-1'>
                              <FaRegStar className='gl-star'/>
                              <FaRegStar className='gl-star'/>
                              <FaStar className='gl-star'/>
                              <FaStar className='gl-star'/>
                              <FaStar className='gl-star'/>
                            </div>
                            <div className='cs-comment-time gl-sub-color-text gl-font-size-12 mt-2 mb-3'>2024-08-22 13:52</div>
                            <div className='cs-comment-content gl-font-size-14 my-3'>Bàn phím cơ gaming không dây AULA F75 Reaper Switch là một lựa chọn tuyệt vời cho các game thủ muốn kết hợp giữa hiệu suất và tính thẩm mỹ. Sản phẩm này nổi bật với thiết kế ấn tượng, các tính năng vượt trội, và khả năng kết nối linh hoạt, đáp ứng mọi nhu cầu của người dùng.</div>
                            <div className='cs-comment-img'>
                              <div className='cs-comment-img-video'>
                                {commentImg.map((data, indexImgItem) => {
                                  return (
                                    <div className='cs-img-video-item col-1 me-1' key={indexImgItem}>
                                      <img className={`cs-comment-item-img ${indexImgItemHook === indexImgItem && indexCmtHook === indexCmt ? 'active' : ''}`} src={data} alt="" onClick={() => handleImgCmt(data, indexCmt, indexImgItem)}/>
                                    </div>
                                  )
                                })}
                              </div>
                              {indexCmtHook === indexCmt && isZoomImg != '' &&
                                (<div className='cs-zoom-block col-4 p-0 mt-2'>
                                  <div className='cs-img-zoom w-100'>
                                    <img className='w-100 h-100' src={commentImgZoom} alt="" />
                                  </div>
                                  <div className='cs-zoom-control-btn top-50 start-0' onClick={handlePrevImgZoom}>
                                    <FaChevronLeft className='cs-control-img-zoom-icon'/>
                                    <span className="visually-hidden">Previous</span>
                                  </div>
                                  <div className='cs-zoom-control-btn top-50 end-0' onClick={handleNextImgZoom}>
                                    <FaChevronRight className='cs-control-img-zoom-icon'/>
                                    <span className="visually-hidden">Next</span>
                                  </div>
                                </div>)
                              }
                            </div>
                            <div className='cs-comment-shop-reply mt-2'>
                              <div className='cs-shop-reply-header'>phản hồi của Người Bán</div>
                              <div className='cs-shop-reply-main'>Cảm ơn bạn đã ủng hộ shop !</div>
                            </div>
                            <div className='cs-comment-actions gl-sub-color-text d-flex justify-content-between mt-3'>
                              <div className='cs-action-like d-flex'>
                                <div className='cs-action-like-icon me-1'><BiSolidLike /></div>
                                <div className='cs-action-like-count'>12</div>
                              </div>
                              <div className='cs-action-report dropdown'>
                                <BsThreeDotsVertical data-bs-toggle="dropdown" key={indexCmt}/>
                                <div className='dropdown-menu cs-report-comment px-3' data-bs-toggle="modal" data-bs-target="#reportModal" tabIndex="-1">Báo cáo</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  )
                })}
                <div className='cs-pagination-comment'>
                  <nav aria-label="Page navigation example">
                    <ul className='pagination'>
                      <li className='page-item'>
                        <a className='page-link' href="#" aria-label="Previous">
                          <FaChevronLeft className='sr-only' />
                        </a>
                      </li>
                      <li className='page-item'><a className='page-link' href="#">1</a></li>
                      <li className='page-item'><a className='page-link' href="#">2</a></li>
                      <li className='page-item'><a className='page-link' href="#">3</a></li>
                      <li className='page-item'>
                        <a className='page-link' href="#" aria-label="Next">
                          <FaChevronRight className='sr-only' />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* Other products of the shop */}
            <div className='cs-recommend mt-4'>
              <div className='cs-recommend-header'>
                <span>CÁC SẢN PHẨM KHÁC CỦA SHOP</span>
              </div>
              <div className='cs-recommend-content'>
                <div className='cs-recommend-list d-flex' ref={describeScroll}>
                  {productShopRecomend.map((data, index) => {
                    return (
                      <div className='p-1 col-2' key={index}>
                        <ProductCard />
                      </div>)
                  })}
                </div>
                <FaChevronLeft className='cs-recommend-scroll-btn top-50 start-0' onClick={handleScrollRecommendL}/>
                <FaChevronRight className='cs-recommend-scroll-btn top-50 end-0' onClick={handleScrollRecommendR}/>
              </div>
            </div>
            <div className='cs-recommend mt-4'>
              <div className='cs-recommend-header'>
                <span>CÓ THỂ BẠN CŨNG THÍCH</span>
              </div>
              <div className='d-flex flex flex-wrap'>
                {productShopRecomend.map((data, index) => {
                  return (
                    <div className='p-1 col-2' key={index}>
                      <ProductCard />
                    </div>)
                })}
              </div>
              <div className='d-flex align-items-center justify-content-center'>
                <Link><button className='cs-see-more'>Xem thêm</button></Link>
              </div>
            </div>
          </div>
          {/*right: hot product of the shop*/}
          <div className='right-content col-2 p-0'>
            <div className='cs-product-hot-sales'>
              <h2 className='cs-right-content-header'>Top sản phẩm nổi bật</h2>
              {productsHotSale.map((data, index) => {
                return (
                  <div className='cs-product-hot-sales-item' key={index}>
                    <div className='cs-item-card'>
                      <img className='cs-item-card-img' src='https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljdypb0bv4k2e8@resize_w192_nl.webp'/>
                      <div className='cs-item-card-body'>
                        <div className='cs-item-card-name'>Áo sơ mi nam Basic chất kaki cao cấp cực đẹp</div>
                        <div className='cs-item-card-price'><span>₫</span>99.000</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div>
        {/* modal show image product */}
        <div className="modal fade" id="imgProductModal" tabIndex={-1} aria-labelledby="imgProductModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className='d-flex'>
                  <div className='cs-modal-left'>
                    <div className='position-relative'>
                      <div className='cs-modal-left-img'>
                        <img className='cs-modal-img' src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpdn4wv4disb21_tn.webp' alt="image-product" />
                      </div>
                      <div className='cs-modal-list-image-button start-0 top-50' onClick={handleClickListImageModalPrev}><FaChevronLeft /></div>
                      <div className='cs-modal-list-image-button top-50 end-0' onClick={handleClickListImageModalNext}><FaChevronRight /></div>
                    </div>
                  </div>
                  <div className='cs-modal-right'>
                    <div className='cs-modal-name-product'>Quần jeans baggy nam ống suông rộng màu xanh, đen vải bò dày dặn T1 - GenZ Store HN</div>
                    <div className='cs-modal-list-img'>
                      {imgDetail.map((data, index) => {
                        return (
                          <div className={indexImageProductModule === index ? 'cs-modal-img-block active' : 'cs-modal-img-block'} key={index} onClick={() => handleClickImageModule(index)}>
                            <img className='cs-modal-img-item' src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpdn4wv4disb21_tn.webp' />
                          </div>)
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal report comment */}
        <div className="modal" id="reportModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="header pt-4 px-4">
                <h5 className="modal-title gl-font-size-20" id="exampleModalLabel">Báo cáo đánh giá này</h5>
              </div>
              <div className="modal-body p-4">
                <div className='mb-4 gl-font-size-16'>Vui lòng chọn lý do báo cáo</div>
                <div className='block-check'>
                  <div className="form-check py-3">
                    <input className="form-check-input cs-check-input-report" type="radio" id="radioCheck1" onChange={handleRadioChange} checked={isCheckedReport === 'radioCheck1'}/>
                    <label className="form-check-label gl-font-size-16" htmlFor="flexRadioDefault1">
                      Đánh giá thô tục phản cảm
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input className="form-check-input cs-check-input-report" type="radio" id="radioReport2" onChange={handleRadioChange} checked={isCheckedReport === 'radioReport2'}/>
                    <label className="form-check-label gl-font-size-16" htmlFor="flexRadioDefault2">
                      Chứa hình ảnh phản cảm, khỏa thân, khiêu dâm
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input className="form-check-input cs-check-input-report" type="radio" id="radioReport3" onChange={handleRadioChange} checked={isCheckedReport === 'radioReport3'}/>
                    <label className="form-check-label gl-font-size-16" htmlFor="flexRadioDefault3">
                      Đánh giá trùng lặp (thông tin rác)
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input className="form-check-input cs-check-input-report" type="radio" id="radioReport4" onChange={handleRadioChange} checked={isCheckedReport === 'radioReport4'}/>
                    <label className="form-check-label gl-font-size-16" htmlFor="flexRadioDefault2">
                      Chứa thông tin cá nhân
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input className="form-check-input cs-check-input-report" type="radio" id="radioReport5" onChange={handleRadioChange} checked={isCheckedReport === 'radioReport5'}/>
                    <label className="form-check-label gl-font-size-16" htmlFor="flexRadioDefault1">
                      Quảng cáo trái phép
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input className="form-check-input cs-check-input-report" type="radio" id="radioReport6" onChange={handleRadioChange} checked={isCheckedReport === 'radioReport6'}/>
                    <label className="form-check-label gl-font-size-16" htmlFor="flexRadioDefault2">
                      Đánh giá không chính xác / gây hiểu lầm (ví dụ như: đánh giá và sản phẩm không khớp, ...)
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input className="form-check-input cs-check-input-report" type="radio" id="radioOtherReport" onChange={handleRadioChange} checked={isCheckedReport === 'radioOtherReport'}/>
                    <label className="form-check-label gl-font-size-16" htmlFor="flexRadioDefault1">
                      Vi phạm khác
                    </label>
                  </div>
                  {isCheckedReport === 'radioOtherReport' && (<div className="">
                    <input className='cs-inputReport' type="text" placeholder="Vui lòng mô tả chi tiết vi phạm (bắt buộc)" maxLength="300" value="" />
                  </div>)}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="cs-btn-modal-report btn" data-bs-dismiss="modal" onClick={() => setIsCheckedReport('')}>HỦY</button>
                <button type="button"
                  className={isCheckedReport != '' ? 'cs-btn-modal-report btn btn-primary' : 'cs-btn-modal-report btn btn-primary disable'}
                  disabled={isCheckedReport === ''}
                >
                  GỬI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail