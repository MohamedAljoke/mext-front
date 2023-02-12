import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomButton from '@/App/shared/common/Button/Button';
import CustomInput from '@/App/shared/common/Input/Input';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLock } from 'react-icons/ai';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Link from 'next/link';
import { useMutation } from 'react-query';
import { registerService } from '@/App/services/mutation/auth.mutation';
import {
  RegisterSchema,
  RegisterSchemaType,
} from '@/App/services/api/schemas/Auth.Schema';
import { useRouter } from 'next/router';
import { popError } from '@/App/components/PopUp/popError';

export default function Signup() {
  const router = useRouter();
  const { mutate: mutateRegister } = useMutation(registerService);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    mutateRegister(data, {
      onSuccess: (response) => {
        router.push('/signin');
      },
      onError: () => {
        popError('email ou senha incorreto!');
      },
    });
  };
  return (
    <div className="flex  justify-center items-center bg-white50 h-screen">
      <div className="min-w-[350px]  bg-white rounded-2xl p-5 shadow-defaultShadow ">
        <p className="text-center font-bold text-2xl text-lightBlack">
          Register
        </p>
        <form
          className="flex flex-col gap-4 my-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <CustomInput
              isRequired={true}
              register={register}
              type="text"
              name="name"
              label="Name"
              icon={
                <MdOutlinePersonOutline
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              }
              placeholder="example_name"
            />
            <p className="mt-2 text-xs text-red-600" id="email-error">
              {errors.name && <span>{errors.name?.message}</span>}
            </p>
          </div>
          <div>
            <CustomInput
              isRequired={true}
              register={register}
              type="email"
              name="email"
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
              name="password_confirmation"
              label="Password confirmation"
              icon={
                <AiOutlineLock
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              }
              placeholder="password confirmation"
            />
            <p className="mt-2 text-xs text-red-600" id="email-error">
              {errors.password_confirmation && (
                <span>{errors.password_confirmation?.message}</span>
              )}
            </p>
          </div>
          <Link href="signin">
            <span className="text-xs underline cursor-pointer">
              Do you have an account? Login here
            </span>
          </Link>
          <CustomButton isSubmit={true}>Register</CustomButton>
        </form>
      </div>
    </div>
  );
}
