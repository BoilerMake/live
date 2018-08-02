import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './components/Nav';
import Footer from './components/Footer';

import FourOhFour from './pages/404';
import About from './pages/About';
import Application from './pages/Application';
import Code from './pages/Code';
import ConfirmEmail from './pages/ConfirmEmail';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import DayOf from './pages/DayOf';
import ExecContainer from './pages/Exec/ExecContainer';
import ExecUsers from './pages/Exec/ExecUsers';
import ExecUserDetail from './pages/Exec/ExecUserDetail';
import ExecApplications from './pages/Exec/ExecApplications';
import ExecApplicationDetail from './pages/Exec/ExecApplicationDetail';
import ExecDashboard from './pages/Exec/ExecDashboard';
import ExecCheckin from './pages/Exec/ExecCheckin';
import FAQ from './pages/FAQ';
import GithubAuth from './pages/GithubAuth';
import Hackers from './pages/Hackers';
import Home from './pages/Home';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import Register from './pages/Register';
import Sponsors from './pages/Sponsors';

/******************
 * Render Methods *
 ******************/
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isAllowed,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        isAllowed ? (
          <Component {...props} />
        ) : (
          <div>
            <h1>Permission Denied</h1>
            You do not have the rights to access this page.
          </div>
        )
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const ContainerSwitcherRoute = ({ children, location, ...rest }) => {
  if (location.pathname.includes('/exec')) {
    return <ExecContainer>{children}</ExecContainer>;
  } else if (location.pathname === '/404' || location.pathname === '/live') {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        <Nav />
        {children}
        <Footer />
      </div>
    );
  }
};

const RedirectToLive = () => <Redirect to="/live" />;

class ExternalRedirect extends Component {
  constructor(props) {
    super();
    this.state = { ...props };
  }
  componentWillMount() {
    window.location = this.state.to;
  }
  render() {
    return <h1>Redirecting...</h1>;
  }
}

const UserRoute = withRouter(
  connect(state => ({
    isAuthenticated: state.user.authenticated,
    isAllowed: true
  }))(PrivateRoute)
);
const ExecRoute = withRouter(
  connect(state => ({
    isAuthenticated: state.user.authenticated,
    isAllowed: state.user.isExec
  }))(PrivateRoute)
);
const ContainerSwitcher = withRouter(ContainerSwitcherRoute);

const Routes = () => (
  <ContainerSwitcher>
    <Switch>
      {/*Public Routes*/}
      <Route exact path="/" component={Home} />
      <Route exact path="/hackers" component={Hackers} />
      <Route exact path="/sponsors" component={Sponsors} />
      <Route path="/about" component={About} />

      {/* <Route exact path="/2017" component={Home}/> */}
      <Route path="/dayof" component={RedirectToLive} />
      <Route path="/live" component={DayOf} />
      <Route path="/code" component={Code} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/reset/:reset_token?" component={PasswordReset} />
      <Route path="/confirm/:code" component={ConfirmEmail} />
      <Route path="/auth/github" component={GithubAuth} />

      {/*User Routes*/}
      <UserRoute path="/dashboard" component={Dashboard} />
      <UserRoute path="/application" component={Application} />

      {/*Exec Routes. Everything under /exec gets rendered inside <ExecContainer/>*/}
      <ExecRoute path="/exec" exact component={ExecDashboard} />
      <ExecRoute exact path="/exec/checkin" component={ExecCheckin} />
      <ExecRoute exact path="/exec/users" component={ExecUsers} />
      <ExecRoute path="/exec/users/:userId" component={ExecUserDetail} />
      <ExecRoute exact path="/exec/applications" component={ExecApplications} />
      <ExecRoute
        path="/exec/applications/:applicationId"
        component={ExecApplicationDetail}
      />

      {/*Offsite Redirects*/}
      <Route
        path="/why-go-to-a-hackathon"
        render={() => (
          <ExternalRedirect to="https://medium.com/@BoilerMake/why-you-should-go-to-a-hackathon-2d4ede475c9" />
        )}
      />
      <Route component={FourOhFour} />
    </Switch>
  </ContainerSwitcher>
);

export default Routes;
