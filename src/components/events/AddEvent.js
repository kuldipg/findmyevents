import React, { Component } from "react";
import TextInputGroup from "../TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEvent } from "../../actions/eventActions";

class AddEvent extends Component {
  state = {
    name: "",
    description: "",
    url: "",
    price: "",
    venue: "",
    start_date: "",
    end_date: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      description,
      url,
      price,
      venue,
      start_date,
      end_date,
    } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (description === "") {
      this.setState({ errors: { description: "Description is required" } });
      return;
    }

    if (url === "") {
      this.setState({ errors: { url: "URL is required" } });
      return;
    }

    if (price === "") {
      this.setState({ errors: { price: "Price is required" } });
      return;
    }

    if (venue === "") {
      this.setState({ errors: { venue: "Venue is required" } });
      return;
    }

    if (start_date === "") {
      this.setState({ errors: { start_date: "Start Date is required" } });
      return;
    }

    if (end_date === "") {
      this.setState({ errors: { end_date: "End Date is required" } });
      return;
    }

    const newEvent = {
      name,
      description,
      url,
      price,
      venue,
      start_date,
      end_date,
    };

    //// SUBMIT EVENT ////
    this.props.addEvent(newEvent);

    // Clear State
    this.setState({
      name: "",
      description: "",
      url: "",
      price: "",
      venue: "",
      start_date: "",
      end_date: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      name,
      description,
      url,
      price,
      venue,
      start_date,
      end_date,
      errors,
    } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Description"
              name="description"
              placeholder="Enter Description"
              value={description}
              onChange={this.onChange}
              error={errors.description}
            />
            <TextInputGroup
              type="url"
              label="URL"
              name="url"
              placeholder="Enter URL"
              value={url}
              onChange={this.onChange}
              error={errors.url}
            />
            <TextInputGroup
              label="Price"
              name="price"
              placeholder="Enter Price"
              value={price}
              onChange={this.onChange}
              error={errors.price}
            />
            <TextInputGroup
              label="Venue"
              name="venue"
              placeholder="Enter Venue"
              value={venue}
              onChange={this.onChange}
              error={errors.venue}
            />
            <TextInputGroup
              type="datetime-local"
              label="Start Date"
              name="start_date"
              placeholder="Enter Start Date"
              value={start_date}
              onChange={this.onChange}
              error={errors.start_date}
            />
            <TextInputGroup
              type="datetime-local"
              label="End Date"
              name="end_date"
              placeholder="Enter End Date"
              value={end_date}
              onChange={this.onChange}
              error={errors.end_date}
            />

            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
};
export default connect(null, { addEvent })(AddEvent);
