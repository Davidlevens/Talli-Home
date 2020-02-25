import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import './App.scss';

class About extends Component {
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
            <Container className="about" fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                Talli-Home
                                <br/> is
                                <br/> 
                                {this.state.item.location}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h2>Home Inventory</h2>
                            <p>
                            Talli-Home is a home inventory app to help the user keep track of their property. 
                            It can be used to record all the important information about items they own. 
                            Along with the name of an item, you choose what room it’s located in as well 
                            as the model/serial number, purchase date, purchase location, value and description. 
                            Future version will include inputs for an image and receipt.
                            </p>
                            <h2>
                                Insurance Inventory
                            </h2>
                            <p>
                                Talli-Home is also an effective tool for keeping track of property that might be 
                                insured under a homeowner or renter insuranmce policy. Making a claim due to loss 
                                requires a record of your homes contents along with model number purchase date, 
                                location, description and receipts.  
                            </p>
                            
                        </article>
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

export default About;