import {Container} from 'react-bootstrap'
import {darkTheme, lightTheme} from '../../theming/themes'
import {useSelector} from 'react-redux'
import CarCard from '../../components/cards/DoctorCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useAction from '../../hooks/useAction'
import { useEffect } from 'react'
import axios from 'axios'

const CarsPage = () => {
    const {theme} = useSelector(state => state.theme)
    const themeStyle = theme === 'dark' ? darkTheme : lightTheme
    const {cars, isLoaded} = useSelector(state => state.car)
    const {setCars} = useAction()

    useEffect(() => {
        if (!isLoaded) {
            //setCars(RequestURL())
        }
    }, [])
//https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&year=2020&fmt=json&api_key=ar355ajjgkz5pxxv5g3dfakx
    const RequestURL = async () => {
        const responce = await axios.get(url)
        return responce.data
    }

    return (
            <Container style={{backgroundColor: themeStyle.palette.secondary.light, color: themeStyle.palette.text.main}}>
                <Row className='d-flex' style={{justifyContent: 'space-evenly'}}>
                    {cars.map}
                </Row>
            </Container>
    )
}

export default CarsPage