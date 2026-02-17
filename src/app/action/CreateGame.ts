"use server";

import { revalidateTag } from "next/cache";

const API_URL = process.env.API_URL;


export const createGame = async (data: {
  category: string;
  name: string;
  description: string;
  time: string;
  image: string;
  hot: boolean;
  new: boolean;
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
    const text = await res.text();
    console.error("API ERROR RESPONSE:", text);
    throw new Error(text);
  }

  revalidateTag("games", "default");
  return await res.json();
};




export const getGames = async () => {
  const res = await fetch(`${API_URL}/api/game-schedules`, {
    next: { tags: ["games"] },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении игр");
  }
  return await res.json();
};

export const deleteGames = async (id: number) => {
  const res = await fetch(`${API_URL}/api/game-schedules/${id}`, {
    method: "DELETE",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при удалении игр");
  }
  revalidateTag("games", "default");
  return await res.json();
};

export const changeGames = async (
  id: number,
  data: {
    name: string;
    category: string;
    description: string;
    time: string;
    hot?: boolean;
    new?: boolean;
    image: string;
  },
) => {
  const res = await fetch(`${API_URL}/api/game-schedules/${id}`, {
    method: "PATCH",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Ошибка при изменение игр");
  }
  revalidateTag("games", "default");
  return await res.json();
};
