// Step 1:
// install and import react-bootstrap

// Step 2: Include the code below in your index.html
/*
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
*/

// Step 3: 
// Review the docs to review the different components that are available and the props that are available to customize the component.
// https://react-bootstrap.github.io/components/alerts/

import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap'

class BootstrapComponents extends Component {
     
    constructor() {
    super();
    
        this.state = {
            show: false
        };

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleDismiss() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleAction(){
        alert('You did something!')
    }

    

    render() {
        let styles = {
            padding: 100
        }

        return (
            
            <div style={ styles }>
                <Button style={{ margin: 10}} bsStyle="primary" onClick={ this.handleShow }>Show Alert</Button>
                    { this.state.show && 
                    <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                        <h4>Oh snap! You got an error!</h4>
                        <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                        </p>
                        <p>
                        <Button bsStyle="danger" onClick={ this.handleAction }>Take this action</Button>
                        <span>  or  </span>
                        <Button onClick={this.handleDismiss}>Hide Alert</Button>
                        </p>
                    </Alert>
                    }

            </div>
        );
    }
}
 
export default BootstrapComponents;