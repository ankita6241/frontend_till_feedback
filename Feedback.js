import { Card, Form, Button, Col, Row, Container } from "react-bootstrap";
import React from 'react';
import RatingStars from "./Widgets/RatingStars";
import Header from "./Header";
import Footer from "./Footer";
const FeedBack = () => {

    return (
        <>
        <Header/>
                <div className="page-header">
                    <h2 className="text-dark" style={{ textAlign: "center", paddingTop: "2px" }}>Feedback</h2>
                </div>
                <Container className="justify-content-md-center">
                    <Row >
                        <Col><Card style={{ border: "none" }}>
                        <Form>
                            <Col>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                            <Form.Group controlId="formBasicTextField">
                                <Form.Label>Message</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <RatingStars/>
                            <Button className="text-center"variant="success" style={{marginTop:"10px" }}type="submit">Submit
                            </Button>
                        </Form>
                       </Card>
                       </Col>
                    </Row>
                </Container>
            <Footer/>
        </>
    );
}

export default FeedBack;