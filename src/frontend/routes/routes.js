import config from '../config'
import DefaultLayout from '../layout/DefaultLayout'
import LoginLayout from '../layout/LoginLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import AllCategories from '../pages/AllCategories'

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
    path: config.routes.allCategories,
    component: AllCategories,
    layout: DefaultLayout
  }
]

export { frontendRoutes }