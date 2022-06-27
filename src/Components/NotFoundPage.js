
import React from "react";
//import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


function NotFoundPage(){
    return (
        <>
            This page doesn't exist go to <Link to="/">home page</Link>.
        </>
    )
}

export default NotFoundPage;