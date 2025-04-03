import DefaultLayout from './components/DefaultLayout'
import NotFoundPage from './pages/NotFoundPage'
import MainPage from './pages/MainPage'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import {useEffect} from 'react'

const App = () => {
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
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
  )
}

export default App