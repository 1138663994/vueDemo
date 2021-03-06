import Home from './home'

const blogLayout = () => import('@/views/blogLayout')
console.log('blogLayout')
const routes = [
  {
    path: '/webblog',
    name: 'blog',
    component: blogLayout,
    redirect: '/webblog/home',
    children: [
      ...Home
    ]
  }
]

export default routes
