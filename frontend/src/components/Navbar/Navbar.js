import React from 'react';
import NFL from "../../images/NFL.png"
import './Navbar.css'
import {Container, Row, Col} from 'react-bootstrap';

export default function Navbar() {
    return (
        <>
        <Container fluid="md">
            <nav className="NavbarItems">
                <Row>
                    <Col xs={8}><a href="example"><img className="Logo-Image" src={NFL} alt={"NFL"}></img></a></Col>
                    <Col xs={1}><a className="buttons" href="example2">Simulations</a></Col>
                    <Col xs={1}><a className="buttons" href="example2">Free Picks</a></Col>
                    <Col xs={1}><a className="buttons" href="example2">Log in</a></Col>
                    <Col xs={1}><a className="signUp" href="example2">Sign up</a></Col>
                </Row>
            </nav>
        </Container>
        </>
    )
}
