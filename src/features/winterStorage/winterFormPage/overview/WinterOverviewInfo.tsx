import { Col, Row } from 'reactstrap';

import withApplicationType from '../../../../common/withApplicationType/withApplicationType';
import BoatInfo from '../../../../common/boatInfo/BoatInfo';
import BoatMeasures from '../../../../common/boatMeasures/BoatMeasures';
import BoatTypeAndModel from '../../../../common/boatTypeAndModel/BoatTypeAndModel';
import CompanyOverview from '../../../../common/companyOverview/CompanyOverview';
import LinkedEditSection from '../../../../common/linkedEditSection/LinkedEditSection';
import OverviewInfo from '../../../../common/overviewInfo/OverviewInfo';
import OverviewStorageMethod from '../../../../common/overviewStorageMethod/OverviewStorageMethod';
import PersonOverview from '../../../../common/personOverview/PersonOverview';
import { WinterStorageAreas, WinterFormValues } from '../../types';
import { StepType } from '../../../../common/steps/step/Step';
import { WithBoatType } from '../../../../common/selects/Selects';

type Props = {
  values: WinterFormValues;
  selectedAreas: WinterStorageAreas;
  steps: StepType[];
  boatTab: string;
  applicationType: string;
} & WithBoatType;

const WinterOverviewInfo = ({ values, selectedAreas, boatTypes, steps, boatTab, applicationType }: Props) => (
  <OverviewInfo title={applicationType}>
    <LinkedEditSection title="page.overview.info.boat_info" link={steps[2].linkTo}>
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
      {boatTab === 'no-boat' && (
        <>
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
    <LinkedEditSection title="page.overview.info.berths" link={steps[1].linkTo}>
      <Row>
        <Col xs={12}>
          {selectedAreas.map((area, index) => (
            <div key={area.id}>
              {index + 1}. {area.name}
            </div>
          ))}
        </Col>
      </Row>
    </LinkedEditSection>
    <LinkedEditSection title="page.overview.info.person" link={steps[3].linkTo}>
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

export default withApplicationType(WinterOverviewInfo);
