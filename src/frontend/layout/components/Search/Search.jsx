import { useEffect, useRef, useState, createContext } from 'react'
import { IoIosSearch, IoMdCloseCircle } from 'react-icons/io'
import { FaSpinner } from 'react-icons/fa'
import HeadlessTippy from '@tippyjs/react/headless'

import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import ProductItem from './ProductItem/ProductItem'
import useDebounce from '../../../../main/hooks/useDebounce'
// import { readProductSearch } from '../../../services/apiUserService'

const cx = classNames.bind(styles)
export const SearchValueContext = createContext(null)

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  const debounceValue = useDebounce(searchValue, 500)

  const inputRef = useRef()

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([])
      return
    }
    setLoading(true)
    const fetchApi = async () => {
      setLoading(true)
      // const result = await readProductSearch(1, 5, searchValue)
      // setSearchResult(result?.DT?.products)
      setLoading(false)
    }
    fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue])

  // handle hide result
  const handleHideResult = () => {
    setShowResult(false)
  }

  // handle clear
  const handleClear = () => {
    setSearchValue('')
    setSearchResult([])
    inputRef.current.focus()
  }

  // handle on change
  const handleOnChang = (e) => {
    const inputValue = e.target.value
    if (!inputValue.startsWith(' ')) {
      setSearchValue(inputValue)
    }
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={cx('header-search')}>
      <HeadlessTippy
        interactive='true'
        visible={showResult && searchResult?.length > 0}
        render={(attrs) => {
          return (
            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
              <h4 className={cx('result-title')}>Sản phẩm gợi ý</h4>
              {searchResult && searchResult.map((apiItem, index) => {
                return <ProductItem product={apiItem} key={`product-${index}`} />
              })}
            </div>
          )
        }}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            className={cx('input-search')}
            value={searchValue}
            placeholder='Điểm đến, địa điểm thăm quan, khách...'
            spellCheck={false}
            onChange={handleOnChang}
            ref={inputRef}
            onFocus={() => setShowResult(true)}
          />
          {searchValue.length > 0 && (
            <button className={cx('clear')}>
              {!!searchValue && loading ? (
                <FaSpinner className={cx('spinner-icon')} />
              ) : (
                <IoMdCloseCircle className={cx('clear-icon')} onClick={handleClear} />
              )}
            </button>
          )}
          <span className={cx('wall')}></span>
          <button className={cx('btn-search')} onClick={handleSubmit}>
            <IoIosSearch className={cx('btn-search-icon')} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
