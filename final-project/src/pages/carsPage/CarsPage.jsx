import {Container} from 'react-bootstrap'
import {darkTheme, lightTheme} from '../../theming/themes'
import {useSelector} from 'react-redux'
import CarCard from '../../components/cards/CarCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useAction from '../../hooks/useAction'
import { useEffect } from 'react'
import axios from 'axios'

const CarsPage = () => {
    const {theme} = useSelector(state => state.theme)
    const themeStyle = theme === 'dark' ? darkTheme : lightTheme
    const url = 'https://private-anon-3c91e07014-carsapi1.apiary-mock.com/cars'
    const {cars, isLoaded} = useSelector(state => state.car)
    const {setCars} = useAction()

    useEffect(() => {
        if (!isLoaded) {
            RequestURL()
        }
    }, [])

    const RequestURL = async () => {
        const responce = await axios.get(url)
        console.log(responce.data);
        
    }

    return (
            <Container style={{backgroundColor: themeStyle.palette.secondary.light, color: themeStyle.palette.text.main}}>
                <Row className='d-flex' style={{justifyContent: 'space-evenly'}}>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                </Row>
            </Container>
    )
}

export default CarsPage