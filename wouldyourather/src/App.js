import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { QuestionDashboard } from './components/questionDashboard';
import './App.css';
import { NewQuestion } from './components/newQuestion';
import { LeaderBoard } from './components/leaderBoard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add">New Question</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/leaderboard">Leader Board</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Route exact path='/' render={() => (
              <QuestionDashboard />
          )}>
          </Route>
          <Route path='/add' render={() => (
              <NewQuestion />
          )}>
          </Route>
          <Route path='/leaderboard' render={() => (
              <LeaderBoard />
          )}>
          </Route>
      </div>
    );
  }
}

export default App;
