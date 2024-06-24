import { Card, Container, Row, Col, Image } from "react-bootstrap";
import astroboyImage from "../assets/images/NowPlaying/astroboy.jpg"
import digimonImage from "../assets/images/NowPlaying/digimon.png"
import ifImage from "../assets/images/NowPlaying/if.webp"
import kungfupanda4Image from "../assets/images/NowPlaying/kungfupanda4.jpg"
import ultramanImage from "../assets/images/NowPlaying/ultraman.jpg"
import sinchanImage from "../assets/images/NowPlaying/sinchan.jpg"

const Nowplaying = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center d-flex justify-content-center align-items-center">NOW PLAYING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="nowplaying">
                        <Card className="movieImage">
                            <Image src={astroboyImage} alt="Astroboy Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ASTROBOY</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : ANIMATIONS
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
                            <Image
                                src={ultramanImage} alt="Astroboy Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ULTRAMAN</Card.Title>
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
                            <Image src={digimonImage} alt="Astroboy Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DIGIMON</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : ANIMATIONS
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
                            <Image src={ifImage} alt="Astroboy Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">IF</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : ANIMATIONS
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image
                                src={kungfupanda4Image} alt="Astroboy Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">KUNGFU PANDA 4</Card.Title>
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
                            <Image src={sinchanImage} alt="Astroboy Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SINCHAN</Card.Title>
                                    <Card.Text className="text-center">
                                        GENRE : ANIMATIONS
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        Last updated 1 mins ago
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