import config from '../config'
import DefaultLayout from '../layout/DefaultLayout'
import LoginLayout from '../layout/LoginLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import AllCategories from '../pages/AllCategories'
import DetailCategories from '../pages/DetailCategories/DetailCategories'

const frontendRoutes = [
  {
    path: config.routes.login,
    component: Login,
    layout: LoginLayout
  },
  {
    path: config.routes.register,
    component: Register,
    layout: LoginLayout
  },
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout
  },
  {
    path: config.routes.productDetail,
    component: ProductDetail,
    layout: DefaultLayout
  },
  {
    path: config.routes.allCategories,
    component: AllCategories,
    layout: DefaultLayout
  },
  {
    path: config.routes.detailCategories,
    component: DetailCategories,
    layout: DefaultLayout
  }
]

export { frontendRoutes }