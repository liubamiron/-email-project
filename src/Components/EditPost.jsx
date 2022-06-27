
import {useParams} from "react-router-dom";
import Header from "./Header";
import {Container} from "react-bootstrap";

const EditPost = () => {
    const {id} = useParams();
    return (
        <>
            <Header/>
            <Container>
            <h1>Edit Post {id}</h1>

            </Container>
        </>
    )
}
export {EditPost}