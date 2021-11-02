import './boatDetail.scss';

type Props = {
  title: string;
  description: string;
};

const BoatDetail = ({ title, description }: Props) => {
  return (
    <div className="boat-detail">
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
};

export default BoatDetail;
