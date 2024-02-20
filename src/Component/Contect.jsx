import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ErrorMessage, Field, Form, Formik, FormikProvider, useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';


const Contect = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().required('subject is required')
  });

  const { values, errors, handleBlur, handleChange, onSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (value) => {
      console.log("hemraj");
    }
  })

  return (
    <div>
      <Box>
        <Box>
          <Box>
            <Box sx={{
              marginTop: "40px",
              padding: "10px 20px",
              maxWidth: "100%"
            }}>
              <Box sx={{
                width: "500px",
                background: "#d6f0fa",
                padding: "20px 30px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 30px",
                margin: "0px auto",
                borderTop: "5px solid #fed700",
                borderRadius: "5px"
              }}>
                <Box sx={{ textAlign: "left" }}><Typography variant='h5' sx={{ fontWeight: "800", color: "#bc3232" }}>#CONTACT</Typography></Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Formik>
                    <Form onSubmit={onSubmit}>
                      <Box sx={{ display: "flex", margin: "20px", justifyContent: "space-between" }}>
                        <label htmlFor="name" style={{ color: "black", fontSize: "20px" , marginTop:"10px"}}>Name</label>
                        <Field type="text" name="name"  placeholder="Name..." value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur} style={{
                            width: "300px", border: "none",
                            outline: "none",
                            background: "none",
                            borderBottom: "2px solid #8a8a8a",
                            padding: "10px 20px"
                          }} />
                      </Box>
                      <Box sx={{ display: "flex", margin: "20px", justifyContent: "space-between" }}>
                        <label htmlFor="email" style={{ color: "black", fontSize: "20px" , marginTop:"10px"}}>Email </label>
                        <Field type="text" name="email" placeholder="Email...." value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur} style={{
                            width: "300px", border: "none",
                            outline: "none",
                            background: "none",
                            borderBottom: "2px solid #8a8a8a",
                            padding: "10px 20px"
                          }} />
                      </Box>
                      <Box sx={{ display: "flex", margin: "20px", justifyContent: "space-between" }}>
                        <label htmlFor="subject" style={{ color: "black", fontSize: "20px", marginTop:"10px"}}>Subject </label>
                        <Field type="text" name="subject" placeholder="Subject..." value={values.subject}
                          onChange={handleChange}
                          onBlur={handleBlur} style={{
                            width: "300px", border: "none",
                            outline: "none",
                            background: "none",
                            borderBottom: "2px solid #8a8a8a",
                            padding: "10px 20px"
                          }} />
                      </Box>
                      <Box sx={{ display: "flex", margin: "20px", justifyContent: "space-between" }}>
                        <label htmlFor="message" style={{ color: "black", fontSize: "20px", marginTop:"10px" }}>Message</label>
                        <Field as="textarea" name="message" placeholder="Message..." value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur} style={{
                            width: "300px", border: "none",
                            outline: "none",
                            background: "none",
                            borderBottom: "2px solid #8a8a8a",
                            padding: "10px 20px"
                          }} />
                      </Box>

                      <Button style={{
                        marginTop: "20px",
                        marginLeft: "30px",
                        padding: "10px 30px",
                        color: "#232323",
                        border: "none",
                        outline: "none",
                        background: "none",
                        background: "#fed700",
                        cursor: "pointer"
                      }}>
                        Submit Now
                      </Button>
                    </Form>
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div >
  )
}

export default Contect
