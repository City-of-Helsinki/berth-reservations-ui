import L from 'leaflet';

import HarborMatchActive from '../icon/icons/harbor-match-active.svg';
import HarborMatchActiveAndSelected from '../icon/icons/harbor-match-chosen-active.svg';
import HarborMatchSelected from '../icon/icons/harbor-match-chosen.svg';
import HarborMatchUnselected from '../icon/icons/harbor-match.svg';
import HarborUnmatchActive from '../icon/icons/harbor-unmatch-active.svg';
import HarborUnmatchActiveAndSelected from '../icon/icons/harbor-unmatch-chosen-active.svg';
import HarborUnmatchSelected from '../icon/icons/harbor-unmatch-chosen.svg';
import HarborUnmatchUnselected from '../icon/icons/harbor-unmatch.svg';

const IconMatchSelected = new L.Icon({
  iconUrl: HarborMatchSelected,
  iconRetinaUrl: HarborMatchSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconMatchUnselected = new L.Icon({
  iconUrl: HarborMatchUnselected,
  iconRetinaUrl: HarborMatchUnselected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconMatchActive = new L.Icon({
  iconUrl: HarborMatchActive,
  iconRetinaUrl: HarborMatchActive,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconMatchActiveAndSelected = new L.Icon({
  iconUrl: HarborMatchActiveAndSelected,
  iconRetinaUrl: HarborMatchActiveAndSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconUnmatchUnselected = new L.Icon({
  iconUrl: HarborUnmatchUnselected,
  iconRetinaUrl: HarborUnmatchUnselected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconUnmatchSelected = new L.Icon({
  iconUrl: HarborUnmatchSelected,
  iconRetinaUrl: HarborUnmatchSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconUnmatchActive = new L.Icon({
  iconUrl: HarborUnmatchActive,
  iconRetinaUrl: HarborUnmatchActive,
  iconSize: new L.Point(25, 25),
  className: 'map-marker',
});

const IconUnmatchActiveAndSelected = new L.Icon({
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
