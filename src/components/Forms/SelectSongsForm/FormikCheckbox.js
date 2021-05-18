import React from "react";
import { Field } from "formik";

const FormikCheckbox = ({ className, valid, error, ...props }) => (
  <Field type='checkbox' className={className} {...props} />
);

export default FormikCheckbox;
