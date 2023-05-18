import { TextField, TextFieldProps } from "@mui/material";
import { FieldProps } from "formik";
import React from "react";

const MyField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field
}) => {
  return (
    <div>
      <TextField placeholder={placeholder} {...field} />
    </div>
  );
};

export default MyField;
