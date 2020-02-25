import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import './App.scss';

class Contact extends Component {
    state = {
        item: {}
    };
    // Add code to get the item with an _id equal to the id in the route param
    // e.g. http://localhost:3000/books/:id
    // The item id for this route can be accessed using this.props.match.params.id

    componentDidMount() {
        API.getItem(this.props.match.params.id)
            .then(res => {
                this.setState({ item: res.data })
            });
    }

    render() {
        return (
            <Container className="contact" fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                Questions, Comments, Suggestions
                                <br /> are
                                <br />
                                Welcome and Appreciated
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        
                                <h1>Contact</h1>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1"><h4>Name</h4></label>
                                        <input type="text" class="form-control" placeholder="Your Name" />
                                    </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1"><h4>Email address</h4></label>
                                            <input type="email" class="form-control" placeholder="example@gmail.com" />
                                        </div>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1"><h4>Message</h4></label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                                    placeholder="Please say hello..." rows="6"></textarea>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                                        <div class="row">
                                            <ul class="nav justify-content-end">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="mailto:davidjaylevens@gmail.com"><h4>Email: davidjaylevens@gmail.com</h4></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="tel:+9142616863"><h4>Mobile: 914.261.6863</h4></a>
                                                </li>
                                            </ul>
                                        </div>
                        
                    </Col>
                </Row>
                        <Row>
                            <Col size="md-2">
                                <button>
                                    <Link to="/">← Back to Inventory</Link>
                                </button>
                            </Col>
                        </Row>
            </Container>
                    );
                }
            }
            
export default Contact;