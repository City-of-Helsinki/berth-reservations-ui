import { IconNames } from '@common/Icon';

export default interface BerthDetailsProps {
  iconName?: IconNames;
  available: boolean;
  value?: number;
  titleId: string;
}
