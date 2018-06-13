import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {

    let styles = {
      nav: {
        width: '100%',
        height: 50,
        background: 'linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 100%,#7db9e8 100%)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },

      link: {
        color: 'white'
      }
    }

    return (
      <div className="showcase-container">
        <nav style={ styles.nav }>
          <Link style={ styles.link } to='/bootstrap/class'>Bootstrap(Class Based)</Link>
          <Link style={ styles.link } to='/bootstrap/component'>Bootstrap(Component Based)</Link>
          <Link style={ styles.link } to='/antdesign'> Ant Design </Link>
          <Link style={ styles.link } to='/semantic'> Semantic UI </Link>
          <Link style={ styles.link } to='/material'> Material UI </Link>
        </nav>

        { routes }

      </div>
    );
  }
}

export default App;
