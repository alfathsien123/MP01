import React from "react";
import { Formik, Form, Field } from "formik";

const NestedExample = () => (
  <div>
    <h1>Social Profiles</h1>
    <Formik
      initialValues={{
        social: {
          facebook: "",
          twitter: "",
        },
      }}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
        const dataFacebook = values.social.facebook;
        const dataTwitter = values.social.twitter;
        console.log(dataFacebook, dataTwitter);
      }}
    >
      <Form>
        <Field name="social.facebook" />
        <Field name="social.twitter" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default NestedExample;
