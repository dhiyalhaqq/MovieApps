import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className='title'>MAGER NONTON KELUAR?</div>
                        <div className='title'>NONTON DI RUMAH AJA</div>
                        <div className='introButton mt-4'>
                            <Button variant='dark'>Lihat Semua List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro