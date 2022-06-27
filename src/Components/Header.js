import React from "react";
import {Navbar, Nav, Row, Col, Container, NavDropdown} from "react-bootstrap";
import {Routes, Route, Link} from "react-router-dom";
import AboutPage from "./AboutPage"
import NotFoundPage from "./NotFoundPage"
import HomePage from "./HomePage";

function Header() {

    return (
        <>
<Container>
            <Row>
                <Col sm={2}>
                    <Row>
                        <Col>
                            <a href="/">DCU</a>
                        </Col>
                        <Col className="text-end">
                            <i className="bi bi-bell"/>
                        </Col>
                    </Row>
                </Col>
                <Col className="bg-light" sm={4}>
                    <Row>
                        <Col>
                            <Navbar>
                                <Container fluid>
                                    <Navbar>sort:</Navbar>
                                    <Navbar.Toggle aria-controls="navbar-example" />
                                    <Navbar.Collapse id="navbar-example">
                                        <Nav>
                                            <NavDropdown
                                                id="nav-dropdown-example"
                                                title="Newest first"
                                            >
                                                <NavDropdown.Item href="#action/3.1">Latest</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                            {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                        <Col className={"text-end"}>
                            <i className="bi bi-folder"/>
                            <span className="mx-3"><i className="bi bi-bookmark"/></span>
                            <i className="bi bi-trash"/>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6} className={"text-end bg-light"}>
                    <span>

                        <Link to="/">Home</Link> |{" "}&nbsp;&nbsp;
                        <Link to="/posts">Blog</Link> |{" "}
                        {/*<a href="/blog" className={"text-end"}>Blog</a>&nbsp;&nbsp;*/}
                        <Link to="/about" className={"text-end"}>About</Link>&nbsp;&nbsp;
                    </span>
                    &nbsp;&nbsp;
                    <span>
                        i<em>g</em>
                    </span>
                </Col>
            </Row>
</Container>

        </>
    );
}

export default Header;
