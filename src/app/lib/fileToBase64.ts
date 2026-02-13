export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;
      // result = "data:image/png;base64,AAAA..."
      const base64 = result.split(",")[1]; // 🔥 убираем префикс
      resolve(base64);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });