import pageAbout from './pages/page_about'
import pageContact from './pages/page_contact'
import pageGlobal from './pages/page_global'
import pageHome from './pages/page_home'
import pageWork from './pages/page_work'
import './styles/style.css'

// Global Scripts
pageGlobal()

// Local Scripts
if (window.location.pathname === '/') {
  pageHome()
} else if (window.location.pathname === '/work') {
  pageWork()
} else if (window.location.pathname === '/about') {
  pageAbout()
} else if (window.location.pathname === '/contact') {
  pageContact()
}
