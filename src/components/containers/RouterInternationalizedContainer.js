// @flow
import { withRouter } from 'react-router';
import { mapProps, compose } from 'recompose';
import RouterInternationalized from '../RouterInternationalized';

export default compose(
  withRouter,
  mapProps(props => ({
    locale: props.match.params.locale
  }))
)(RouterInternationalized);
