import { useForm } from 'react-hook-form'
import React from 'react'
import './index.css'

type InputData = {
  firstName: string
  lastName: string
  phone: string
}

type FormArgs = {
  onSubmit?: (data: InputData) => void
}

export const CreateForm = (props: FormArgs) => {
  const {register, handleSubmit} = useForm()
  const handleOnSubmit = (data) => {
    props.onSubmit?.(data)
  }
  return <form className='input-form' onSubmit={handleSubmit(handleOnSubmit)}>
    <div className='field'>
      <label>First Name</label>
      <input {...register("firstName", { required: true })} />
    </div>
    <div className='field'>
      <label>Last Name</label>
      <input {...register("lastName", { required: true })} />
    </div>
    <div className='field'>
      <label>Phone</label>
      <input {...register("phone", { required: true })} />
      </div>
    <button type='submit'>
      Submit
    </button>
  </form>
}