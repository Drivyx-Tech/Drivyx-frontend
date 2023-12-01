// 01 Dec, 7:50 pm
export const formattedTime = (time: any) => {
  return new Date(time).toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
