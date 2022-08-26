export const formatDate = (date) => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const calculateHowManyDaysHavePassed = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
