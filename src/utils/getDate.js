export const getDate = (timestamp) => {
  console.log("first");
  return new Date(timestamp.seconds * 1000).toLocaleString();
};
