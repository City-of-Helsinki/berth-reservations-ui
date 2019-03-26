import { withHandlers, withProps, compose } from 'recompose';
import { withRouter } from 'react-router';

export const withMatchParams = compose(
  withRouter,
  withProps(props => ({
    ...props.match.params
  }))
);

export const withMatchParamsHandlers = compose(
  withMatchParams,
  withHandlers({
    localePush: props => uri => {
      const { history, locale } = props;
      history.push(`/${locale}${uri}`);
    }
  })
);
