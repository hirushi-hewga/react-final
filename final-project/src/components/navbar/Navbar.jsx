// import DarkModeIcon from '@mui/icons-material/DarkMode'
// import LightModeIcon from '@mui/icons-material/LightMode'
// import {AppBar, Box, IconButton, useTheme} from '@mui/material'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import useAction from '../../hooks/useAction'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {Sun, Moon} from 'react-bootstrap-icons'
import {darkTheme, lightTheme} from '../../theming/themes'

const NavigationBar = () => {
    const {theme} = useSelector(state => state.theme)
    const {setTheme} = useAction()
    const themeStyle = theme === 'dark' ? darkTheme : lightTheme
    const textColor = themeStyle.palette.text.main

    const linkStyle = {
        color: textColor,
        textDecoration: 'none'
    }

    return (
        <Navbar sticky='top' className='min-vw-100 m-0' style={{height: '60px', backgroundColor: themeStyle.palette.primary.main}}>
            <Container fluid className='ms-4 me-4' style={{height: '100%'}}>
                <Navbar.Brand className='me-4' style={{fontWeight: 'bold', color: textColor}} as={Link} to='/'>Home</Navbar.Brand>
                <Container fluid>
                    <Nav>
                        <Nav.Link style={linkStyle} as={Link} to='/cars'>Автомобілі</Nav.Link>
                    </Nav>
                </Container>
                {theme === 'dark' ? <Button style={{height: '40px', width: '40px', color: textColor, backgroundColor: themeStyle.palette.secondary.main, borderColor: themeStyle.palette.primary.light}} onClick={() => setTheme('light')}>
                    <Sun/>
                </Button> : <Button style={{height: '40px', width: '40px', color: textColor, backgroundColor: themeStyle.palette.secondary.main, borderColor: themeStyle.palette.primary.light}} onClick={() => setTheme('dark')}>
                    <Moon/>
                </Button>}
            </Container>
        </Navbar>
    )
}

export default NavigationBar