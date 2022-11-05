import Nav from '../components/Nav'
import Home from '../pages/Home'
import Characters from '../components/Characters';

export const routesConfig = [
  {
    id: 1,
    path: '/*',
    element: <Nav />
  },
  {
    id: 2,
    path: '/',
    element: <Home />
  },
  {
    id: 3,
    path: '/characters',
    element: <Characters />
  }
]