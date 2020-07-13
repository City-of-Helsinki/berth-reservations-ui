import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import { LocaleOpts } from '../types/intl';

export type LocalePush = (uri: string) => void;

interface Handlers {
  localePush: LocalePush;
}

interface Params {
  locale: LocaleOpts;
}

export const withMatchParamsHandlers = <Props>(Component: React.ComponentType<Props>) =>
  compose<Props, Pick<Props, Exclude<keyof Props, keyof (Handlers & RouteComponentProps<Params>)>>>(
    withRouter,
    withHandlers<RouteComponentProps<Params>, Handlers>({
      localePush: (props) => (uri) => {
        const { history, match } = props;
        const locale = match && match.params.locale ? `/${match.params.locale}` : '';
        const serializedUri = uri.charAt(0) === '/' ? uri : `/${uri}`;

        history.push(`${locale}${serializedUri}`);
      },
    })
  )(Component);
