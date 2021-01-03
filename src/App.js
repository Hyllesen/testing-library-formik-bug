import React from "react";
import { useFormik } from "formik";

export default function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          data-testid="firstName"
          value={values.firstName}
          onChange={handleChange}
          id="firstName"
          type="text"
        />
      </form>
    </div>
  );
}
