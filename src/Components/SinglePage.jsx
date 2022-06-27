import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


// будет запрашиваться не массив а объект по id и изначально уточняем что он пустой
const SinglePage = () => {
    const {id} = useParams();
    //console.log(useParams());
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace:true});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);
// в зависимости добавляем [id], как в url
    return (
        <>
            <Container>
                <Header/>
                <button onClick={goBack}>Go back</button>&nbsp;
                {/*bad approach*/}
                <button onClick={goHome}>Go home</button>
                {post && (
                    <>
                        <Row>
                    <Col sm={8} className="my-4">
                       <h1>{post.id} &nbsp; {post.title}</h1>
                        <p>{post.body}</p>
                    <br/>
                            <Link to={`/posts/${id}/edit`}> Edit this post</Link>
                    </Col>
                        <Col sm={4} className="my-4">
                            <p>{post.id}</p>
                            <p>{post.body}</p>

                        </Col>
                        </Row>
                    </>
                )}
            </Container>
        </>
    )
}

export  {SinglePage}