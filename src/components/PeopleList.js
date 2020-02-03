import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

class connectedPeopleList extends Component {

    render() {
        const peopleList = this.props.people.map((el, i) => (
            <Col xs="3" key={i}>
            <Card>
                <CardImg top width="100%" src={el.picture.large} alt={el.name.first + " " + el.name.last} />
                <CardBody>
                    <CardTitle>{el.name.first + " " + el.name.last}</CardTitle>
                    <CardSubtitle>{el.email}</CardSubtitle>
                    <CardText>{el.location.street.number + " " + el.location.street.name + " (" + el.location.state + " - " + el.location.country + ")"}</CardText>
                </CardBody>
            </Card> 
            </Col>
        ));
        return (
            <Row style={{height: "400px", overflowY: "scroll"}}>
                {peopleList}
            </Row>
        )
    }
}

const PeopleList = connect(mapStateToProps, { getData })(connectedPeopleList);
export default PeopleList;