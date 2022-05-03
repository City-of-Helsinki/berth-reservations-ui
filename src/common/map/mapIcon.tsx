import L from 'leaflet';

import HarborMatchActive from '../icon/icons/harbor-match-active.svg';
import HarborMatchActiveAndSelected from '../icon/icons/harbor-match-chosen-active.svg';
import HarborMatchSelected from '../icon/icons/harbor-match-chosen.svg';
import HarborMatchUnselected from '../icon/icons/harbor-match.svg';
import HarborUnmatchActive from '../icon/icons/harbor-unmatch-active.svg';
import HarborUnmatchActiveAndSelected from '../icon/icons/harbor-unmatch-chosen-active.svg';
import HarborUnmatchSelected from '../icon/icons/harbor-unmatch-chosen.svg';
import HarborUnmatchUnselected from '../icon/icons/harbor-unmatch.svg';
import { createVeneIcon } from './mapVeneIcon';

const IconMatchSelected = createVeneIcon({
  iconUrl: HarborMatchSelected,
  iconRetinaUrl: HarborMatchSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
  isSelected: true,
});

const IconMatchUnselected = createVeneIcon({
  iconUrl: HarborMatchUnselected,
  iconRetinaUrl: HarborMatchUnselected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconMatchActive = createVeneIcon({
  iconUrl: HarborMatchActive,
  iconRetinaUrl: HarborMatchActive,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconMatchActiveAndSelected = createVeneIcon({
  iconUrl: HarborMatchActiveAndSelected,
  iconRetinaUrl: HarborMatchActiveAndSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
  isSelected: true,
});

const IconUnmatchUnselected = createVeneIcon({
  iconUrl: HarborUnmatchUnselected,
  iconRetinaUrl: HarborUnmatchUnselected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconUnmatchSelected = createVeneIcon({
  iconUrl: HarborUnmatchSelected,
  iconRetinaUrl: HarborUnmatchSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
  isSelected: true,
});

const IconUnmatchActive = createVeneIcon({
  iconUrl: HarborUnmatchActive,
  iconRetinaUrl: HarborUnmatchActive,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconUnmatchActiveAndSelected = createVeneIcon({
  iconUrl: HarborUnmatchActiveAndSelected,
  iconRetinaUrl: HarborUnmatchActiveAndSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const mapIcon = (isSelected?: boolean, isPreviewed?: boolean, isFilteredNot?: boolean) => {
  if (isFilteredNot) {
    if (isPreviewed && isSelected) {
      return IconUnmatchActiveAndSelected;
    }
    if (isPreviewed && !isSelected) {
      return IconUnmatchActive;
    }
    if (!isPreviewed && isSelected) {
      return IconUnmatchSelected;
    }
    return IconUnmatchUnselected;
  }
  if (isPreviewed && isSelected) {
    return IconMatchActiveAndSelected;
  }
  if (isPreviewed && !isSelected) {
    return IconMatchActive;
  }
  if (!isPreviewed && isSelected) {
    return IconMatchSelected;
  }
  return IconMatchUnselected;
};

export default mapIcon;
