import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {AppBar, Box, IconButton, useTheme} from '@mui/material'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import useAction from '../../hooks/useAction'

const Navbar = () => {
    const {theme} = useSelector(state => state.theme)
    const {setTheme} = useAction()
    const muiTheme = useTheme()
    const textStyle = {color: muiTheme.palette.text.main}

    return (
        <AppBar position='fixed' sx={{height: '60px'}}>
            <Box sx={{display: 'flex', alignItems: 'center', height: '100%'}}>
                <Box sx={{flexGrow: 8, display: 'flex', justifyContent: 'space-evenly', fontSize: "large", color: muiTheme.palette.text.main}}>
                    <Link style={textStyle} to='/'>MainPage</Link>
                </Box>
                <Box sx={{flexGrow: 1, display: 'flex'}}>
                    {theme === 'dark' ? <IconButton sx={textStyle} onClick={() => setTheme('light')}>
                        <LightModeIcon />
                    </IconButton> : <IconButton sx={textStyle} onClick={() => setTheme('dark')}>
                        <DarkModeIcon/>
                    </IconButton>}
                </Box>
            </Box>
        </AppBar>
    )
}

export default Navbar