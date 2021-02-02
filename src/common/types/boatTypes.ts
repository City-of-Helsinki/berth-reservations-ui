import { BoatTypesBerthsQuery_boatTypes } from '../../features/__generated__/BoatTypesBerthsQuery';
import { WinterAreasQuery_boatTypes } from '../../features/__generated__/WinterAreasQuery';

export type BoatType = WinterAreasQuery_boatTypes | BoatTypesBerthsQuery_boatTypes | null;
export type BoatTypes = BoatType[] | null;
