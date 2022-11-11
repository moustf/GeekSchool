import * as Yup from "yup";

const userSchema = Yup.object().shape({
  password: Yup.string().min(8).max(20).required("password is required"),
  confPassword: Yup.ref("password"),
  email: Yup.string().email().required("email is required"),
  name: Yup.string().required("name is required"),
});

const parentTeacherUserSchema = Yup.object().shape({
  location: Yup.string().required("location is required"),
  mobile: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});

export { userSchema, parentTeacherUserSchema };
