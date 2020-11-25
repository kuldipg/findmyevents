/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment-timezone";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";

class Event extends Component {
  state = {
    showEventInfo: true,
  };

  onDeleteClick = (id) => {
    //// DELETE Event ////
    this.props.deleteEvent(id);
  };

  render() {
    const {
      id,
      name,
      description,
      url,
      price,
      venue,
      start_date,
      end_date,
    } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          <span
            className="d-inline-block text-truncate"
            style={{ maxWidth: "70%" }}
          >
            {name}{" "}
          </span>
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`event/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem",
              }}
            />
          </Link>
        </h4>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item border-bottom-0 py-1">
              Description: {description}
            </li>
            <li className="list-group-item border-bottom-0 py-1">
              <div className="row">
                <div className="col-6 text-truncate text-left">
                  <span>Start Date: {moment(start_date).format("lll")}</span>
                </div>
                <div className="col-6 text-truncate text-right">
                  <span>End Date: {moment(end_date).format("lll")}</span>
                </div>
              </div>
            </li>
            <li className="list-group-item border-bottom-0 py-1">
              <div className="row">
                <div className="col-6 text-truncate text-left">
                  <span>Price: {price}</span>
                </div>
                <div className="col-6 text-truncate text-right">
                  <span>Venue: {venue}</span>
                </div>
              </div>
            </li>
            <li className="list-group-item py-1 text-right">
              <a href={url} target="_blank">
                Click for details
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default connect(null, { deleteEvent })(Event);
