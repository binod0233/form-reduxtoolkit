import React from "react";
import { addUserCategory, updateUserCategory } from "../redux";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Paper from "@mui/material/Paper";
import { Button, Typography, Grid } from "@mui/material";

const SignUpSchema = Yup.object().shape({
  layout: Yup.string().required("Required"),
  name: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(10, "Name is too long")
    .required("Required"),
  capacity: Yup.number().required("A  number is required"),
});
const FormContainer = (props) => {
  const dispatch = useDispatch();

  if (props.data != null) var mode = "Update Table";
  else mode = "Create Table";

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Paper elevation={2}>
          <Typography
            variant="h6"
            component="h2"
            style={{
              textAlign: "left",
            }}
          >
            {mode}
          </Typography>
          <hr style={{ margin: "20px" }} />
          <Formik
            initialValues={{
              layout: "",
              name: "",
              image: null,
              capacity: NaN,
              status: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={async (values, { resetForm }) => {
              var file = values.Image;
              resetForm({ values: "" });
              const convertBase64 = (file) => {
                return new Promise((resolve, reject) => {
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(file);

                  fileReader.onload = () => {
                    resolve(fileReader.result);
                  };

                  fileReader.onerror = (error) => {
                    reject(error);
                  };
                });
              };
              console.log("Sign up", values);
              const base64 = await convertBase64(file);
              if (props.data != null) {
                dispatch(
                  updateUserCategory(
                    props.data,
                    values.layout,
                    values.name,
                    values.capacity,
                    values.status,
                    base64
                  )
                );
                props.data = null;
              } else {
                dispatch(
                  addUserCategory(
                    values.layout,
                    values.name,
                    values.capacity,
                    values.status,
                    base64
                  )
                );
                window.location.reload(false);
              }
              console.log("base64sssssss", base64);
            }}
            render={(formProps) => (
              <Form component={Paper}>
                <label htmlFor="layout">Layout: </label>
                <Field
                  name="layout"
                  placeholder="Binod"
                  component="select"
                  style={{
                    width: "25%",
                    boxSizing: "boarderBox",
                    padding: "10px 16px",
                    margin: "5px 0px",
                  }}
                >
                  <option value="">Select Layout</option>

                  <option value="L1">Layout 1</option>
                  <option value="L2">Layout 2</option>
                  <option value="L3">Layout 3</option>
                </Field>

                <ErrorMessage
                  name="layout"
                  component="div"
                  className="field-error"
                />
                <br />

                <label htmlFor="name"> Name:</label>
                <Field
                  name="name"
                  placeholder="Binod"
                  type="name"
                  style={{
                    width: "25%",
                    boxSizing: "boarderBox",
                    padding: "10px 16px",
                    margin: "5px 0px",
                  }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="field-error"
                />

                <br />

                <label htmlFor="capacity">Capacity:</label>
                <Field
                  name="capacity"
                  placeholder="123"
                  type="number"
                  style={{
                    width: "25%",
                    boxSizing: "boarderBox",
                    padding: "10px 16px",
                    margin: "5px 0px",
                  }}
                />
                <ErrorMessage
                  name="capacity"
                  component="div"
                  className="field-error"
                />
                <br />
                <label htmlFor="status">Status:</label>
                <Field
                  name="status"
                  placeholder="status"
                  type="checkbox"
                  style={{
                    width: "25%",
                    boxSizing: "boarderBox",
                    padding: "10px 16px",
                    margin: "5px 0px",
                  }}
                />
                <ErrorMessage
                  name="status"
                  component="div"
                  className="field-error"
                />
                <br />

                <label htmlFor="image">Image:</label>
                <input
                  name="image"
                  placeholder="binod0233"
                  type="file"
                  style={{
                    width: "25%",
                    boxSizing: "boarderBox",
                    padding: "10px 16px",
                    margin: "5px 0px",
                  }}
                  onChange={(event) => {
                    formProps.setFieldValue("Image", event.target.files[0]);
                  }}
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="field-error"
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  style={{ margin: "20px" }}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => window.location.reload(false)}
                >
                  Cancel
                </Button>
              </Form>
            )}
          />
        </Paper>
      </Grid>
    </div>
  );
};

export default FormContainer;
