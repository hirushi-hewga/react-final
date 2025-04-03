import {Box, Container} from '@mui/material'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const DefaultLayout = () => {
    return (
        <>
            <Box style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
                <Navbar/>
                <Container sx={{flexGrow: 1, marginTop: '60px'}}>
                    <Outlet/>
                </Container>
                <Footer/>
            </Box>
        </>
    )
}

export default DefaultLayout