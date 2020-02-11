import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { FormBtn } from "../components/Form";
import './App.scss';

import { Form } from 'react-bootstrap';

class Rooms extends Component {
    state = {
        // MUST MATCH "itemSeed" OBJECT IN "seedDB.js" file 
        room: "",


    };

    componentDidMount() {
        this.loadItems();

    }

    loadItems = () => {
        if (!this.state.room) return;

        API.getRooms(this.state.room)
            .then(res => {
                this.setState({ items: res.data })
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
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.room) {
            API.getRooms(this.state.room)
                .then(res => this.setState({ items: res.data }))
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <Container className="room" fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Pick a Room</h1>
                        </Jumbotron>
                        <form>
                            <Form.Label><h4>Chose a room to see it's contents</h4></Form.Label>
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

                            <FormBtn
                                disabled={!(this.state.room)}
                                onClick={this.handleFormSubmit}
                            >
                                Get Room
              </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Item Tracker</h1>
                        </Jumbotron>
                        <Form.Label><h4>Choose an Item to see details</h4></Form.Label>
                        {this.state.items && this.state.items.length ? (
                            <List>
                                {this.state.items.map((item) => (
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



export default Rooms;