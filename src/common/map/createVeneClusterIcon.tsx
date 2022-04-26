import L from 'leaflet';

import { getIsVeneIconSelected } from './mapVeneIcon';
import './createVeneClusterIcon.scss';

export default function createVeneClusterIcon(cluster: L.MarkerCluster) {
  const selectedChildrenCount =
    cluster.getAllChildMarkers()?.filter((marker: L.Marker) => getIsVeneIconSelected(marker))?.length ?? 0;
  const hasSelectedChildren = selectedChildrenCount > 0;

  return new L.DivIcon({
    html: `<div tabindex="-1"><span tabindex="-1">${cluster.getChildCount()}</span></div>`,
    className: [
      'leaflet-marker-icon',
      'marker-cluster marker-cluster-small',
      'leaflet-zoom-animated',
      'leaflet-interactive',
      'veneClusterIcon',
      hasSelectedChildren ? 'veneClusterIcon--selectedChildren' : '',
    ].join(' '),
    iconSize: L.point(25, 25, true),
  });
}
