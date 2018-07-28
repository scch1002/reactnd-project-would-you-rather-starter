import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Form, FormGroup } from 'reactstrap';
import { loginUser } from '../actions/users';
import './login.css'
import logo from '../logo.svg'

class Login extends Component {   
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    onSelectLoginUser = (event) => {
        this.setState({
            selectedUser: this.props.users[event.currentTarget.value]
        });
    }
    loginUser = () => {
        this.props.dispatch(loginUser(this.state.selectedUser.id));
    }
    render() {
        return (
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle>Welcome to the Would You Rather App!</CardTitle>
                    <CardSubtitle>Please sign in to continue</CardSubtitle>
                </CardHeader>
                <CardImg top width="318" height="180" src={logo} alt="Card image cap" />
                <CardBody>
                    <CardTitle className='text-center'>Sign In</CardTitle>
                    <Dropdown className='mb-2 btn-block' isOpen={this.state.dropdownOpen} toggle={this.toggle}> 
                        <DropdownToggle className='btn-block' caret>
                                { this.state.selectedUser !== undefined ? this.state.selectedUser.name : 'Select User'}
                        </DropdownToggle>
                        <DropdownMenu className='btn-block'>
                            {this.props.users !== undefined ? Object.values(this.props.users).map(m => 
                                m !== undefined ?
                                <DropdownItem onClick={this.onSelectLoginUser} value={m.id}>
                                    <img alt='User Avatar' />
                                    {m.name}
                                </DropdownItem>
                                : ''
                            ) : ''}
                        </DropdownMenu>
                    </Dropdown>
                    <Button className='btn-block' onClick={this.loginUser}>Sign In</Button>
                </CardBody>
            </Card>
        );
    }
}

export default connect(
    (({ users }) => users !== undefined 
        ? ({ users: users }) 
        : { users: undefined })
)(Login);