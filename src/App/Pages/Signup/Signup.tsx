import CustomButton from '@/App/shared/common/Button/Button';
import CustomInput from '@/App/shared/common/Input/Input';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLock } from 'react-icons/ai';
import { MdOutlinePersonOutline } from 'react-icons/md';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="flex  justify-center items-center bg-white50 h-screen">
      <div className="min-w-[350px]  bg-white rounded-2xl p-5 shadow-defaultShadow ">
        <p className="text-center font-bold text-2xl text-lightBlack">
          Register
        </p>
        <form className="flex flex-col gap-4 my-8">
          <CustomInput
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
          <CustomInput
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
          <CustomInput
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
          <CustomInput
            type="password"
            name="password_confirmation"
            label="Password confirmation"
            icon={
              <AiOutlineLock
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            }
            placeholder="password"
          />
          {/* <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="message">
              Message
            </label>
          </div> */}
          <Link href="signin">
            <span className="text-xs underline cursor-pointer">
              Do you have an account? Login here
            </span>
          </Link>
          <CustomButton>Register</CustomButton>
        </form>
      </div>
    </div>
  );
}
