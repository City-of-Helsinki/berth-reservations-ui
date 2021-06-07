import './formLegend.scss';
import { useTranslation } from 'react-i18next';

type StepLegend = {
  title: string;
  legend: string;
};

interface Props {
  legend: StepLegend;
}

const FormLegend = ({ legend }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="vene-form-legend">
      <h3>{t(legend.title)}</h3>
      <p>{t(legend.legend)}</p>
    </div>
  );
};

export default FormLegend;
