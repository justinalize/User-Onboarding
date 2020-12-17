import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(3, "name must be 3 chars long"),

  email: yup.string().email("must be an email"),

  password: yup
    .string()
    .required("must be an email")
    .min(6, "password must be min 8 chars long"),
  terms: yup.boolean(),
});