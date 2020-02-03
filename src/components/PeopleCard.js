import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';

class PeopleCard extends Component {
    render() {
        return (
            <Col xs="3">
                <Card>
                    <CardImg top width="100%" src={this.props.photo} alt={this.props.alt} />
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardSubtitle>{this.props.email}</CardSubtitle>
                        <CardText>{this.props.location}</CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default PeopleCard;