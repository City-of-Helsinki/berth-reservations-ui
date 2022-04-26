import { useParams } from 'react-router';
import { useQuery } from '@apollo/react-hooks';

import { getCustomerWinterStorageProps } from './__fixtures__/mockData';
import WinterStorage from './WinterStorage';
import { WinterAreasQuery } from '../../__generated__/WinterAreasQuery';
import { WINTER_AREAS_QUERY } from '../../queries';
import { OWN_BOATS_QUERY } from '../boats/queries';
import { OWN_BOATS } from '../boats/__generated__/OWN_BOATS';
import { getChoiceFromWinterAreaNode } from './utils';

// TODO: Get real data
const WinterStorageContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data: winterAreasData, loading: winterAreasLoading } = useQuery<WinterAreasQuery>(WINTER_AREAS_QUERY);
  const { data: ownBoatsData, loading: ownBoatsLoading } = useQuery<OWN_BOATS>(OWN_BOATS_QUERY);

  const areaOptions =
    winterAreasData?.winterStorageAreas?.edges.map((area) => ({
      value: area?.node?.id ?? '',
      label: area?.node?.properties?.name ?? '',
    })) ?? [];

  const ownBoatsOptions =
    ownBoatsData?.myProfile?.boats?.edges.map((boat) => ({
      value: boat?.node?.id ?? '',
      label: [boat?.node?.name, boat?.node?.registrationNumber].join(' '),
    })) ?? [];

  const getAreaChoiceFromData = (choiceId: string, priority: number) => {
    const winterArea = winterAreasData?.winterStorageAreas?.edges.find((edge) => edge?.node?.id === choiceId);

    if (!winterArea?.node) return;

    const choice = getChoiceFromWinterAreaNode(winterArea.node, priority);
    return choice;
  };

  const customerWinterStorageProps = getCustomerWinterStorageProps(id);
  return (
    <WinterStorage
      {...customerWinterStorageProps}
      areasOptions={areaOptions}
      areasLoading={winterAreasLoading}
      ownBoatsOptions={ownBoatsOptions}
      ownBoatsLoading={ownBoatsLoading}
      getAreaChoiceFromData={getAreaChoiceFromData}
    />
  );
};

export default WinterStorageContainer;
