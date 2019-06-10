import { Query } from 'react-apollo';
import { BoatTypesBerthsQuery_harbors_edges_node } from '../../utils/__generated__/BoatTypesBerthsQuery';

class SelectedHarborQuery extends Query<
  BoatTypesBerthsQuery_harbors_edges_node,
  {
    id: string;
  }
> {}

export default SelectedHarborQuery;
