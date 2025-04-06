import {Container} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import NavigationBar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import {useSelector} from 'react-redux'
import {darkTheme, lightTheme} from '../../theming/themes'

const DefaultLayout = () => {
    const {theme} = useSelector(state => state.theme)
    const themeStyle = theme === 'dark' ? darkTheme : lightTheme

    return (
        <>
            <Container className='min-vh-100 d-flex flex-column m-0 p-0'>
                <NavigationBar/>
                <Container fluid className='flex-grow-1 min-vw-100' style={{borderBottom: `1px solid ${themeStyle.palette.secondary.light}`, borderTop: `1px solid ${themeStyle.palette.secondary.light}`, backgroundColor: themeStyle.palette.primary.dark}}>
                    <Outlet/>
                </Container>
                <Footer/>
            </Container>
        </>
    )
}

export default DefaultLayout