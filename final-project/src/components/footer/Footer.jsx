import {Container} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {darkTheme, lightTheme} from '../../theming/themes'

const Footer = () => {
    const {theme} = useSelector(state => state.theme)
    const themeStyle = theme === 'dark' ? darkTheme : lightTheme

    return (
        <Container style={{backgroundColor: themeStyle.palette.primary.main}}>
            <h1>Footer</h1>
        </Container>
    )
}

export default Footer