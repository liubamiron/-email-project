import React, {useEffect, useState} from "react";
import Header from "./Header";
import Body from "./Body";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

const CreatePost = () => {

    return (
        <>
            <Container>
                <Header/>
                <>
                    <h1>Create Post</h1>
                </>
            </Container>
        </>
    )
}

export  {CreatePost}