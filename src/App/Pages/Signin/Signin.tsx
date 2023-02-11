import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomButton from '@/App/shared/common/Button/Button';
import CustomInput from '@/App/shared/common/Input/Input';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLock } from 'react-icons/ai';
import Link from 'next/link';
import {
  LoginSchema,
  LoginSchemaType,
} from '@/App/services/api/schemas/Auth.Schema';
import { useMutation } from 'react-query';
import { signin } from '@/App/services/mutation/auth.mutation';

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate: mutateLogin } = useMutation(signin);

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    mutateLogin(data, {
      onSuccess: (response) => {
        console.log(response);
      },
      onError: () => {},
    });
  };
  return (
    <div className="flex  justify-center items-center bg-white50 h-screen">
      <div className="min-w-[350px]  bg-white rounded-2xl p-5 shadow-defaultShadow ">
        <p className="text-center font-bold text-2xl text-lightBlack">Login</p>
        <form
          className="flex flex-col gap-4 my-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <CustomInput
              isRequired={true}
              register={register}
              name="email"
              type="email"
              label="Email"
              icon={
                <HiOutlineMail
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              }
              placeholder="example_email@email.com"
            />
            <p className="mt-2 text-xs text-red-600" id="email-error">
              {errors.email && <span>{errors.email?.message}</span>}
            </p>
          </div>
          <div>
            <CustomInput
              inputOptions={{
                minLength: {
                  value: 8,
                  message: 'Password needs to be longer than 8',
                },
              }}
              isRequired={true}
              register={register}
              type="password"
              name="password"
              label="Password"
              icon={
                <AiOutlineLock
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              }
              placeholder="password"
            />
            <p className="mt-2 text-xs text-red-600" id="email-error">
              {errors.password && <span>{errors.password?.message}</span>}
            </p>
          </div>
          <Link href="signup">
            <span className="text-xs underline cursor-pointer">
              Don't have an account? Register here
            </span>
          </Link>
          <CustomButton isSubmit={true}>Login</CustomButton>
        </form>
      </div>
    </div>
  );
}
