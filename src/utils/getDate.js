export const getDate = (timestamp) => {
  return new Date(timestamp.seconds * 1000).toLocaleString();
};
