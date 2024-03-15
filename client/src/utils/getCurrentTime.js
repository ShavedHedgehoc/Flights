export const getCurrentTime = () => {
  const currentTime = new Date().toLocaleString("en-US",{ timezone: "Europe/Moscow", hour12:false })    
  return currentTime;
};
