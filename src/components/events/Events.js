import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents, searchEvents } from "../../actions/eventActions";
import Event from "./Event";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();    
  }

  handleSearchInputChange = (event) => {
    const query = event.target.value;
    this.props.searchEvents(query);     
  }
  
  render() {    
    const { events } = this.props;
  
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Events</span> List
        </h1>
        <div className="d-block mb-2">
          <form>
            <div className="form-group">
              <input
                type="search"
                name="searchevent"
                className="form-control form-control-lg"
                placeholder="Search Events by Name"
                onChange={this.handleSearchInputChange}
              />
            </div>
          </form>
        </div>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </React.Fragment>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array.isRequired,
  getEvents: PropTypes.func.isRequired,
  searchEvents: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  events: state.event.events,
});

export default connect(mapStateToProps, { getEvents, searchEvents })(Events);
