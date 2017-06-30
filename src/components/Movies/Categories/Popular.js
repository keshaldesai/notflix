import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopular } from "../../../actions/index";
import MovieGroup from "../MovieGroup";

class Popular extends Component {
  componentWillMount() {
    this.props.getPopular();
  }

  renderGroup() {
    const { movies } = this.props;
    if (movies.length === 0) {
      return <div />;
    } else {
      return <MovieGroup movies={movies} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderGroup()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: this.state.popular
  };
}

export default connect(mapStateToProps, { getPopular })(Popular);
