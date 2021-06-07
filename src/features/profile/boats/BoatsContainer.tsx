import { mockBoats } from './__fixtures__/mockData';
import Boats from './Boats';

// TODO: Get real data
const BoatsContainer = () => {
  return <Boats boats={mockBoats} />;
};

export default BoatsContainer;
