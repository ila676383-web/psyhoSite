"use server";

import { revalidateTag } from "next/cache";

const API_URL = process.env.API_URL;

export const createLib = async (data: {
  name: string;
  category: "book" | "movie";
  description: string;
  long_description: string;
  rating: number;
  image: string; // base64
}) => {
  const res = await fetch(`${API_URL}/api/libs`, {
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
    console.error("BACKEND RESPONSE:", text);
    throw new Error(text);
  }
  revalidateTag("libs", "default");

  return await res.json();
};

export const getLibs = async () => {
  const res = await fetch(`${API_URL}/api/libs`, {
    next: { tags: ["libs"] },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении библиотеки");
  }
  return await res.json();
};

export const deleteLibs = async (id: number) => {
  const res = await fetch(`${API_URL}/api/libs/${id}`, {
    method: "DELETE",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при удалении библиотки");
  }
  revalidateTag("libs", "default");
  return await res.json();
};

export const changeLibs = async (
  id: number,
  data: {
    name: string;
    category: "book" | "movie";
    description: string;
    long_description: string;
    rating: number;
    image?: string; // base64
  },
) => {
  const res = await fetch(`${API_URL}/api/libs/${id}`, {
    method: "PATCH",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Ошибка при изменение библиотки");
  }
  revalidateTag("libs", "default");
  return await res.json();
};
