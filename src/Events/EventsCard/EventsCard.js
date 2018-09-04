import React from "react";

class EventsCard extends React.Component {
  render () {
    const { name } = this.props;
    return (<p>{name + "\n"}</p>);
  }
}

export default EventsCard;
