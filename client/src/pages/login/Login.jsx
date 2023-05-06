import React, { useState } from 'react'
import {Formik, Form} from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import FormikControl from '../forms/formik/FormikControl'
import { RiAdminLine } from 'react-icons/ri'
import * as Yup from 'yup'
import axios from 'axios'
import WarningError from '../forms/formik/components/WarningError'

const Login = () => {
  const navigate = useNavigate()
  const [incorrect, setIncorrect] = useState(false)
  const initialValues= {
    email: "",
    password: ""
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Must be a valid email').required('Email is a required field'),
    password: Yup.string().min(6, 'Must be at least 6 characters').max(20, 'Must be at most 20 characters').required('Password is a required field')
  })
  const onSubmit = async (values) => {
    await axios.post("http://localhost:3000/auth/login", values).then((res)=> {
      if(res.data.error) {
        setIncorrect(true)
      }else {
        navigate('/')
      }
    })
  };


  return (
    <section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section
      className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Night"
        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <Link className="block text-white max-w-max" to="/">
          <span className="sr-only">Home</span>
          <div className='text-5xl'>
          <RiAdminLine/>
          </div>
          
        </Link>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Admin Login
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>
      </div>
    </section>

    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <Link
            className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
            to="/"
          >
            <span className="sr-only">Home</span>
            <div className='text-5xl'>
          <RiAdminLine/>
          </div>
          </Link>

          <h1
            className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
          >
            Admin Registration
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam dolorum aliquam, quibusdam aperiam voluptatum.
          </p>
        </div>
        <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
         validateOnBlur={false}
         validateOnChange={false}
        >
        <Form className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-6" style={{display: !incorrect && 'none'}}>
        <WarningError warningTitle="Incorrect Account" warningText="Incorrect Account Credential"/>
        </div>
          <div className="col-span-6">
          <FormikControl
                control="input"
                type="text"
                label="Email"
                name="email"
                placeholder="Enter an email"
              />
          </div>

          <div className="col-span-6 sm:col-span-6">
          <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
          </div>
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Login
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Doesn't have an account?
              <Link to="/login" className="text-gray-700 underline ps-1">Register</Link>.
            </p>
          </div>
        </Form>
        </Formik>
      </div>
    </main>
  </div>
</section>
  )
}

export default Login