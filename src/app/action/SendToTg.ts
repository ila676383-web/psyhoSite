"use server";

export const sendToTg = async (data: { name: string; phone: string }) => {
  if (!data.name || !data.phone) {
    return;
  }
  const token = process.env.TOKEN;
  const chatId = process.env.ID_GROUP;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  if (!process.env.TOKEN || !process.env.ID_GROUP) {
    throw new Error("Telegram env not set");
  }

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: `🔎 Имя: ${data.name}\n☎️ Телефон: ${data.phone}`,
    }),
  });
};
