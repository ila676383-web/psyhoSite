"use client";

import { sendToTg } from "@/app/action/SendToTg";
import { Controller, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

export type TFormBack = {
  name: string;
  phone: string;
};
const FormBack = () => {
  const { register, formState, handleSubmit, reset, control } = useForm<TFormBack>({
    mode: "onChange",
  });

  const onSubmit = async (data: TFormBack) => {
    await sendToTg(data);
    reset();
  };

  const phoneError = formState.errors["phone"]?.message;
  const nameError = formState.errors["name"]?.message;

  return (
    <form
      className=" flex mx-auto flex-col gap-5 justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl md:text-3xl uppercase font-bold text-pink-300 ">
        Записаться на прием
      </h1>
      <div> 
          <input
        className="border p-2 text-2xl rounded-2xl"
        type="text"
        placeholder="Имя"
        {...register("name", {
          required: "Введите ваше имя",
          minLength: {
            value: 2,
            message: "Имя должно быть не менее 2 символов",
          },
          maxLength: {
            value: 20,
            message: "Имя должно быть не более 20 символов",
          },
          pattern: {
            value: /^[A-Za-zА-Яа-яЁё\s]+$/,
            message: "Имя должно содержать буквы ",
          },
        })}
      />
      <p className="text-red-400">{nameError}</p>
      </div>
    

      <div>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Введите номер телефона",
            validate: (value) =>
              value.replace(/\D/g, "").length === 11 ||
              "Введите полный номер",
          }}
          render={({ field }) => (
            <IMaskInput
              {...field}
              mask="+{7} (000) 000-00-00"
              unmask={false} 
              placeholder="+7 (900) 000-00-00"
              className="border p-2 text-2xl rounded-2xl w-full"
              onAccept={(value) => field.onChange(value)}
            />
          )}
        />
        <p className="text-red-400">{phoneError}</p>
      </div>

      <button className="bg-pink-300 p-2 rounded-2xl text-2xl transition-transform ease-in-out duration-300 hover:scale-105 active:scale-95 font-bold text-white ">
        Отправить
      </button>
    </form>
  );
};

export default FormBack;
