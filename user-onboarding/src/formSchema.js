import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required"),
  email: yup.string().email("must be an email").required("email is required"),
  password: yup
    .string()
    .required('password is required')
    .min(6, 'password must be atleast 6 characters'),
  tos: yup
    .string()
    .oneOf(["agree", "decline"], "please select one"),

});
