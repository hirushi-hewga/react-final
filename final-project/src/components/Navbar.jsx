import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {AppBar, Box, IconButton} from '@mui/material'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <AppBar backgroundColor={muiTheme.palette.primary.main} position='fixed' sx={{height: '60px'}}>
            <Box sx={{display: 'flex', alignItems: 'center', height: '100%'}}>
                <Box sx={{flexGrow: 8, display: 'flex', justifyContent: 'space-evenly', fontSize: "large"}}>
                    <Link to='/'>MainPage</Link>
                </Box>
                <Box sx={{flexGrow: 1, display: 'flex'}}>
                    {true ? <IconButton>
                        <DarkModeIcon/>
                    </IconButton> : <IconButton>
                        <LightModeIcon/>
                    </IconButton>}
                </Box>
            </Box>
        </AppBar>
    )
}

export default Navbar