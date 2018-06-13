import React, { Component } from 'react';

import { AppBar, Drawer, MenuItem, FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui'

class Material extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            drawer: false
         }
    }

    toggleDrawer = () => {
        this.setState({
            drawer: !this.state.drawer
        })
    }

    render() { 
        return ( 
            <div style={{padding: 50}}>
                 <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={ this.toggleDrawer }
                >
                    You can add children to render in the app bar
                </AppBar>
                <Card style={{width: 300}}>
                    <CardHeader
                        title="URL Avatar"
                        subtitle="Subtitle"
                        avatar="http://http.cat/400"
                    />
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="http://http.cat/100" width='100px' alt="" />
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
                <Drawer 
                    open={this.state.drawer}
                    docked={false} >
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <FlatButton label='Close Drawer' onClick={ this.toggleDrawer } />
                </Drawer>
            </div>
         )
    }
}
 
export default Material;