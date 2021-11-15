import Layout from '../layout/Layout';
import Spinner from '../spinner/Spinner';
import './loadingPage.scss';

const LoadingPage = () => {
  return (
    <Layout disableNav>
      <div className="vene-loading-page">
        <Spinner />
      </div>
    </Layout>
  );
};

export default LoadingPage;
