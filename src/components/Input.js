import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson, resetPeople } from '../actions';
import { FormGroup, Label, Input, Button, ButtonGroup } from 'reactstrap';

const mapDispatchToProps = {
    addPerson, resetPeople
}

class connectedInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number_people: 1,
            gender: "",
            nationality: ""
        }
    }

    handleChangeInput = event => {
        this.setState({ [event.target.id]: [event.target.value] });
    }

    handleAddPerson = () => {
        this.props.addPerson(this.state);
    }

    handleReset = () => {
        this.props.resetPeople();
        this.setState({ number_people: 1 });
    }

    handleChangeGender = (gender) => {
        this.setState({ gender: gender });
    }

    handleChangeSelectCountry = (event) => {
        this.setState({ nationality: event.target.value });
    }

    render() {
        const nationalities = ["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NO", "NL", "NZ", "TR", "US"];
        const nationalitiesSelect = nationalities.map((country, i) => {
            return <option key={i} value={country}>{country}</option>
        });
        return (
            <>
                <FormGroup>
                    <Label for="number_people">People: </Label>
                    <Input type="text" id="number_people" value={this.state.number_people} onChange={this.handleChangeInput} placeholder="Number of people" />
                </FormGroup>
                <FormGroup>
                    <Label for="country">Country:</Label>
                    <Input type="select" onChange={this.handleChangeSelectCountry} id="country" value={this.state.nationality}>
                        <option value="">All countries</option>
                        {nationalitiesSelect}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" className="mr-2" onClick={this.handleAddPerson}>ADD PEOPLE</Button>
                    <ButtonGroup>
                        <Button color="secondary" onClick={() => this.handleChangeGender("male")}>MALES</Button>
                        <Button color="secondary" onClick={() => this.handleChangeGender("female")}>FEMALES</Button>
                        <Button color="secondary" onClick={() => this.handleChangeGender("")}>BOTH GENDERS</Button>
                    </ButtonGroup>
                    <Button color="danger" className="ml-2 mr-2" onClick={this.handleReset}>RESET</Button>
                </FormGroup>
            </>
        )
    };
}

const CustomInput = connect(null, mapDispatchToProps)(connectedInput);
export default CustomInput;