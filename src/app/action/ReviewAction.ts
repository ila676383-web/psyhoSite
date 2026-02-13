"use server";

const API_URL = process.env.API_URL;



export const createReview = async (data: {
  name: string;
  rate: number;
  description: string; 
  lib_id: number;
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
    throw new Error("Ошибка при создании отзыва");
  }
  return await res.json();
};




export const getReviews = async () => {
  const res = await fetch(`${API_URL}/api/reviews`);
  if (!res.ok) {
    throw new Error("Оотзывар");
  }
  return await res.json();
};

export const deleteReviews = async (id: number) => {
  const res = await fetch(`${API_URL}/api/reviews/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при удалении отзыва");
  }
  return await res.json();
};

export const changeReviews = async (
  id: number,
  data: {
    name: string;
    description: string;
    rate: number;
  },
) => {
  const res = await fetch(`${API_URL}/api/reviews/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Ошибка при изменение отзыва");
  }
  return await res.json();
};
