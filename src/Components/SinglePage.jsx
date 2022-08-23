import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


const initialValues = {
    postTitle: '',
    postDescription: ''
}

// будет запрашиваться не массив а объект по id и изначально уточняем что он пустой
const SinglePage = () => {
    const [userData, setUserData] = useState(initialValues);
    const [posts, setPosts] = useState([]);
    const [editablePostData, setEditablePostData] = useState({
        isEdit: false,
        postIndex: null
    });

    const handleRemoveClick = (index) => {
        setPosts(posts.filter((post, postIndex) => postIndex !== index))
    }

    const isFilledFields = userData.postDescription && userData.postTitle;

    const handleSubmitPost = (e) => {
        e.preventDefault();

        if (isFilledFields) {
            if (editablePostData.isEdit) {
                const editedData = posts;
                editedData.splice(editablePostData.postIndex, 1, userData);

                setPosts(editedData);

                setEditablePostData({
                    isEdit: false,
                    postIndex: null
                })


            } else {
                setPosts((prevState) => [...prevState, userData]);
            }

            // setPosts((prevState) => [...prevState, userData]);

            setUserData(initialValues);
        }
    }

    const handleCleanClick = () => setUserData(initialValues);

    const handleEditClick = (data, index) => {
        setUserData(data);
        setEditablePostData({
            isEdit: true,
            postIndex: index
        })
    }

    console.log('data', posts);
    // const [count, setCount] = useState(0);

    const {id} = useParams();
    //console.log(useParams());
    const navigate = useNavigate();
    const [post, setPost] = useState(null);


    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

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
                <button onClick={goBack}>Go back</button>
                &nbsp;
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
<br/>
                                {/*<button type={"submit"}>Edit/Add</button><br/>*/}
                                <button className={"edit-action"}
                                        onClick={() => handleEditClick(post, post.id)}>edit
                                </button>
                                <button className={"remove-action"}
                                        onClick={() => handleRemoveClick(post.id)}>remove
                                </button>


                                <div>
                                    {posts.map((post, index) => (
                                        <div>
                                            <h1>{index + 1} {post.postTitle}</h1>
                                            <p>{post.postDescription}</p>
                                            <div>
                                                <button className={"edit-action"}
                                                        onClick={() => handleEditClick(post, index)}>edit
                                                </button>
                                                <button className={"remove-action"}
                                                        onClick={() => handleRemoveClick(index)}>remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                            <Col sm={4} className="my-4">
                                {/*<form onSubmit={handleSubmitPost}/>*/}
                                {/*handleSubmitPost*/}
                                {/*<form onSubmit={(e) => handleSubmitPost(e)}>*/}
                                <form onSubmit={handleSubmitPost} onReset={handleCleanClick}>
                                    <input placeholder={"write title"} onChange={(e) =>
                                        setUserData((prevState) => ({
                                            ...prevState,
                                            postTitle: e.target.value
                                        }))}
                                           value={userData.postTitle}
                                    />
                                    <input placeholder={"write description"} onChange={(e) =>
                                        setUserData((prevState) => ({
                                            ...prevState,
                                            postDescription: e.target.value
                                        }))}
                                           value={userData.postDescription}
                                    />

                                    <div className={"buttons-wrapper"}>
                                        <button type={"reset"}>Clean</button>
                                        <button disabled={!isFilledFields}
                                                type={"submit"}>{editablePostData.isEdit ? 'Edit' : 'Add'}</button>
                                    </div>
                                </form>


                                {/*<div>*/}
                                {/*    <div>{count}</div>*/}
                                {/*    <button onClick={() => setCount(count-1)} type={"button"}>-</button>&nbsp;*/}
                                {/*    <button onClick={() => setCount(count+1)} type={"button"}>+</button>*/}
                                {/*</div>*/}

                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </>
    )
}

export {SinglePage}