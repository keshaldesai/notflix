import React, { Component } from "react";
import { connect } from "react-redux";
import { getKids } from "../../../actions/index";
import MovieGroup from "../MovieGroup";

class Kids extends Component {
  componentWillMount() {
    this.props.getKids();
  }

  render() {
    return <MovieGroup movies={this.props.movies} title="Kids" />;
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.kids
  };
}

export default connect(mapStateToProps, { getKids })(Kids);
