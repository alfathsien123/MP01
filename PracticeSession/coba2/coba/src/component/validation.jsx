import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.css";

import { Button } from "react-bootstrap";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function formikVal() {
  return (
    <div className="container">
      <div className="register-form">
        <div className="flex">
          <h1 className="signup">Signup</h1>
        </div>
        <div className="">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <strong>First Name</strong>
                <div className="field">
                  <Field name="firstName" className="form form-style" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </div>
                <strong>Last Name</strong>
                <div className="field">
                  <Field name="lastName" className="form form-style" />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </div>
                <strong>E-mail</strong>
                <div className="field">
                  <Field
                    name="email"
                    type="email"
                    className="form form-style"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div className="flex">
                  {/* <button type="submit">Submit</button> */}
                  <Button variant="primary" style={{ marginTop: "10px" }}>
                    Primary
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default formikVal;
