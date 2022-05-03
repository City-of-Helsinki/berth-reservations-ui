import L from 'leaflet';

interface VeneIconOptions extends L.IconOptions {
  isSelected?: boolean;
}

export function createVeneIcon(options: VeneIconOptions) {
  return new L.Icon<VeneIconOptions>(options);
}

export function getIsVeneIconSelected(marker: L.Marker) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return marker?.options?.icon?.options?.isSelected ?? false;
}
