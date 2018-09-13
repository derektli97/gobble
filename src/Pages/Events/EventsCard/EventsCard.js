import React from "react";

class EventsCard extends React.Component {
  render () {
    const { name } = this.props;
    return (<p style={{ margin: "100px" }}>{name + "\n"}</p>);
  }
}

export default EventsCard;
