export const templateAPI = function <T>(data: T[]) {
  return {
    getItemsArr: () => {
      return data;
    },
  };
};
