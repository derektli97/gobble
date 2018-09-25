import React from "react";
import { Card, Tag, Button } from "antd";

class EventsCard extends React.Component {
  render () {
    const { event } = this.props;
    console.log(event);
    return (
      <Card bordered={false} style={{ width: 300, margin: "10px" }}>
        <p>{ event.name.text }</p>
        <Button>hello</Button>
        <Tag>Tag 1</Tag>
      </Card>
    );
  }
}

export default EventsCard;
