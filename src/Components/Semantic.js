import React, { Component } from 'react'
import { Button, Icon, Segment, Loader, Transition, Sidebar, Menu, Header, Image } from 'semantic-ui-react'

export default class Semantic extends Component {
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }

    toggleLoading = () => {
        this.setState({
            loading: !this.state.loading,
            visible: false
        })
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render(){
        return (
            <div style={{padding: 100}}>
                <Segment>
                    <Loader active={ this.state.loading } />
                    <Transition.Group animation={'fly left'} duration={500}>
                        { this.state.loading && <img src='http://http.cat/100' alt='' width='100px' /> }
                    </Transition.Group>
                    <Transition.Group animation={'horizontal flip'} duration={500}>
                        { !this.state.loading && <img src='http://http.cat/200' alt='' width='100px' /> }
                    </Transition.Group>
    
                    <Button animated onClick={ this.toggleLoading } >
                        <Button.Content visible>Toggle Loading</Button.Content>
                        <Button.Content hidden>
                            <Icon name='right arrow' />
                        </Button.Content>
                    </Button>
                    <Button animated='vertical'>
                        <Button.Content hidden>Shop</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                    <Button animated='fade'>
                        <Button.Content visible>Sign-up for a Pro account</Button.Content>
                        <Button.Content hidden>$12.99 a month</Button.Content>
                    </Button>

                    

                <Button onClick={this.toggleVisibility}>Toggle Sidebar</Button>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        width='thin'
                        visible={this.state.visible}
                        icon='labeled'
                        vertical
                        inverted
                    >
                        <Menu.Item name='home'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Image src='http://http.cat/300' width='100px' />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                </Segment>
            </div>
    
            
        )

    }
}