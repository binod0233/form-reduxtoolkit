import React, { useState } from "react";

function Test() {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    console.log("base64", base64);

    setBaseImage(base64);
  };

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

  return (
    <div className="Test">
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <br></br>
      <img src={baseImage} alt="ss" height="200px" />
    </div>
  );
}

export default Test;

// const validationSchema = object().shape({
//     file: mixed()
//       .test('fileSize', 'File too large', (value) => value === null || (value && value.size <= FILE_SIZE))
//       .test(
//         'fileFormat',
//         'Unsupported file type',
//         (value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
//       )
//   })

//     const formik = useFormik({
//       initialValues: {
//         file: null
//         // More values here
//       },
//   // More code here

// import React, { useEffect, useState } from "react";
// import { fetchUserCategory, addUserCategory } from "../redux";
// import { useSelector, useDispatch } from "react-redux";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const SignUpSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Must be longer than 2 characters")
//     .max(10, "Name is too long")
//     .required("Required"),
//   price: Yup.string()
//     .min(2, "Must be longer than 2 characters")
//     .max(10, "Name is too long")
//     .required("Required"),
//   email: Yup.string().email("Invalid email address"),
//   file: Yup.mixed(),
//   //   password: Yup.string().required("No password provided."),
//   //   passwordConfirmation: Yup.string().oneOf(
//   //     [Yup.ref("password"), null],
//   //     "Passwords must match"
//   //   ),
// });

// const UserComponent = () => {
//   const [baseImage, setBaseImage] = useState(null);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const interval = setInterval(() => {
//       dispatch(fetchUserCategory());
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [dispatch]);

//   const allUserCategory = useSelector((state) => state.user.userCategory);
//   var filedata = allUserCategory.map((item) => {
//     return (
//       <div key={item.id}>
//         <img src={item.price} alt="req" height="200px" />

//         <p>para={item.price}</p>
//       </div>
//     );
//   });

//   console.log(allUserCategory);
//   return (
//     <div className="UserComponent">
//       <h1>UserComponent</h1>
//       {filedata}

//       <h1>Sign up</h1>
//       <Formik
//         initialValues={{
//           name: "",
//           price: "",
//           image: null,
//           email: "",
//           password: "",
//           passwordConfirmation: "",
//         }}
//         validationSchema={SignUpSchema}
//         onSubmit={async (values) => {
//           var file = values.Image;
//           const convertBase64 = (file) => {
//             return new Promise((resolve, reject) => {
//               const fileReader = new FileReader();
//               fileReader.readAsDataURL(file);

//               fileReader.onload = () => {
//                 resolve(fileReader.result);
//               };

//               fileReader.onerror = (error) => {
//                 reject(error);
//               };
//             });
//           };
//           console.log("Sign up", values);
//           const base64 = await convertBase64(file);
//           dispatch(addUserCategory(values.name, base64));
//           console.log("base64sssssss", base64);
//         }}
//         render={(formProps) => (
//           <Form>
//             <label htmlFor="name">Name</label>
//             <Field name="name" placeholder="Binod" type="text" />

//             <ErrorMessage name="name" component="div" className="field-error" />
//             <br />
//             <br />

//             <label htmlFor="price"> price</label>
//             <Field name="price" placeholder="Sharma" type="number" />
//             <ErrorMessage
//               name="price"
//               component="div"
//               className="field-error"
//             />
//             <br />
//             <br />

//             <label htmlFor="image">Image</label>
//             <input
//               name="image"
//               placeholder="binod0233"
//               type="file"
//               onChange={(event) => {
//                 formProps.setFieldValue("Image", event.target.files[0]);
//               }}
//             />
//             <ErrorMessage
//               name="image"
//               component="div"
//               className="field-error"
//             />
//             <br />
//             <br />

//             <label htmlFor="email">Email</label>
//             <Field name="email" placeholder="binod@gmail.com" type="email" />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="field-error"
//             />
//             <br />
//             <br />
//             <label htmlFor="password">Password</label>
//             <Field name="password" placeholder="password" type="password" />
//             <ErrorMessage
//               name="password"
//               component="div"
//               className="field-error"
//             />
//             <br />
//             <br />

//             <label htmlFor="passwordConfirmation">Confirm Password</label>
//             <Field
//               name="passwordConfirmation"
//               placeholder="password"
//               type="password"
//             />
//             <ErrorMessage
//               name="passwordConfirmation"
//               component="div"
//               className="field-error"
//             />
//             <br />
//             <br />
//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       />
//     </div>
//   );
// };
// export default UserComponent;
