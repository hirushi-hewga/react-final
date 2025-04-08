import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CarCard = ({url, title, text, id}) => {

    return (
        <Card className='m-3 mb-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {text}
                </Card.Text>
                <Card.Link as={Link} variant='contained' to={`/cars/car/${id}`}>
                    <Button variant="primary">Go Somewhere</Button>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CarCard