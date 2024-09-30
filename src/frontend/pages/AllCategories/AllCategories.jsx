import './AllCategories.css'
import pic from '../../assets/img/balo.png'
const AllCategories = () => {
  const listCategories = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7]
  const listCategoriesDetail = [1, 2, 3, 4]
  return (<>
    <div className='container'>
      <div className='row py-4 cs-breadcrumb'>
        <div className='col'>
          <div className='d-flex align-items-center'>
            <a href="" className='cs-content ms-4'>Dạo</a>
            <span className='ps-2'>&gt;</span>
            <p className='ps-2 m-0'>Tất cả danh mục</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container p-0">
      <div className='cs-categories-list'>
        {listCategories.map((item, index) => {
          return (
            <a href='#' key={index} className="cs-categories-link">
              <div className='cs-categories-item'>
                <img src={pic} className="cs-categories-img" alt="..."/>
                <p className="gl-font-size-14 cs-categories-title">Balo & Túi Ví Nam</p>
              </div>
            </a>
          )
        })}
      </div>
      <div className='cs-categories-letter'>
        <ul className='cs-categories-ul'>
          <li className='cs-categories-li'><span className='nor'>A</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>B</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>C</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>D</span></li>
          <li className='cs-categories-li'><span className='nor'>E</span></li>
          <li className='cs-categories-li'><span className='nor'>F</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>G</span></li>
          <li className='cs-categories-li'><span className='nor'>H</span></li>
          <li className='cs-categories-li'><span className='nor'>J</span></li>
          <li className='cs-categories-li'><span className='nor'>K</span></li>
          <li className='cs-categories-li'><span className='nor'>L</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>M</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>N</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>O</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>P</span></li>
          <li className='cs-categories-li'><span className='nor'>Q</span></li>
          <li className='cs-categories-li'><span className='nor'>R</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>S</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>T</span></li>
          <li className='cs-categories-li'><span className='nor'>U</span></li>
          <li className='cs-categories-li'><span className='nor cs-categories-highlight'>V</span></li>
          <li className='cs-categories-li'><span className='nor'>W</span></li>
          <li className='cs-categories-li'><span className='nor'>X</span></li>
          <li className='cs-categories-li'><span className='nor'>Y</span></li>
          <li className='cs-categories-li'><span className='nor'>Z</span></li>
        </ul>
      </div>
      <div className='cs-categories-detail'>
        <div className='cs-categories-detail-content pb-1'>
          <div className='row'>
            <h1 className='cs-categories-detail-heading'>B</h1>
          </div>
          <div className='row'>
            <a className='cs-categories-detail-title gl-font-size-16' href="#">Balo & Túi Ví Nam</a>
          </div>
          <div className='row'>
            <div className='col-3'>
              {listCategoriesDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <a className='cs-categories-detail-name gl-font-size-14' href="">Balo Nam</a>
                  </div>
                )
              })
              }
            </div>
            <div className='col-3'>
              {listCategoriesDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <a className='cs-categories-detail-name gl-font-size-14' href="">Balo Nam</a>
                  </div>
                )
              })
              }
            </div>
            <div className='col-3'>
              {listCategoriesDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <a className='cs-categories-detail-name gl-font-size-14' href="">Balo Nam</a>
                  </div>
                )
              })
              }
            </div>
            <div className='col-3'>
              {listCategoriesDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <a className='cs-categories-detail-name gl-font-size-14' href="">Balo Nam</a>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
        <div className='cs-categories-detail-content pb-1'>
          <div className='row'>
            <h1 className='cs-categories-detail-heading'>B</h1>
          </div>
          <div className='row'>
            <a className='cs-categories-detail-title gl-font-size-16' href="#">Balo & Túi Ví Nam</a>
          </div>
          <div className='row'>
            <div className='col-3'>
              {listCategoriesDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <a className='cs-categories-detail-name gl-font-size-14' href="">Balo Nam</a>
                  </div>
                )
              })
              }
            </div>
            <div className='col-3'></div>
            <div className='col-3'></div>
            <div className='col-3'></div>
          </div>
        </div>
        <div className='cs-categories-detail-content pb-1'>
          <div className='row'>
            <h1 className='cs-categories-detail-heading'>B</h1>
          </div>
          <div className='row'>
            <a className='cs-categories-detail-title gl-font-size-16' href="#">Balo & Túi Ví Nam</a>
          </div>
          <div className='row'>
            <div className='col-3'>
              {listCategoriesDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <a className='cs-categories-detail-name gl-font-size-14' href="">Balo Nam</a>
                  </div>
                )
              })
              }
            </div>
            <div className='col-3'></div>
            <div className='col-3'></div>
            <div className='col-3'></div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AllCategories