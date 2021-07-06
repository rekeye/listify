import React from "react";
import { Field } from "formik";

const FormikField = ({ className, valid, error, ...props }) => (
  <Field className={className} {...props} />
);

export default FormikField;
