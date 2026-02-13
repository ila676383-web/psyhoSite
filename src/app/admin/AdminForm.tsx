"use client";

import { useForm } from "react-hook-form";
import { checkAdmin } from "./action";
import { useRouter } from "next/navigation";

export type TAdminData = {
  username: string;
  password: string;
};
const AdminForm = () => {
  const { register, handleSubmit, reset, formState } = useForm<TAdminData>();

  const router = useRouter();

  //Авторизация
  const onSubmit = async (data: TAdminData) => {
    const fd = new FormData();
    fd.set("username", data.username);
    fd.set("password", data.password);
    const auth = await checkAdmin(fd);
    reset();
  };

  const usernameError = formState.errors["username"]?.message;
  const passwordError = formState.errors["password"]?.message;

  return (
    <form
      noValidate
      className="flex flex-col justify-center items-center gap-10 h-[90vh] mx-[5%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-start relative ">
        <input
          className=" border rounded-2xl p-2 text-2xl font-bold focus:outline-2 outline-fuchsia-300 "
          type="text"
          placeholder="username"
          {...register("username", {
            required: "Обязательно поле",
            minLength: { value: 5, message: "Минимум 5 символов" },
          })}
        />
        <p className="absolute -bottom-5 text-pink-600/70">{usernameError}</p>
      </div>

      <div className="flex justify-start  relative flex-col">
        <input
          className="border rounded-2xl p-2 text-2xl font-bold focus:outline-2  outline-fuchsia-300"
          type="password"
          placeholder="password"
          {...register("password", {
            required: "Обязательно поле",
            pattern: {
              message:
                "Минимум 8 символов, одну строчную букву, одну заглавную букву, одну цифру и один специальный символ",
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            },
          })}
        />
        <p className="absolute -bottom-5 w-screen text-pink-600/70">
          {passwordError}
        </p>
      </div>

      <button className="rounded-2xl p-2 bg-pink-300/50 text-2xl font-bold  font-stretch-90% hover:scale-105 active:scale-95 transition-transform ease-in-out duration-300">
        Авторизация
      </button>
    </form>
  );
};

export default AdminForm;
