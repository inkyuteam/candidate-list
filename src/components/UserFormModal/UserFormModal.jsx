import React from "react";
import "./UserFormModal.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const UserFormModal = ({ closeEvent, addEvent }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required"),
      phoneNumber: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      addEvent(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="modal">
      <div className="modal-context">
        <div className="modal-header">
          User information
          <div className="close" onClick={() => closeEvent()}>
            X
          </div>
        </div>
        <div className="modal-body">
          <form onSubmit={formik.handleSubmit}>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="firstName">First Name: </label>
                  </td>
                  <td>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="lastName">Last Name: </label>
                  </td>
                  <td>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="phoneNumber">Phone Number: </label>
                  </td>
                  <td>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <div className="error">{formik.errors.phoneNumber}</div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email">Email Address: </label>
                  </td>
                  <td>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="button-container">
                    <button type="submit">Add user</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};
