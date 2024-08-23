import { Col, Row } from 'reactstrap';

import { UnmarkedWinterFormValues, WinterStorageArea } from '../../types';
import { StepType } from '../../../../common/steps/step/Step';
import BoatInfo from '../../../../common/boatInfo/BoatInfo';
import BoatMeasures from '../../../../common/boatMeasures/BoatMeasures';
import BoatTypeAndModel from '../../../../common/boatTypeAndModel/BoatTypeAndModel';
import CompanyOverview from '../../../../common/companyOverview/CompanyOverview';
import LinkedEditSection from '../../../../common/linkedEditSection/LinkedEditSection';
import OverviewInfo from '../../../../common/overviewInfo/OverviewInfo';
import PersonOverview from '../../../../common/personOverview/PersonOverview';
import { WithBoatType } from '../../../../common/selects/Selects';
import OverviewStorageMethod from '../../../../common/overviewStorageMethod/OverviewStorageMethod';

export type UnmarkedWinterOverviewInfoProps = {
  values: UnmarkedWinterFormValues;
  selectedArea: WinterStorageArea;
  steps: StepType[];
  boatTab: string;
} & WithBoatType;

const UnmarkedWinterOverviewInfo = ({
  boatTab,
  boatTypes,
  selectedArea,
  steps,
  values,
}: UnmarkedWinterOverviewInfoProps) => {
  return (
    <OverviewInfo>
      <LinkedEditSection title="page.overview.info.boat_info" link={steps[1].linkTo}>
        {boatTab === 'registered-boat' && (
          <>
            <BoatInfo name={values.boatName} registerNumber={values.boatRegistrationNumber} />
            <BoatTypeAndModel boatTypeId={values.boatType ?? ''} boatModel={values.boatModel} boatTypes={boatTypes} />
            <BoatMeasures width={values.boatWidth} length={values.boatLength} />
          </>
        )}
        {boatTab === 'unregistered-boat' && (
          <>
            <BoatInfo name={values.boatName} registerNumber={values.boatRegistrationNumber} />
            <BoatTypeAndModel boatTypeId={values.boatType ?? ''} boatModel={values.boatModel} boatTypes={boatTypes} />
            <BoatMeasures width={values.boatWidth} length={values.boatLength} />
          </>
        )}
        {values.storageMethod && (
          <OverviewStorageMethod
            registrationNumber={values.trailerRegistrationNumber}
            storageMethod={values.storageMethod}
          />
        )}
      </LinkedEditSection>
      <LinkedEditSection title="page.overview.info.winter_storage_area" link={steps[0].linkTo}>
        <Row>
          <Col xs={12}>
            <div>{selectedArea.name}</div>
          </Col>
        </Row>
      </LinkedEditSection>
      <LinkedEditSection title="page.overview.info.owner_information" link={steps[2].linkTo}>
        {values.companyName && values.businessId ? (
          <CompanyOverview
            companyName={values.companyName}
            businessId={values.businessId}
            firstName={values.firstName}
            lastName={values.lastName}
            email={values.email}
            phoneNumber={values.phoneNumber}
            address={values.address}
            zipCode={values.zipCode}
            municipality={values.municipality}
          />
        ) : (
          <PersonOverview
            firstName={values.firstName}
            lastName={values.lastName}
            email={values.email}
            phoneNumber={values.phoneNumber}
            address={values.address}
            zipCode={values.zipCode}
            municipality={values.municipality}
          />
        )}
      </LinkedEditSection>
    </OverviewInfo>
  );
};
export default UnmarkedWinterOverviewInfo;
