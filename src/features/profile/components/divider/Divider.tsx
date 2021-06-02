import classNames from 'classnames';

import './divider.scss';

export interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return <hr className={classNames('vene-divider', className)} />;
};

export default Divider;
