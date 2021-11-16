import Layout from '../layout/Layout';
import Spinner from '../spinner/Spinner';
import './loadingPage.scss';

export interface LoadingPageProps {
  disableNav?: boolean;
}

const LoadingPage = ({ disableNav }: LoadingPageProps) => {
  return (
    <Layout disableNav={disableNav}>
      <div className="vene-loading-page">
        <Spinner />
      </div>
    </Layout>
  );
};

export default LoadingPage;
