"use server";


const API_URL = process.env.API_URL ;
export const createGame = async (data: {
  name: string;
  category: string;
  description: string;
  time: string;
  hot?: boolean;
  new?: boolean;
}) => {
  const res = await fetch(`${API_URL}/api/game-schedules`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при создании игры");
  }
  return await res.json();
};

export const getGames = async () => {
  const res = await fetch(`${API_URL}/api/game-schedules`);
  if (!res.ok) {
    throw new Error("Ошибка при получении игр");
  }
  return await res.json();
};

export const deleteGames = async (id: number) => {
  const res = await fetch(
    `${API_URL}/api/game-schedules/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
      },
    },
  );
  if (!res.ok) {
    throw new Error("Ошибка при удалении игр");
  }
  return await res.json();
};

export const changeGames = async (id: number, data: {
  name: string;
  category: string;
  description: string;
  time: string;
  hot?: boolean;
  new?: boolean;
}) => {
  const res = await fetch(`${API_URL}/api/game-schedules/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error("Ошибка при изменение игр");
  }
  return await res.json();
};
