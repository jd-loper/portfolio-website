import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ProjectCards.css'

function ProjectCards() {
    return (
        <Container className="project-cards-container">
            <Row className="g-4 justify-content-center">
                <Col xs={12} md={6} lg={4}>
                    <Card className="project-card h-100">
                        <Card.Body>
                            <Card.Title className="project-title">GPU Resource Monitor</Card.Title>
                            <Card.Text className="project-description">
                                A Java application that displays real-time NVIDIA GPU usage statistics.
                            </Card.Text>
                            <Button variant="primary" className="project-button">GitHub</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className="project-card h-100">
                        <Card.Body>
                            <Card.Title className="project-title">CliniCode AI</Card.Title>
                            <Card.Text className="project-description">
                                An AI-powered medical coding assistant that streamlines the coding process for healthcare professionals.
                            </Card.Text>
                            <Button variant="primary" className="project-button">GitHub</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectCards