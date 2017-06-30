import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopular } from "../../../actions/index";
import MovieGroup from "../MovieGroup";

class Popular extends Component {
  componentWillMount() {
    this.props.getPopular();
  }

  render() {
    return (
      <div>
        <MovieGroup movies={this.props.movies} title="Popular" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.popular
  };
}

export default connect(mapStateToProps, { getPopular })(Popular);
