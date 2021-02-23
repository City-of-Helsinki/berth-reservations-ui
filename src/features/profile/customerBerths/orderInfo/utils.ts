// TODO: Use real enum
export const getProductServiceTKey = (productService: string) => {
  switch (productService) {
    case 'DINGHY_PLACE':
      return 'common.dinghyPlace';
    case 'ELECTRICITY':
      return 'common.electricity';
    case 'GATE':
      return 'common.gate';
    case 'LIGHTING':
      return 'common.lighting';
    case 'MOORING':
      return 'common.mooring';
    case 'PARKING_PERMIT':
      return 'common.parkingPermit';
    case 'STORAGE_ON_ICE':
      return 'common.storageOnIce';
    case 'SUMMER_STORAGE_FOR_DOCKING_EQUIPMENT':
      return 'common.dockingEquipmentSummerStorage';
    case 'SUMMER_STORAGE_FOR_TRAILERS':
      return 'common.summerStorageForTrailers';
    case 'WASTE_COLLECTION':
      return 'common.wasteCollection';
    case 'WATER':
      return 'common.water';

    default:
      return productService;
  }
};
