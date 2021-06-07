import { useTranslation } from 'react-i18next';

import withApplicationType from '../withApplicationType/withApplicationType';
import Step, { StepType } from './step/Step';

import './steps.scss';

export interface Props {
  applicationType: string;
  steps: StepType[];
}

const Steps = ({ applicationType, steps }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="vene-steps">
      <h4 className="vene-steps__title">{t(applicationType)}</h4>
      <div className="vene-steps__items">
        {steps.map((step, index) => (
          <Step key={index} {...step} className="vene-steps__item" />
        ))}
      </div>
    </div>
  );
};

export default withApplicationType(Steps);
