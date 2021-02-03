import React from 'react';
import './authButton.scss';

interface AuthButtonProps {
  name: string;
  identifier: string;
  image: string;
  onClick: () => void;
}

const AuthButton = ({ name, identifier, image, onClick }: AuthButtonProps) => {
  return (
    <div className="vene-payment-page__auth-button__container">
      <strong>{name}</strong>
      <button onClick={onClick} className="vene-payment-page__auth-button__button">
        <img src={image} alt={identifier} />
      </button>
    </div>
  );
};

export default AuthButton;
