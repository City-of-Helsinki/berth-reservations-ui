import './boatDetail.scss';

type Props = {
  title: string;
  description: string;
};

const BoatDetail = ({ title, description }: Props) => {
  return (
    <div className="boat-detail">
      <strong className="boat-detail__title">{title}</strong>
      <p className="boat-detail__description">{description}</p>
    </div>
  );
};

export default BoatDetail;
