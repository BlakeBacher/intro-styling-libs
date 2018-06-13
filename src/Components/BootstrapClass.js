// Intro: Bootstrap is an excellent way to create appealing, responsive designs quickly

// Step 1:
// To get started with bootstrap, you must add a few lines to your index.html file
// Reference https://getbootstrap.com/docs/4.1/getting-started/introduction/
// WARNING: Including jQuery or the other javascript files from the bootstrap  will likely cause undesired bugs in React since jQuery manipulates the DOM directly without going through the virtual DOM

/* The following bootstrap components will not work the same way as outlined in the bootsrap docs without Jquery code. You may be able to find work arounds using react methodology, but the react-bootstrap package is recommended for use with react.

    - Alerts for dismissing
    - Buttons for toggling states and checkbox/radio functionality
    - Carousel for all slide behaviors, controls, and indicators
    - Collapse for toggling visibility of content
    - Dropdowns for displaying and positioning (also requires Popper.js)
    - Modals for displaying, positioning, and scroll behavior
    - Navbar for extending our Collapse plugin to implement responsive behavior
    - Tooltips and popovers for displaying and positioning (also requires Popper.js)
    - Scrollspy for scroll behavior and navigation updates
*/

// Step 2:
// View the docs at https://getbootstrap.com/docs/4.1/getting-started/introduction/ and explore the different content 


import React, { Component } from 'react';

class BootstrapClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertSelected: 0 ,
            progress: '0%'
         }
    }

    changeAlert = (alertNum) => {

        let prog = `${ (alertNum/8*100) }%`

        this.setState({
            alertSelected: alertNum,
            progress: prog
        })
    }

    render() { 
        return ( 
            <div style={{padding: 150}}> 
                <h1> Bootstrap - Class-based </h1>
                <h3> Click the buttons below to display their alert</h3>
                <button type="button" onClick={ () => this.changeAlert(1) } className="btn btn-primary">Primary</button>
                <button type="button" onClick={ () => this.changeAlert(2) } className="btn btn-secondary">Secondary</button>
                <button type="button" onClick={ () => this.changeAlert(3) } className="btn btn-success">Success</button>
                <button type="button" onClick={ () => this.changeAlert(4) } className="btn btn-danger">Danger</button>
                <button type="button" onClick={ () => this.changeAlert(5) } className="btn btn-warning">Warning</button>
                <button type="button" onClick={ () => this.changeAlert(6) } className="btn btn-info">Info</button>
                <button type="button" onClick={ () => this.changeAlert(7) } className="btn btn-light">Light</button>
                <button type="button" onClick={ () => this.changeAlert(8) } className="btn btn-dark">Dark</button>
                <button type="button" onClick={ () => this.changeAlert(9) } className="btn btn-link">Link</button>
                
                <div style={{marginTop: 15}} >
                { this.state.alertSelected === 1 && 
                    <div className="alert alert-primary" role="alert">
                        A simple primary alert—check it out!
                    </div> 
                }

                { this.state.alertSelected === 2 &&
                    <div className="alert alert-secondary" role="alert">
                        A simple secondary alert—check it out!
                    </div>
                }

                { this.state.alertSelected === 3 &&
                    <div className="alert alert-success" role="alert">
                        A simple success alert—check it out!
                    </div>
                }

                { this.state.alertSelected === 4 &&
                    <div className="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                    </div>
                }

                { this.state.alertSelected === 5 &&
                    <div className="alert alert-warning" role="alert">
                        A simple warning alert—check it out!
                    </div>
                }
                { this.state.alertSelected === 6 &&
                    <div className="alert alert-info" role="alert">
                        A simple info alert—check it out!
                    </div>
                }
                { this.state.alertSelected === 7 &&
                    <div className="alert alert-light" role="alert">
                        A simple light alert—check it out!
                    </div>
                }
                { this.state.alertSelected === 8 &&
                    <div className="alert alert-dark" role="alert">
                        A simple dark alert—check it out!
                    </div>
                }
                </div>
                
                <div className='progress-wrapper'>
                    <div class="progress">
                        <div class="progress-bar" style={{width: this.state.progress}} role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="8"></div>
                    </div>  
                </div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

            </div>
         )
    }
}
 
export default BootstrapClass;


