import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ParentDashboard from './components/ParentDashboard';
import StudentDashboard from './components/StudentDashboard';
import InspectorDashboard from './components/InspectorDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/parent-dashboard' component={ParentDashboard} />
        <Route path='/student-dashboard' component={StudentDashboard} />
        <Route path='/inspector-dashboard' component={InspectorDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
