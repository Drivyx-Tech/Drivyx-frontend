// 01 Dec, 7:50 pm
const formattedTime = (time: any) => {
  return new Date(time).toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const getBase64 = (file: any) => {
  const base = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  return base;
};

export const Utiles = {
  formattedTime,
  getBase64,
};
