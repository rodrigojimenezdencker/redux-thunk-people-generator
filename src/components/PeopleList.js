import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
import { Row } from 'reactstrap';
import PeopleCard from './PeopleCard';

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

class connectedPeopleList extends Component {

    render() {
        const peopleList = this.props.people.map((el, i) => (
            <PeopleCard key={i} photo={el.picture.large} alt={el.name.first + " " + el.name.last} name={el.name.first} email={el.email} location={el.location.street.number} />
        ));
        return (
            <Row style={{height: "400px", overflow: "auto"}}>
                {peopleList}
            </Row>
        )
    }
}

const PeopleList = connect(mapStateToProps, { getData })(connectedPeopleList);
export default PeopleList;