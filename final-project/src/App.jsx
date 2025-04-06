import DefaultLayout from './components/layouts/DefaultLayout'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import MainPage from './pages/mainPage/MainPage'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { darkTheme, lightTheme } from './theming/themes'
import CarsPage from './pages/carsPage/CarsPage'
// import { ThemeProvider } from '@mui/material/styles'

const App = () => {
  const {theme} = useSelector(state => state.theme)

  useEffect(() => {
    const localData = localStorage.getItem('theme')
    if (!localData) {
      localStorage.setItem('theme', 'light')
    }
  }, [])

  return (
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='cars' element={<CarsPage/>}>

          </Route>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
  )
}

export default App