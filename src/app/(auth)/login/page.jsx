 'use client'

import { Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
  

  
      const { data:res, error } = await authClient.signUp.email({
     
      email:data.email, // required
      password:data.password, // required
      rememberMe:true,
      callbackURL: "/"
  });
  
   if(res){
    alert("Signup Successfull")
   }
   if(error){
    alert(" this emails is already used plz change your email")
   }
  }
   const [isShowPassword,setIsShowpassword]=useState(false)
  return (
    <div className="w-4/12 mx-auto mt-10 bg-base-200 p-6 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Login Your Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Email */}
        <TextField className="w-full mb-4">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </TextField>

        {/* Password */}
        <TextField className="w-full mb-4 relative ">
          <Label>Password</Label>
          <Input
            type={ isShowPassword ? "text": "password"}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
            })}
          />
         <span onClick={()=>setIsShowpassword(!isShowPassword)} className="absolute right-2 top-8"> 
          { isShowPassword? <BsEye></BsEye>:<BsEyeSlash></BsEyeSlash>}
          </span>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </TextField>

        {/* Button */}
        <button
          type="submit"
          className="w-full btn btn-primary mt-4"
        >
         <Link href={"/"}> Login</Link>
        </button>
        <p className="text-center mt-4">Dont Have an Account ? <Link href={"/register"} className="text-red-500">Resgister</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;
