import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import axios from "axios";


export interface data {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
}

function Body(){
     // let dataFromLocalStorage = JSON.parse(localStorage.getItem('storage'))

    const [selectedData, setSelectedData] = React.useState([]);
    const [data, setData] = React.useState([]);

    // const [storageData, setStorageData] = React.useState(dataFromLocalStorage);
    // let newData = [...storageData];
//

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8')
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
    }, []);
     console.log('data', data);


    const allEmailInbox = async () => {
        const response = await axios.get(
            'https://fakestoreapi.com/products?limit=12'
        );
        setData(response.data);
    };

    const filterById = (type: any) => {
        let dataList = [...data];
        dataList = dataList.filter((product) => product.id === type);
        return dataList;
    };
    const handleAddProductToList = (product: any) => {
        let foundProduct = filterById(product.id);
        setSelectedData(foundProduct) ;
        // console.log('add', selectedData.description);
    };
    //
    return (
        <>
            <Container>
            <Row>
                <Col sm={2} className="my-4">
                    <Button variant="secondary">Create Message</Button>
                    <br/>
                    <hr/>

                    <ul className="list-group list-group-flush">
                        <li><a type="button" className="list-group-item fetch-button" id="1"  onClick={allEmailInbox}>Inbox
                            </a></li>
                        <li className="list-group-item fetch-button" onClick={allEmailInbox}>Marked</li>
                        <li className="list-group-item fetch-button" onClick={allEmailInbox}>Group</li>
                        <li className="list-group-item">Drafts</li>
                        <li className="list-group-item">Sent</li>
                        <li className="list-group-item">Deleted</li>
                        <li className="list-group-item">Spam</li>
                    </ul>
                </Col>
                <Col sm={4} className="my-4">
                    <Form className="d-flex text-end">
                        <FormControl
                            type="search"
                            placeholder="what are you looking for?"
                            className="me-1"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <hr/>
                    <div className="row g-0">
                        <div className="col-sm-6 col-md-8">
                            <p>
                                <i className="bi-alarm"/> OUR PICKS
                            </p>
                        </div>
                        <div className="col-6 col-md-4 text-end">Today
                        </div>

                        {data.map(product => (
                            <div key={product.id}>
                                <ul>
                                <li type="button" onClick={() => handleAddProductToList(product)}>{`${product.title}`}</li>
                                    <li style={{fontSize:12, fontStyle:"italic"}}>{` ${product.category}`}</li>
                                </ul>
                                </div>))}
                    </div>
                </Col>
                <Col sm={6} className="my-4">
                    <div className="row g-0">
                        <div className="col-sm-6 col-md-8">
                            <div className="px-5">
                                <i className="bi bi-person-circle"/> Mohamed Kassem
                                {selectedData.map(product => (
                                <div key={product.id}>
                                    {` ${product.description}`}
                                </div>))}
                            </div>
                        </div>
                        <div className="col-6 col-md-4 text-end"><i className="bi bi-clock"/>July 23, 2018
                        </div>
                    </div>
                </Col>

            </Row>
            </Container>
            <div className="mt-5 p-4 bg-secondary text-white text-center">
                <p>Footer</p>
            </div>
        </>
    );
}

export default Body;


