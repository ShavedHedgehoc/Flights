export const getCurrentDate = () => {
  const currentDate = new Date().toJSON().slice(0, 10);
  return currentDate;
};
