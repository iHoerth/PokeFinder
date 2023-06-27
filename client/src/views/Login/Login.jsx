// import React, { useState, useEffect } from 'react';
// import style from './Form.module.css';
// import axios from 'axios';

// import { validate } from '../../helpers/helpers';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../../redux/actions';

// const formFields = {
//   user: {
//     name: 'Usuario',
//     type: 'text',
//     value: '',
//   },
//   password: {
//     name: 'Contraseña',
//     type: 'text',
//     value: '',
//   },
// };

// const Form = () => {
//   const [data, setData] = useState({ user: '', password: '' });
//   const [errors, setErrors] = useState({ user: '', password: '' });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const validateLogin = () => {};

//   const handleInputChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//     setErrors(validateLogin({ ...data, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors(validateLogin(data));

//     if (Object.keys(errors).length) {
//       alert(
//         `${Object.keys(errors)
//           .map((key) => errors[key])
//           .join('\n')}`
//       );
//     } else {
//       dispatch(action(data))
//         .then((res) => {
//           if (res.response.status === 200) {
//             navigate(`/pokemons`);
//           }
//         })
//         .catch((e) => alert(e.message));
//     }
//   };

//   return (
//     <div className={style.wrapper}>
//       <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
//         <h1>Login</h1>
//         <div className={`${style.content} ${style.contentOdd}`}>
//           {formFields.map((field) => {
//             return (
//               <div key={field} className={style.field}>
//                 <input
//                   name={`${field}`}
//                   type={field.type}
//                   // onChange={(e) => handleInputChange(e)}
//                   value={data[field]}
//                   className={`${style.formFieldInput} ${errors[field] && style.warning} `}
//                   placeholder={errors[field] || field.name}
//                 />

//                 {errors[field] && <div>{errors[field]}</div>}
//               </div>
//             );
//           })}
//         </div>
//         <button className={style.formButton} type={button.type}>
//           {button.value}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
