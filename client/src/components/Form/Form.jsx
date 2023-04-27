import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import axios from "axios";

import { validate } from "../../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = ({ formName, fields, button, action, validator }) => {
  const formFields = Object.keys(fields);
  const initialState = Object.entries(fields).reduce((acc, ele) => {
    acc[ele[0]] = ele[1]["value"];
    return acc;
  }, {});
  const navigate = useNavigate();

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validator({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validator(data));
    if (Object.keys(errors).length) {
      alert(
        `${Object.keys(errors)
          .map((key) => errors[key])
          .join("\n")}`
      );
    } else {
      dispatch(action(data))
        .then((res) => {
          console.log(res);
          if (res.response.status === 200) {
            navigate(`/pokemons`);
          }
        })
        .catch((e) => alert(e.message));
    }
  };

  useEffect(() => {
    setErrors(validator(data));
  }, []);

  return (
    <div className={style.wrapper}>
      <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
        <h1>{formName}</h1>
        <div className={`${style.content} ${formFields.length % 2 !== 0 && style.contentOdd}`}>
          {formFields.map((field) => {
            return (
              <div key={field} className={style.field}>
                <input
                  name={`${field}`}
                  type={fields[field].type}
                  onChange={(e) => handleInputChange(e)}
                  value={data[fields[field]]}
                  className={`${style.formFieldInput} ${errors[field] && style.warning} `}
                  placeholder={errors[field] || fields[field].name}
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
