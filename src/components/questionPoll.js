import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,
    CardTitle, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import { answerQuestion } from '../actions/users';

class QuestionPoll extends Component {
    state = {
        selectedOption: 'optionOne'  
    }
    constructor(props) {
        super(props);
    }
    answerSelected = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }
    saveAnswer = () => {
        this.props.dispatch(answerQuestion(this.props.questionId, this.state.selectedOption))
    }
    render() {
        let question = this.props.questions.find(f => f.id === this.props.questionId);
        let author = this.props.availableUsers.find(f => f.id === question.author);

        return (
            <Card>
                <CardHeader>{`${author.name} asks:`}</CardHeader>
                <CardBody>
                    <CardTitle>Would You Rather ...</CardTitle>
                    <Form>
                        <FormGroup tag="fieldset">
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" name="radio1" value='optionOne' checked />{' '}
                                Option one is this and that—be sure to include why it's great
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="radio" name="radio1" value='optionTwo' />{' '}
                                Option two can be something else and selecting it will deselect option one
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <Button onClick={this.saveAnswer}>Submit</Button>
                    </Form>
                </CardBody>
            </Card>  
        );
    }
}

export default connect(
    ({ userState: { availableUsers, loginUser }, questionState: { questions }}) =>
        ({ availableUsers, loginUser, questions })
)(QuestionPoll);