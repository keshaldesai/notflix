import React, { Component } from "react";
import { connect } from "react-redux";
import { getTheatre } from "../../../actions/index";
import MovieGroup from "../MovieGroup";

class Theatre extends Component {
  componentWillMount() {
    this.props.getTheatre();
  }

  render() {
    return (
      <div>
        <MovieGroup movies={this.props.movies} title="In Theatres" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.theatre
  };
}

export default connect(mapStateToProps, { getTheatre })(Theatre);
