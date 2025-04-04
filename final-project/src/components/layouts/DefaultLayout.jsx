// import {Box, Container} from '@mui/material'
import {Container} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import NavigationBar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const DefaultLayout = () => {
    return (
        <>
            <Container className='min-vh-100 d-flex flex-column m-0 p-0'>
                <NavigationBar/>
                <Container className='flex-grow-1'>
                    <Outlet/>
                </Container>
                <Footer/>
            </Container>
        </>
    )
}

export default DefaultLayout