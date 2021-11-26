export const moveItemInArrayForward = <T extends { id: string }>(array: T[], id: T['id']) => {
  const index = array.findIndex((item) => item.id === id);
  const newArr = [...array];
  const newIndex = index + 1;

  if (newIndex < newArr.length) {
    const item = newArr[index];
    newArr.splice(index, 1);
    newArr.splice(newIndex, 0, item);
  }

  return newArr;
};

export const moveItemInArrayBackward = <T extends { id: string }>(array: T[], id: T['id']) => {
  const index = array.findIndex((item) => item.id === id);
  const newArr = [...array];
  const newIndex = index - 1;

  if (newIndex >= 0) {
    const item = newArr[index];
    newArr.splice(index, 1);
    newArr.splice(newIndex, 0, item);
  }

  return newArr;
};

export const removeItemFromArray = <T extends { id: string }>(array: T[], id: T['id']) => {
  const index = array.findIndex((item) => item.id === id);
  const newArr = [...array];

  newArr.splice(index, 1);

  return newArr;
};
