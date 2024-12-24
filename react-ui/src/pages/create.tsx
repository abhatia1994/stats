import React from 'react';
import {CreateForm} from '../components/create-form'

export const CreatePage = () => {
  const handleInsert = async (data) => {
    const response = (await fetch('http://127.0.0.1:5000/insert', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }))
    const resdata = await response.json()
    // fetchAllProfiles()
    console.log({resdata, data})
  }

  return <CreateForm onSubmit={handleInsert} />
}