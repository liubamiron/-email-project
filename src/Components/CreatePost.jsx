import React, {useEffect, useState} from "react";
import Header from "./Header";
import Body from "./Body";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import storage from 'redux-persist-indexeddb-storage';



const CreatePost = () => {
        const [name, setName] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();
          //  alert(`The name you entered was: ${name}`);
        }

    const persistConfig = {
        key: 'root',
        storage: storage('myDB'),
    };


        return (
        <>
            <Container>
                <Header/>
                <>
                    <h1>Create Post</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Enter your name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <input type="submit" />
                    </form>
                    {
                    `The name you entered was: ${name}`}
                </>
            </Container>
        </>
    )
}

export  {CreatePost}