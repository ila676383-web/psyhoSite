"use server";

import { revalidateTag } from "next/cache";

const API_URL = process.env.API_URL;



export const createReview = async (data: {
  name: string;
  rate: number;
  description: string; 
  lib_id: number;
  image: string;
}) => {
  const res = await fetch(`${API_URL}/api/reviews`, {
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
    throw new Error(`Ошибка при создании отзыва: ${text}`);
  }
  revalidateTag("reviews", "default");
  return await res.json();
};




export const getReviews = async () => {
  const res = await fetch(`${API_URL}/api/reviews`,{
    next: {tags: ["reviews"]}
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении отзывов");
  }
  return await res.json();
};

export const deleteReviews = async (id: number) => {
  const res = await fetch(`${API_URL}/api/reviews/${id}`, {
    method: "DELETE",
        cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при удалении отзыва");
  }
  revalidateTag("reviews", "default");
  return await res.json();
};



export const changeReviews = async (
  id: number,
  data: {
    name: string;
    description: string;
    rate: number;
    image: string;
  },
) => {
  const res = await fetch(`${API_URL}/api/reviews/${id}`, {
    method: "PATCH",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Ошибка при изменение отзыва");
  }
  revalidateTag("reviews", "default");
  return await res.json();
};
