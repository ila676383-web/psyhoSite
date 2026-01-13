"use client";

import { useForm } from "react-hook-form";

export type TFormBack = {
  user: string;
  phone: string | number;
};
const FormBack = () => {
  const { register, formState, handleSubmit, reset } = useForm<TFormBack>({
    
  });

  const onSubmit = (data: TFormBack) => {
    console.log(data);
    reset();
  };

  const phoneError = formState.errors['phone']?.message

  return (
    <form
      className="flex flex-col gap-5 justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl uppercase font-bold ">Записаться на прием</h1>
      <input
        className="border p-2 text-2xl font-bold rounded-2xl"
        type="text"
        placeholder="Имя"
        {...register("user")}
      />

    <div>
       <input
        className="border p-2 text-2xl font-bold rounded-2xl"
        type="text"
        placeholder="+7(900)-000-00-00"
        {...register("phone", {
          pattern: {
            value: /^(8\d{10}|\+7\d{10}|7\d{10})$/,
            message: "Неправильный номер телефона",
          },
          required: "Введите номер телефона",
        })}
      />
      <p className="text-red-400">{phoneError}</p>  
    </div>
     

      <button className="bg-gray-200 p-2 rounded-2xl font-bold text-2xl transition-transform ease-in-out duration-300 hover:scale-105 active:scale-95 font-stretch-75% ">
        Отправить
      </button>
    </form>
  );
};

export default FormBack;
