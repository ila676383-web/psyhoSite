'use server'

const API_URL = process.env.API_URL;



export const createLib = async (data: {
  name: string;
  category: 'book' | 'movie' ;
  description: string; 
  long_description: string;
  rating: number;
  image: string // base64
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
     const text = await res.text(); // 🔥 КЛЮЧЕВО
    console.error("BACKEND RESPONSE:", text);
    throw new Error(text);
  }
  return await res.json();
};



export const getLibs= async () => {
  const res = await fetch(`${API_URL}/api/libs`);
  if (!res.ok) {
    throw new Error("Ошибка при получении библиотеки");
  }
  return await res.json();
};





export const deleteLibs = async (id: number) => {
  const res = await fetch(`${API_URL}/api/libs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при удалении библиотки");
  }
  return await res.json();
};

export const changeLibs = async (
  id: number,
  data: {
  name: string;
  category: 'book' | 'movie' ;
  description: string; 
  long_description: string;
  rating: number;
  image?: string // base64
  },
) => {
  const res = await fetch(`${API_URL}/api/libs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN_BASE}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Ошибка при изменение библиотки");
  }
  return await res.json();
};
