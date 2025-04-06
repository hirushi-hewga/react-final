import {useSelector} from "react-redux"
import {darkTheme, lightTheme} from "../../theming/themes"
import { Container } from "react-bootstrap"

const MainPage = () => {
    const {theme} = useSelector(state => state.theme)
    const themeStyle = theme === 'dark' ? darkTheme : lightTheme

    return (
        <Container style={{backgroundColor: themeStyle.palette.secondary.light, color: themeStyle.palette.text.main}}>
            <h1>MainPage</h1>
        </Container>
    )
}

export default MainPage