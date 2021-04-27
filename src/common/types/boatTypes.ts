import { HarborsQuery_boatTypes } from '../../features/__generated__/HarborsQuery';
import { WinterAreasQuery_boatTypes } from '../../features/__generated__/WinterAreasQuery';

export type BoatType = WinterAreasQuery_boatTypes | HarborsQuery_boatTypes | null;
export type BoatTypes = BoatType[] | null;
