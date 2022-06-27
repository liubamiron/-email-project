
import React, {useEffect, useState} from "react";
import Header from "./Header";
import {Button, Col, Container, Row} from "react-bootstrap";
//import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Link, Route, Routes} from "react-router-dom";

// в state будет хранитсься некий массив, я буду делать в useEffect запрос на
// определенные данные и получать json и отправлять в свой state



const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col sm={8} className="my-4">

                        {/*{posts.map(post => (*/}
                        {/*        <Link key={post.id} to={`/posts/${post.id}`}>*/}
                        {/*            <li>{post.title}</li>*/}
                        {/*        </Link>*/}
                        {/*    ))*/}
                        {/*}*/}
<h1>Posts</h1>
                        {posts.map(post => (
                            <div key={post.id}>
                                <ul>
                                    <Link key={post.id} to={`/posts/${post.id}`}>
                                        <li>{post.title}</li>
                                    </Link>
                                    <li type="button">{`${post.title}`}</li>
                                    <li style={{fontSize:12, fontStyle:"italic"}}>{` ${post.body}`}</li>
                                </ul>
                            </div>))}
                    </Col>
                    <Col sm={4} className="my-4">
                        <p>Params</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export {BlogPage};