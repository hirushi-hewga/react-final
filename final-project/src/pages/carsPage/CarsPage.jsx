import {Container} from 'react-bootstrap'
import {darkTheme, lightTheme} from '../../theming/themes'
import {useSelector} from 'react-redux'

const CarsPage = () => {
    const {theme} = useSelector(state => state.theme)
    const themeStyle = theme === 'dark' ? darkTheme : lightTheme

    return (
        <>
            <h1>CarsPage</h1>
        </>
    )
}

export default CarsPage