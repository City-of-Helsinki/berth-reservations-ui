// TODO: Use real enum
export const getProductServiceTKey = (productService: string) => {
  switch (productService) {
    case 'DINGHY_PLACE':
      return 'page.profile.berths.berthOffer.dinghyPlace';
    case 'ELECTRICITY':
      return 'page.profile.berths.berthOffer.electricity';
    case 'GATE':
      return 'page.profile.berths.berthOffer.gate';
    case 'LIGHTING':
      return 'page.profile.berths.berthOffer.lighting';
    case 'MOORING':
      return 'page.profile.berths.berthOffer.mooring';
    case 'PARKING_PERMIT':
      return 'page.profile.berths.berthOffer.parkingPermit';
    case 'STORAGE_ON_ICE':
      return 'page.profile.berths.berthOffer.storageOnIce';
    case 'SUMMER_STORAGE_FOR_DOCKING_EQUIPMENT':
      return 'page.profile.berths.berthOffer.dockingEquipmentSummerStorage';
    case 'SUMMER_STORAGE_FOR_TRAILERS':
      return 'page.profile.berths.berthOffer.trawlerSummerStorage';
    case 'WASTE_COLLECTION':
      return 'page.profile.berths.berthOffer.wasteCollection';
    case 'WATER':
      return 'page.profile.berths.berthOffer.water';

    default:
      return productService;
  }
};
