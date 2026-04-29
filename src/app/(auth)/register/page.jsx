 'use client'

import { authClient } from "@/lib/auth-client";
import { Input, Label, TextField } from "@heroui/react";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const RegisterPage = () =>{ 
   const [isShowPassword,setIsShowpassword]=useState(false)
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const {name,email,photo,password}=data
    

    const { data:res, error } = await authClient.signUp.email({
    name: name, // required
    email:email, // required
    password:password, // required
    image: photo,
    callbackURL: "/"
});

 if(res){
  alert("Signup Successfull")
 }
 if(error){
  alert(" this emails is already used plz change your email")
 }
  };

  return (
    <div className="w-4/12 mx-auto mt-10 bg-base-200 p-6 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Login Your Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Email */}
        <TextField className="w-full mb-4">
          <Label>Your Name</Label>
          <Input
            type="text"
            placeholder="Enter your Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </TextField>
        <TextField className="w-full mb-4">
          <Label>Photo Url</Label>
          <Input
            type="text"
            placeholder="Enter your Photo Url"
            {...register("photo", {
              required: "Photo is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </TextField>
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
        <TextField className="w-full mb-4 relative">
          <Label>Password</Label>
          <Input
            type={isShowPassword ? "text" :"password"}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
            })}

          />
          <span  className="pointer absolute right-3 top-8" onClick={()=>setIsShowpassword(!isShowPassword)}>{isShowPassword ? <BsEye></BsEye>: <BsEyeSlash></BsEyeSlash>}</span>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </TextField>
           <p className="flex items-center gap-2"> <MdOutlineCheckBoxOutlineBlank />Accept Term & Conditions</p>

        {/* Button */}
        <button
          type="submit"
          className="w-full btn btn-primary mt-4"
        >
          Register
        </button>
     
      </form>
    </div>)
};

export default RegisterPage