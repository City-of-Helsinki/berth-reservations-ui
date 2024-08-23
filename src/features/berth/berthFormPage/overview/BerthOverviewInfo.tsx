import { Fragment } from 'react';
import { Col, Row } from 'reactstrap';

import withApplicationType from '../../../../common/withApplicationType/withApplicationType';
import BigShipsInfo from './bigShipsInfo/BigShipsInfo';
import BoatDraughtAndWeight from './BoatDraughtAndWeight';
import BoatInfo from '../../../../common/boatInfo/BoatInfo';
import BoatMeasures from '../../../../common/boatMeasures/BoatMeasures';
import BoatTypeAndModel from '../../../../common/boatTypeAndModel/BoatTypeAndModel';
import CompanyOverview from '../../../../common/companyOverview/CompanyOverview';
import LinkedEditSection from '../../../../common/linkedEditSection/LinkedEditSection';
import OldBerthInfo from './oldBerthInfo/OldBerthInfoContainer';
import OverviewInfo from '../../../../common/overviewInfo/OverviewInfo';
import PersonOverview from '../../../../common/personOverview/PersonOverview';
import { BerthSwitchState } from '../../../../redux/types';
import { BerthFormValues, Harbors } from '../../types';
import { StepType } from '../../../../common/steps/step/Step';
import { BigBoatTypeValue, WithBoatType } from '../../../../common/selects/Selects';

type Props = {
  applicationType: string;
  berthSwitch: BerthSwitchState;
  boatTab: string;
  selectedHarbors: Harbors;
  steps: StepType[];
  values: BerthFormValues;
} & WithBoatType;

const BerthOverviewInfo = ({
  applicationType,
  berthSwitch,
  boatTab,
  boatTypes,
  selectedHarbors,
  steps,
  values,
}: Props) => {
  const showBigShipsForm = values.boatType === BigBoatTypeValue;
  const isSwitchApplication = applicationType === 'site.steps.title.berths.switch';

  return (
    <OverviewInfo title={applicationType}>
      {isSwitchApplication && (
        <LinkedEditSection title="page.berth.switch_application.current_berth.title" link="berths/selected">
          <OldBerthInfo berthSwitch={berthSwitch} />
        </LinkedEditSection>
      )}

      <LinkedEditSection title="page.overview.info.boat_info" link={steps[2].linkTo}>
        {boatTab === 'registered-boat' && (
          <Fragment>
            <BoatInfo name={values.boatName} registerNumber={values.boatRegistrationNumber} />
            <BoatTypeAndModel boatTypeId={values.boatType ?? ''} boatModel={values.boatModel} boatTypes={boatTypes} />
            <BoatMeasures width={values.boatWidth} length={values.boatLength} />
            <BoatDraughtAndWeight draught={values.boatDraught} weight={values.boatWeight} />
            {showBigShipsForm && (
              <BigShipsInfo
                propulsion={values.boatPropulsion}
                hullMaterial={values.boatHullMaterial}
                intendedUse={values.boatIntendedUse}
                rentingPeriod={values.rentingPeriod}
                rentFrom={values.rentFrom}
                rentTill={values.rentTill}
              />
            )}
          </Fragment>
        )}
        {boatTab === 'unregistered-boat' && (
          <Fragment>
            <BoatInfo name={values.boatName} registerNumber={values.boatRegistrationNumber} />
            <BoatTypeAndModel boatTypeId={values.boatType ?? ''} boatModel={values.boatModel} boatTypes={boatTypes} />
            <BoatMeasures width={values.boatWidth} length={values.boatLength} />
          </Fragment>
        )}
        {boatTab === 'no-boat' && (
          <Fragment>
            <BoatTypeAndModel boatTypeId={values.boatType ?? ''} boatModel={values.boatModel} boatTypes={boatTypes} />
            <BoatMeasures width={values.boatWidth} length={values.boatLength} />
          </Fragment>
        )}
      </LinkedEditSection>

      <LinkedEditSection title="page.overview.info.berths" link={steps[1].linkTo}>
        <Row>
          <Col xs={12}>
            {selectedHarbors.map((berth, index) => (
              <div key={berth.id}>
                {index + 1}. {berth.name}
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
};

export default withApplicationType(BerthOverviewInfo);
