import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import './App.scss';

import { Form } from 'react-bootstrap';

class Items extends Component {
    state = {
        // MUST MATCH "itemSeed" OBJECT IN "seedDB.js" file 
        room: "",
        name: [],
        modelNumber: "",
        purchaseDate: "",
        purchasePrice: "",
        purchaseLocation: "",
        description: "",

    };

    componentDidMount() {
        this.loadItems();

    }

    loadItems = () => {
        API.getItems()
            .then(res => {
                // let roomsDB = res.map(room => {
                //     return { value: room, display: room }
                // });
                this.setState({
                    items: res.data, name: "", room: "", description: "", purchaseDate: "",
                    purchasePrice: ""
                });
            })
            .catch(err => console.log(err));
    }


    deleteItem = id => {
        API.deleteItem(id)
            .then(res => this.loadItems())
            .catch(err => console.log(err));
    };

    handleChange = (e) => {
        console.log(e.target.value); // room        
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.room);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.room) {
            API.saveItem({
                room: this.state.room,
                name: this.state.name,
                modelNumber: this.state.modelNumber,
                purchaseDate: this.state.purchaseDate,
                purchasePrice: this.state.purchasePrice,
                purchaseLocation: this.state.purchaseLocation,
                description: this.state.description
            })
                .then(res => this.loadItems())
                .then(res => this.setState({
                    room: "",
                    name: [],
                    modelNumber: "",
                    purchaseDate: "",
                    purchasePrice: "",
                    purchaseLocation: "",
                    description: "",
                }))
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <Container className="items" fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Item Input Form</h1>
                        </Jumbotron>
                        <form>
                        <Form.Label>Create an Item, Choose a Location, Add Details</Form.Label>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Item Name (required)"
                                autocomplete="off"
                            />
                            <Form.Group controlId="exampleForm.ControlSelect1">                                
                                <Form.Control as="select"
                                    value={this.state.room}
                                    onChange={this.handleChange}
                                    name="room"
                                    placeholder="Room Name (required)" >
                                    <option id='0'>Room Name (required)</option>
                                    <option>Kitchen</option>
                                    <option>Master Bedroom</option>
                                    <option>Bedroom 1</option>
                                    <option>Bedroom 2</option>
                                    <option>Bedroom 3</option>
                                    <option>Kitchen</option>
                                    <option>Living Room</option>
                                    <option>Dining Room</option>
                                    <option>Family Room</option>
                                    <option>Office</option>
                                    <option>Garage</option>
                                </Form.Control>
                            </Form.Group>
                            <Input
                                value={this.state.modelNumber}
                                onChange={this.handleInputChange}
                                name="modelNumber"
                                placeholder="Model / Serial Number"
                            />
                            <Input type="date"
                                value={this.state.purchaseDate}
                                onChange={this.handleInputChange}
                                name="purchaseDate"
                            />
                            <Input
                                value={this.state.purchasePrice}
                                onChange={this.handleInputChange}
                                name="purchasePrice"
                                placeholder="Purchase Price"
                            />
                            <Input
                                value={this.state.purchaseLocation}
                                onChange={this.handleInputChange}
                                name="purchaseLocation"
                                placeholder=" Purchase Location"
                            />
                            <TextArea
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                name="description"
                                placeholder="Description (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.name && this.state.room)}
                                onClick={this.handleFormSubmit}
                            >
                                Add Item
              </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Item Tracker</h1>
                        </Jumbotron>
                        <Form.Label>Choose an Item to see details</Form.Label>
                        {this.state.items && this.state.items.length ? (
                            <List>
                                {this.state.items.map(item => (
                                    <ListItem key={item._id}>
                                        <Link to={"/items/" + item._id}>
                                            <strong>
                                                {item.name} in {item.room}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteItem(item._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}



export default Items;