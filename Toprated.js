import { Card, Container, Row, Col, Image } from "react-bootstrap";
import exhumaImage from "../assets/images/TopRated/exhuma.jpg"
import falloutImage from "../assets/images/TopRated/fallout.jpg"
import ghostbusterImage from "../assets/images/TopRated/ghostbuster.jpg"
import godzillaminusoneImage from "../assets/images/TopRated/godzillaminusone.jpg"
import godzillaxkongImage from "../assets/images/TopRated/godzillaxkong.jpg"
import thefirstomenImage from "../assets/images/TopRated/thefirstomen.jpeg"

const Nowplaying = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center d-flex justify-content-center align-items-center">TOP RATED MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="topRated">
                        <Card className="movieImage">
                            <Image src={exhumaImage} alt="Exhuma Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">EXHUMA</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : HORROR
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 9 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image
                                src={falloutImage} alt="Exhuma Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">FALLOUT</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : SCI-FI
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 8 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={ghostbusterImage} alt="Exhuma Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">GHOST BUSTER</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : HORROR
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
                            <Image src={godzillaminusoneImage} alt="Exhuma Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">GODZILLA MINUS ONE</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : ANIMATIONS
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 2 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image
                                src={godzillaxkongImage} alt="Exhuma Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">GODZILLA X KONG</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : ANIMATIONS
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
                            <Image src={thefirstomenImage} alt="Exhuma Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THE FIRST OMEN</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : HORROR
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 5 mins ago
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

export default Nowplaying