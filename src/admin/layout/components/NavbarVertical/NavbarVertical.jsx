import './NavbarVertical.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './NavbarVertical.module.scss'

const cx = classNames.bind(styles)

const NavbarVertical = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='custom-vertical'>
      <div className=''><Link to="#" className=''>Home</Link></div>
      <div className={cx({ collapsed: isCollapsed })}>
        <div className='' style={{ display: isCollapsed ? 'none' : 'block' }}>
          <div className=''><Link to="#" className=''>Link 1</Link></div>
        </div>
        <div className='' style={{ display: isCollapsed ? 'block' : 'none' }}>
          <div className=''><Link to="#" className=''>Link 1111111111</Link></div>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              {/*  */}
              <h2 className="accordion-header">
                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="flush-collapseOne" className="" >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className=" show">1</div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="">2</div>
                </div>
              </div>
              {/*  */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="" >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne2">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne2" className=" show">1</div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo2" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo2">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo2" className="">2</div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <div className='custom-toggle' onClick={handleSidebarToggle}>Toggle</div>
    </div>
  )
}

export default NavbarVertical;
