import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import WarningError from "../../forms/formik/components/WarningError";
import FormikControl from "../../forms/formik/FormikControl";
import TextError from "../../forms/formik/components/TextError";
import { AiOutlineRollback } from "react-icons/ai"

const AddAsset = () => {
  const navigate = useNavigate();
  const [exist, setExist] = useState(false);
  const [fileName, setFileName] = useState();

  const dropdownOptions = [
    { key: "Item", value: "Item" },
    { key: "Vehicle", value: "Vehicle" },
    { key: "Utility", value: "Utility" },
    { key: "Emergency Kit", value: "Emergency Kit" },
    { key: "Others", value: "Others" },
  ];

  const initialValues = {
    image: "",
    name: "",
    description: "",
    stock: "",
    category: "",
    sponsor: "",
  };

  const MAX_FILE_SIZE = 10 * 1024 * 1024; //10MB

  const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

  function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
  }

  const validationSchema = Yup.object({
    
      image: Yup
          .mixed()
          .required("Image is required")
          .test("is-valid-type", "Not a valid image type",
            value => isValidFileType(value && value.name.toLowerCase(), "image"))
          .test("is-valid-size", "Max allowed size is 10MB",
            value => value && value.size <= MAX_FILE_SIZE),
    name: Yup.string().required("Asset Name is a required field"),
    description: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required(),
    stock: Yup.number()
      .min(1, "Must be at least 1 stock")
      .required("Stock is a required field"),
    category: Yup.string()
      .required("Category is a required field")
      .notOneOf([""], "Select a valid category"),
    sponsor: Yup.string().nullable(true),
  });
  const onSubmit = async (values) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    await axios
      .post("http://localhost:3000/asset/upload", formData)
      .then((res) => {
        if (res.data.error) {
          setExist(true);
        } else {
          navigate("/dashboard/assets");
        }
      });
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-none">
        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
          <div className="flex justify-between">
              <h1 className="text-xl font-light">Add Asset</h1>
              <button onClick={() => navigate(-1)}><AiOutlineRollback className="text-orange-500 text-3xl"/></button>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {(formik) => (
                <Form className="mt-8 grid grid-cols-12 gap-6">
                  <div
                    className={`${exist ? "visible" : "hidden"} col-span-12`}
                  >
                    <WarningError
                      warningTitle="Assest Already Exist"
                      warningText="This assets is already added. Add another asset."
                    />
                  </div>

                  <Field name="image">
                    {() => (
                      <div className="col-span-12 bg-gray-100 rounded-lg shadow-inner h-40">
                        <input
                          type="file"
                          id="image"
                          name="image"
                          accept="image/*"
                          onChange={(e) => {
                            formik.setFieldValue("image", e.target.files[0]);
                            setFileName(e.target.files[0].name);
                          }}
                          className="hidden"
                        />
                        <label
                          htmlFor="image"
                          className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                        >
                          <p className="z-10 text-xs font-light text-center text-gray-500">
                            {fileName
                              ? `${fileName}`
                              : `Drag & Drop your files here`}
                          </p>
                          <svg
                            className="z-10 w-8 h-8 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                          </svg>
                        </label>
                        <ErrorMessage name="image" component={TextError} />
                      </div>
                    )}
                  </Field>

                  <div className="col-span-12">
                    <FormikControl
                      control="input"
                      type="text"
                      label="Asset Name"
                      name="name"
                      placeholder="Enter an asset name"
                    />
                  </div>

                  <div className="col-span-12">
                    <FormikControl
                      control="textarea"
                      type="text"
                      label="Description"
                      name="description"
                      placeholder="Description here..."
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <FormikControl
                      control="input"
                      type="number"
                      label="Stock(s)"
                      name="stock"
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <FormikControl
                      control="select"
                      label="Category"
                      name="category"
                      options={dropdownOptions}
                      placeholder="Select a position"
                    />
                  </div>

                  <div className="col-span-12">
                    <FormikControl
                      control="input"
                      type="text"
                      label="Sponsored by"
                      name="sponsor"
                    />
                  </div>
                  <div className="col-span-12 sm:flex sm:items-center sm:gap-4 sm:px-auto">
                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border border-orange-500 bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-500 focus:outline-none focus:ring active:text-orange-600 w-full"
                    >
                      Add Asset
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AddAsset;
