import config from '../config'
import DefaultLayout from '../layout/DefaultLayout'
import Home from '../pages/Home'
import About from '../pages/About'

const frontendRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout
  },
  {
    path: config.routes.about,
    component: About,
    layout: DefaultLayout
  }
]

export { frontendRoutes }