import { RouteComponentProps, RouterProps, withRouter } from 'react-router';
import { compose, withHandlers, withProps } from 'recompose';

export const withMatchParams = compose<{ locale: 'fi' | 'en' | 'sv' }, {}>(
  withRouter,
  withProps((props: RouteComponentProps) => ({
    ...props.match.params
  }))
);

export const withMatchParamsHandlers = compose(
  withMatchParams,
  withHandlers({
    localePush: (props: { locale: string } & RouterProps) => (uri: string) => {
      const { history, locale } = props;
      history.push(`/${locale}${uri}`);
    }
  })
);
