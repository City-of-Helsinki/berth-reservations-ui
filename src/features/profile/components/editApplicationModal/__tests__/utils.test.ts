import { moveItemInArrayForward, moveItemInArrayBackward, removeItemFromArray } from '../utils';

describe('utils', () => {
  describe('moveItemInArrayForward', () => {
    it('should return a new array instance', () => {
      const array = [{ id: '1' }, { id: '2' }, { id: '3' }];
      const newArray = moveItemInArrayForward(array, '1');

      expect(newArray).not.toBe(array);
    });

    it('should move item in array forward', () => {
      const array = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];

      const id = '2';

      const newArray = moveItemInArrayForward(array, id);
      const expectedArray = [{ id: '1' }, { id: '3' }, { id: '2' }, { id: '4' }, { id: '5' }];

      expect(newArray).toEqual(expectedArray);
    });

    it('should keep the last item in its position', () => {
      const array = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];

      const id = '5';

      const newArray = moveItemInArrayForward(array, id);
      const expectedArray = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];

      expect(newArray).toEqual(expectedArray);
    });
  });

  describe('moveItemInArrayBackward', () => {
    it('should return a new array instance', () => {
      const array = [{ id: '1' }, { id: '2' }, { id: '3' }];
      const newArray = moveItemInArrayBackward(array, '1');

      expect(newArray).not.toBe(array);
    });

    it('should move item in array backward', () => {
      const array = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];

      const id = '2';

      const newArray = moveItemInArrayBackward(array, id);
      const expectedArray = [{ id: '2' }, { id: '1' }, { id: '3' }, { id: '4' }, { id: '5' }];

      expect(newArray).toEqual(expectedArray);
    });

    it('should keep the first item in its position', () => {
      const array = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];

      const id = '1';

      const newArray = moveItemInArrayBackward(array, id);
      const expectedArray = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];

      expect(newArray).toEqual(expectedArray);
    });
  });

  describe('removeItemFromArray', () => {
    it('should return a new array instance', () => {
      const array = [{ id: '1' }, { id: '2' }, { id: '3' }];
      const newArray = removeItemFromArray(array, '1');

      expect(newArray).not.toBe(array);
    });

    it('should remove item from array', () => {
      const array = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];

      const id = '2';

      const newArray = removeItemFromArray(array, id);
      const expectedArray = [{ id: '1' }, { id: '3' }, { id: '4' }, { id: '5' }];

      expect(newArray).toEqual(expectedArray);
    });
  });
});
