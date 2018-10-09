import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import RouterInternationalized from '../RouterInternationalized';

export default withRouter(
  connect(
    (state: Map, ownProps: Object) => ({
      locale: ownProps.match.params.locale,
    }),
    {
    }
  )(RouterInternationalized)
);