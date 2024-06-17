"use client";
import React from "react";

const Form = () => {
  return (
    <div>
      <p>Create Employee</p>

      {/* <form action={createEmployee}> */}
      <form>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="text" name="salary" placeholder="Enter salary" />
        <input type="text" name="age" placeholder="Enter age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
