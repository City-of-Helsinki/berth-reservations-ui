import { useParams } from 'react-router';

import { getCustomerWinterStorageProps } from './__fixtures__/mockData';
import WinterStorage from './WinterStorage';

// TODO: Get real data
const WinterStorageContainer = () => {
  const { id } = useParams<{ id: string }>();
  const customerWinterStorageProps = getCustomerWinterStorageProps(id);
  return <WinterStorage {...customerWinterStorageProps} />;
};

export default WinterStorageContainer;
