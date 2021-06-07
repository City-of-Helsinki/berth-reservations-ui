import { useParams } from 'react-router';

import { getCustomerBerthsProps } from './__fixtures__/mockData';
import Berths from './Berths';

// TODO: Get real data
const BerthsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const customerBerthsProps = getCustomerBerthsProps(id);
  return <Berths {...customerBerthsProps} />;
};

export default BerthsContainer;
