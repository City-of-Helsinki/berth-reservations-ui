import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Notification } from 'hds-react';
import { getOperationName } from 'apollo-link';
import { useTranslation } from 'react-i18next';

import Spinner from '../../../common/spinner/Spinner';
import { getCustomerBerthsProps } from './__fixtures__/mockData';
import { BERTHS } from './__generated__/BERTHS';
import {
  DELETE_BERTH_APPLICATION,
  DELETE_BERTH_APPLICATIONVariables as DELETE_BERTH_APPLICATION_VARS,
} from './__generated__/DELETE_BERTH_APPLICATION';
import {
  EXTEND_BERTH_APPLICATION,
  EXTEND_BERTH_APPLICATIONVariables as EXTEND_BERTH_APPLICATION_VARS,
} from './__generated__/EXTEND_BERTH_APPLICATION';
import Berths from './Berths';
import {
  BERTHS_QUERY,
  DELETE_BERTH_APPLICATION_MUTATION,
  EXTEND_BERTH_APPLICATION_MUTATION,
  UPDATE_BERTH_APPLICATION_MUTATION,
} from './queries';
import { getChoiceFromHarborNode, getChoicesFromBerthApplication } from './utils';
import { BerthApplicationNodeCertainly } from './types';
import {
  UPDATE_BERTH_APPLICATION,
  UPDATE_BERTH_APPLICATIONVariables as UPDATE_BERTH_APPLICATION_VARS,
} from './__generated__/UPDATE_BERTH_APPLICATION';
import { UpdateBerthApplicationInput } from '../../../__generated__/globalTypes';
import { HarborsQuery } from '../../__generated__/HarborsQuery';
import { OWN_BOATS } from '../boats/__generated__/OWN_BOATS';
import { HARBORS_QUERY } from '../../queries';
import { OWN_BOATS_QUERY } from '../boats/queries';

const BerthsContainer = () => {
  // TODO: Get real data
  const { id } = useParams<{ id: string }>();
  const { offer, invoice, reservations } = getCustomerBerthsProps(id);
  // end TODO
  const { t } = useTranslation();

  const { loading, error, data } = useQuery<BERTHS>(BERTHS_QUERY);

  const { data: harborsData, loading: harborsLoading } = useQuery<HarborsQuery>(HARBORS_QUERY);
  const { data: ownBoatsData, loading: ownBoatsLoading } = useQuery<OWN_BOATS>(OWN_BOATS_QUERY);

  const [deleteBerthApplication] = useMutation<DELETE_BERTH_APPLICATION, DELETE_BERTH_APPLICATION_VARS>(
    DELETE_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [getOperationName(BERTHS_QUERY) || 'BERTHS_QUERY'],
    }
  );
  const [extendBerthApplication] = useMutation<EXTEND_BERTH_APPLICATION, EXTEND_BERTH_APPLICATION_VARS>(
    EXTEND_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [getOperationName(BERTHS_QUERY) || 'BERTHS_QUERY'],
    }
  );

  const [updateApplication] = useMutation<UPDATE_BERTH_APPLICATION, UPDATE_BERTH_APPLICATION_VARS>(
    UPDATE_BERTH_APPLICATION_MUTATION,
    {
      refetchQueries: [getOperationName(BERTHS_QUERY) || 'BERTHS_QUERY'],
    }
  );

  const berthApplications =
    data?.myProfile?.berthApplications?.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is BerthApplicationNodeCertainly => Boolean(node)) ?? [];

  const applications = berthApplications.map((berthApplication) => ({
    id: berthApplication.id,
    status: berthApplication.status,
    applicationDate: berthApplication.createdAt,
    choices: getChoicesFromBerthApplication(berthApplication),
    boat: berthApplication.boat,
  }));

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Notification type="error" label={t('common.error')}>
        {t('common.data_missing_query_error')}
      </Notification>
    );
  }

  const harbors =
    harborsData?.harbors?.edges.map((harbor) => ({
      value: harbor?.node?.id ?? '',
      label: harbor?.node?.properties?.name ?? '',
    })) ?? [];

  const ownBoats =
    ownBoatsData?.myProfile?.boats?.edges.map((boat) => ({
      value: boat?.node?.id ?? '',
      label: [boat?.node?.name, boat?.node?.registrationNumber].join(' '),
    })) ?? [];

  const handleDeleteApplication = (berthApplicationId: string) => {
    deleteBerthApplication({
      variables: {
        input: {
          id: berthApplicationId,
        },
      },
    });
  };

  const handleEditApplication = (
    id: string,
    addChoices: UpdateBerthApplicationInput['addChoices'],
    removeChoices: UpdateBerthApplicationInput['removeChoices'],
    boatId: UpdateBerthApplicationInput['boatId']
  ) => {
    updateApplication({
      variables: {
        input: {
          id,
          boatId,
          removeChoices,
          addChoices,
        },
      },
    });
  };

  const handleExtendApplication = (berthApplicationId: string) => {
    extendBerthApplication({
      variables: {
        input: {
          id: berthApplicationId,
        },
      },
    });
  };

  const getHarborChoiceFromData = (choiceId: string, priority: number) => {
    const harbor = harborsData?.harbors?.edges.find((edge) => edge?.node?.id === choiceId);
    if (!harbor?.node) return;

    return getChoiceFromHarborNode(harbor.node, priority);
  };

  return (
    <Berths
      offer={offer}
      invoice={invoice}
      reservations={reservations}
      applications={applications}
      harborsOptions={harbors}
      harborsLoading={harborsLoading}
      ownBoatsOptions={ownBoats}
      ownBoatsLoading={ownBoatsLoading}
      getHarborChoiceFromData={getHarborChoiceFromData}
      onDeleteApplication={handleDeleteApplication}
      onEditApplication={handleEditApplication}
      onExtendApplication={handleExtendApplication}
    />
  );
};

export default BerthsContainer;
