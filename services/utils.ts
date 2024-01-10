const validatePassword = (password: string) => {
  // Regular expression for password validation
  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/"'~`\\|]).*(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Test the password against the regex
  return passwordRegex.test(password);
};

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

const compressImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const maxWidth = 1400; // Your desired maximum width for the compressed image
        const compressionFactor = 0.6; // Your desired compression factor between 0 and 1

        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        if (!ctx) {
          reject(new Error("Canvas context is null"));
          return;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        const compressedBase64 = canvas.toDataURL(
          "image/jpeg",
          compressionFactor
        );

        resolve(compressedBase64);
      };

      img.onerror = (error) => reject(error);
    };

    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file);
  });
};

const toCapitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const regexpPwd = {
  charNum: /.{8,}/,
  hasUpper: /[A-Z]+/,
  hasLower: /[a-z]+/,
  hasNum: /[0-9]+/,
  hasSpecChar: /[^a-zA-Z0-9]+/,
};
const isPasswordValid = (password: string) => {
  return (
    regexpPwd.charNum.test(password) &&
    regexpPwd.hasUpper.test(password) &&
    regexpPwd.hasLower.test(password) &&
    regexpPwd.hasNum.test(password) &&
    regexpPwd.hasSpecChar.test(password)
  );
};

const percentage = (x: number, y: number) => {
  return 100 / (y / x);
};

export const Utiles = {
  validatePassword,
  formattedTime,
  getBase64,
  compressImage,
  toCapitalize,
  isPasswordValid,
  percentage,
};
