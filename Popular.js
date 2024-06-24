import { Card, Container, Row, Col, Image } from "react-bootstrap";
import agentsofmysteryImage from "../assets/images/Popular/agentsofmystery.jpg"
import brigertonImage from "../assets/images/Popular/brigerton.jpg"
import doctorclimaxxImage from "../assets/images/Popular/doctorclimaxx.jpg"
import hierarchyImage from "../assets/images/Popular/hierarchy.jpeg"
import lovedeadlineImage from "../assets/images/Popular/lovedeadline.jpg"
import the8showImage from "../assets/images/Popular/the8show.jpg"

const Popular = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center d-flex justify-content-center align-items-center">POPULAR MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="popular">
                        <Card className="movieImage">
                            <Image src={agentsofmysteryImage} alt="Agents of Mystery Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AGENT OF MYSTERY</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : DRAMA
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 15 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image
                                src={brigertonImage} alt="Agents of Mystery Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">BRIGERTON</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : DRAMA
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 11 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={doctorclimaxxImage} alt="Agents of Mystery Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DOCTOR CLIMAX</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : DRAMA
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 13 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hierarchyImage} alt="Agents of Mystery Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">HIERARCHY</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : DRAMA
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 6 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image
                                src={lovedeadlineImage} alt="Agents of Mystery Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">LOVE DEADLINE</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : DRAMA
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 1 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={the8showImage} alt="Agents of Mystery Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THE 8 SHOW</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : REALLITY SHOW
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 2 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Popular