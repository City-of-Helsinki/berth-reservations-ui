import L from 'leaflet';

import './createVeneClusterIcon.scss';

// MarkerCluster type is not exported so that it could be used in userland
export default function createVeneClusterIcon(cluster: any) {
  return new L.DivIcon({
    html: `<div tabindex="-1"><span tabindex="-1">${cluster.getChildCount()}</span></div>`,
    className: [
      'leaflet-marker-icon',
      'marker-cluster marker-cluster-small',
      'leaflet-zoom-animated',
      'leaflet-interactive',
      'veneClusterIcon',
    ].join(' '),
    iconSize: L.point(25, 25, true),
  });
}
