import React from "react";
import { useForm } from "react-hook-form";
import { Navbar } from '../../components/Navbar'


export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
   
  return (
    <>
      <Navbar />
      <div >
        <h1>Please take our survey, tell us your name and where you're from!</h1>
        </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("location")}>
        <option value="Western US ">western_us</option>
        <option value="Midwestern US">midwestern_us</option>
        <option value="Eastern US">eastern_us</option>
        <option value="Southern US">southern_us</option>
      </select>
      <input type="submit" />
      </form>
    </>
  );
}