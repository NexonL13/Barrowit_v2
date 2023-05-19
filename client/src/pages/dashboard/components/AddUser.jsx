import { useState } from 'react'
import {Formik, Form} from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { RiAdminLine } from 'react-icons/ri'
import * as Yup from 'yup'
import axios from 'axios'
import FormikControl from '../../forms/formik/FormikControl'
import WarningError from '../../forms/formik/components/WarningError'

const AddUser = () => {
  const navigate = useNavigate()
  const [exist,setExist] = useState(false)

  const dropdownOptions = [
    {key:"Chairman", value: "Chairman"},
    {key:"Property Custodian", value: "Property Custodian"},
    {key:"Admin Clerk", value: "Admin Clerk"},
    {key:"Secretary", value: "Secretary"},
    {key:"Super Admin", value: "Super Admin"},
  ]

  const initialValues= {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    position: ""
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is a required field'),
    middleName: Yup.string().min(2, "Must be at least 2 characters").nullable(true),
    lastName: Yup.string().required('Last Name is a required field'),
    email: Yup.string().email('Must be a valid email').required('Email is a required field'),
    password: Yup.string().min(6, 'Must be at least 6 characters').max(20, 'Must be at most 20 characters').required('Password is a required field'),
    confirm_password: Yup.mixed().oneOf([Yup.ref('password'), null], 'Must match a password').required('Confirm password is a required field'),
    position: Yup.string().required("Position is a required field").notOneOf([""], "Select a valid position")
  })
  const onSubmit = async (values) => {
    await axios.post("http://localhost:3000/auth/register", values).then((res)=> {
      if(res.data.error) {
        setExist(true)
      }
    })
  };


  return (
    <section className="bg-gray-100">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-24">
    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
         validateOnBlur={false}
         validateOnChange={false}
        >
        <Form className="mt-8 grid grid-cols-6 gap-6">
        <div className={`${
          exist ? "visible" : "hidden"} col-span-6 sm:col-span-6`}>
        <WarningError warningTitle="Account Already Exist" warningText="This account is already used."/>
        </div>
          <div className="col-span-6 sm:col-span-2">
          <FormikControl
                control="input"
                type="text"
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
              />
          </div>

          <div className="col-span-6 sm:col-span-2 ">
          <FormikControl
                control="input"
                type="text"
                label="Middle Name"
                name="middleName"
                placeholder="M.I"
              />
          </div>

          <div className="col-span-6 sm:col-span-2">
          <FormikControl
                control="input"
                type="text"
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
              />
          </div>

          <div className="col-span-6">
          <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                placeholder="Enter an email"
              />
          </div>

          <div className="col-span-6 sm:col-span-3">
          <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
          </div>

          <div className="col-span-6 sm:col-span-3">
          <FormikControl
                control="input"
                type="password"
                label="Confirm Password"
                name="confirm_password"
              />
          </div>
          <div className="col-span-6">
          <FormikControl
            control="select"
            label="Barangay Position"
            name="position"
            options={dropdownOptions}
            placeholder="Select a position"
          />
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4 sm:px-auto ">
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border border-green-400 bg-green-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-400 focus:outline-none focus:ring active:text-green-500"
              >
              Create an account
            </button>
          </div>
        </Form>
        </Formik>
      </div>
    </main>
  </div>
</section>
  )
}

export default AddUser