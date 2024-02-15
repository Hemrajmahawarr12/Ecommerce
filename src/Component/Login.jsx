import React from 'react';
import { Formik, Form, ErrorMessage, useFormik } from 'formik'; // Removed input import
import * as Yup from 'yup';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from './FavSlice';


const Login = () => {
  const dispatch = useDispatch();
  // const newLogin = useSelector((state)=>state.fav.login)
  // console.log(newLogin);

  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      email: 'kminchelle@qq.com',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    })
  })
    .then(res => res.json())
    .then(console.log);

  const initialValues1 = {
    username: '',
    email: '',
    password: ''
  }
  const validationSchema1 = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });
  const initialValues = {
    email: '',
    password: ''
  }


  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  // const onSubmit1 = (values) => {
  //     console.log(values);
  // };
  const onSubmit = (values) => {
    // console.log(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (value1) => {
      console.log("🚀 ~ Login ~ value1:", value1)
      // dispatch(login(value1))

    }
  });
  const hemraj = useFormik({
    initialValues: initialValues1,
    validationSchema: validationSchema1,
    onSubmit: (value2) => {
      console.log("🚀 ~ Login ~ value2:", value2)

    }
  });

  return (
    <Formik>
      <Box className="container">
        <Box className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <Box className="login">
            <Form className="form" onSubmit={formik.handleSubmit}>
              <label htmlFor="chk" aria-hidden="true">Log in</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email && formik.touched.email && (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              )}

              {
                //   (Errmsg) => {
                //       console.log("🚀 ~ Login ~ Errmsg:", Errmsg)
                //       return 
                //   }
                //   <div className="error" style={{color:"red"}}>{Errmsg}</div>

              }

              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                {...formik.getFieldProps('password')}
              />
              {formik.errors.password && formik.touched.password && (
                <p style={{ color: "red" }}>{formik.errors.password}</p>
              )}
              <Button type="submit">Log in</Button>
            </Form>
          </Box>
          <Box className="register">
            <Form className="form" onSubmit={hemraj.handleSubmit}>
              <label htmlFor="chk" aria-hidden="true">Register</label>
              <input className="input" type="text" name="username" placeholder="Username" {...hemraj.getFieldProps('username')} />
              {hemraj.errors.username && hemraj.touched.username && (
                <p style={{ color: "red" }}>{hemraj.errors.username}</p>
              )}
              <input className="input" type="email" name="email" placeholder="Email" {...hemraj.getFieldProps('email')} />
              {hemraj.errors.email && hemraj.touched.email && (
                <p style={{ color: "red" }}>{hemraj.errors.email}</p>
              )}
              <input className="input" type="password" name="password" placeholder="Password" {...hemraj.getFieldProps('password')} />
              {hemraj.errors.password && hemraj.touched.password && (
                <p style={{ color: "red" }}>{hemraj.errors.password}</p>
              )}
              <Button type="submit">Register</Button>
            </Form>
          </Box>
        </Box>
      </Box>
    </Formik>
  )
}

export default Login;