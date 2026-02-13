"use client";

import { useForm } from "react-hook-form";


export type TAdminData = {
  username: string;
  password: string;
};


type Props = {
  action: (formData: FormData) => void;
};

export default function AdminForm({ action }: Props) {


  const { register, formState } = useForm<TAdminData>();

  const usernameError = formState.errors["username"]?.message;
  const passwordError = formState.errors["password"]?.message;

  return (
   <form
      action={action}
      noValidate
      className="flex flex-col justify-center items-center gap-10 h-[90vh] mx-[5%]"
    >
      <div className="flex flex-col relative">
        <input
        className="py-3 px-5 border rounded-2xl"
          {...register("username", {
            required: "Обязательно поле",
            minLength: { value: 5, message: "Минимум 5 символов" },
          })}
          name="username"
        />
        <p>{usernameError}</p>
      </div>

      <div className="flex flex-col relative">
        <input
        className="py-3 px-5 border rounded-2xl"
          {...register("password", {
            required: "Обязательно поле",
          })}
          name="password"
          type="password"
        />
        <p>{passwordError}</p>
      </div>

      <button className="border p-2 rounded-2xl bg-pink-300 active:scale-95 " type="submit">Авторизация</button>
    </form>
  );
};


