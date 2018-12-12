// @flow

import L from 'leaflet';

import HarborMatchSelected from './common/icons/harbor-match-chosen.svg';
import HarborMatchUnselected from './common/icons/harbor-match.svg';
import HarborMatchActive from './common/icons/harbor-match-active.svg';
import HarborMatchActiveAndSelected from './common/icons/harbor-match-chosen-active.svg';

import HarborUnmatchSelected from './common/icons/harbor-unmatch-chosen.svg';
import HarborUnmatchUnselected from './common/icons/harbor-unmatch.svg';
import HarborUnmatchActive from './common/icons/harbor-unmatch-active.svg';
import HarborUnmatchActiveAndSelected from './common/icons/harbor-unmatch-chosen-active.svg';

/* eslint-disable */
delete L.Icon.Default.prototype._getIconUrl;
/* eslint-enable */

const IconMatchSelected = new L.Icon({
  iconUrl: HarborMatchSelected,
  iconRetinaUrl: HarborMatchSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const IconMatchUnselected = new L.Icon({
  iconUrl: HarborMatchUnselected,
  iconRetinaUrl: HarborMatchUnselected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const IconMatchActive = new L.Icon({
  iconUrl: HarborMatchActive,
  iconRetinaUrl: HarborMatchActive,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const IconMatchActiveAndSelected = new L.Icon({
  iconUrl: HarborMatchActiveAndSelected,
  iconRetinaUrl: HarborMatchActiveAndSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const IconUnmatchUnselected = new L.Icon({
  iconUrl: HarborUnmatchUnselected,
  iconRetinaUrl: HarborUnmatchUnselected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const IconUnmatchSelected = new L.Icon({
  iconUrl: HarborUnmatchSelected,
  iconRetinaUrl: HarborUnmatchSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const IconUnmatchActive = new L.Icon({
  iconUrl: HarborUnmatchActive,
  iconRetinaUrl: HarborUnmatchActive,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

const IconUnmatchActiveAndSelected = new L.Icon({
  iconUrl: HarborUnmatchActiveAndSelected,
  iconRetinaUrl: HarborUnmatchActiveAndSelected,
  iconSize: new L.Point(25, 25),
  className: 'map-marker'
});

export default (isSelected: ?boolean, isPreviewed: ?boolean, isFilteredNot: ?boolean) => {
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
