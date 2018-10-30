import { withHandlers, withStateHandlers, withProps, compose } from 'recompose';
import { withRouter } from 'react-router';

export const withLocale = compose(
  withRouter,
  withProps(props => ({
    locale: props.match.params.locale
  }))
);

export const withLocaleHandlers = compose(
  withLocale,
  withHandlers({
    localePush: props => uri => {
      const { history, locale } = props;
      history.push(`/${locale}/${uri}`);
    }
  })
);

export const formTypeSelection = withStateHandlers(
  ({ selected = 0 }) => ({
    selected
  }),
  {
    selectFormType: () => selected => ({ selected })
  }
);
