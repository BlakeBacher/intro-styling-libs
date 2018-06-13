import React, { Component } from 'react';
import { Calendar, Button, notification, Icon } from 'antd';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

export default class Complete extends Component {

  onPanelChange(value, mode) {
    console.log(value, mode);
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  render() {
    const size = 'large'
    return (
        <div style={ {padding: 100} }>
            <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
            <Button type="primary" size={size}>Primary</Button>
            <Button size={size}>Normal</Button>
            <Button type="dashed" size={size}>Dashed</Button>
            <Button type="danger" size={size}>Danger</Button>
            <br />
            <Button type="primary" shape="circle" icon="download" size={size} />
            <Button type="primary" icon="download" size={size}>Download</Button>
            <br />
            <Button.Group size={size}>
            <Button type="primary">
                <Icon type="left" />Backward
            </Button>
            <Button type="primary">
                Forward<Icon type="right" />
            </Button>
            </Button.Group>
            <Calendar onPanelChange={this.onPanelChange} />
        </div>

    )
  }
}