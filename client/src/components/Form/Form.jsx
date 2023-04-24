import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import axios from "axios";

import { validate } from "../../helpers/helpers";

const Form = ({ formName, fields, button, action, validator }) => {
  const formFields = Object.keys(fields);
  const initialState = Object.entries(fields).reduce((acc, ele) => {
    acc[ele[0]] = ele[1]["value"];
    return acc;
  }, {});

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validate({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));

    if (Object.keys(errors).length) {
      alert("Debe llenar todos los campos");
    } else {
      axios
        .post("http://localhost:3001/pokemons", data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={style.wrapper}>
      <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
        <h1>{formName}</h1>
        <div className={`${style.content} ${formFields.length % 2 !== 0 && style.contentOdd}`}>
          {formFields.map((field) => {
            return (
              <div key={field} className={style.field}>
                <label className={`${style.formFieldText} ${errors[field] && style.danger}`}>
                  {errors[field] || `${fields[field].name}`}
                </label>
                <input
                  name={`${field}`}
                  type={fields[field].type}
                  onChange={(e) => handleInputChange(e)}
                  value={data[fields[field]]}
                  className={`${style.formFieldInput} ${errors[field] && style.warning}`}
                />
              </div>
            );
          })}
        </div>
        <button className={style.formButton} type={button.type}>
          {button.value}
        </button>
      </form>
    </div>
  );
};

export default Form;
