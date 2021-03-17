import './App.css';
import React, { Suspense } from 'react'
import HeaderContainer from './components/Header/HeaderContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import NavbarContainer from './components/Navbar/NavbarContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, BrowserRouter } from 'react-router-dom'
// import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
// import Login from './components/Login/Login'
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader';

const News = React.lazy(() => import('./components/News/News'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {

  componentDidMount() {

    this.props.initializeApp()

  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader />
    }

    return <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route exact path='/' render={() => <ProfileContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/messages' render={() => <MessagesContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' render={() => <Suspense fallback={<Preloader />}><News /></Suspense>} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <Suspense fallback={<Preloader />}><Login /></Suspense>} />
        </div>
      </div>
    </BrowserRouter >
  }
}




let mapStateToProps = (state) => {
  return {
    isInitialized: state.app.initialized
  }
}


export default connect(mapStateToProps, { initializeApp })(App);