import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateForm} from './components/create-form'
import { ProfileCard } from './components/profile-card'

function App() {
  const [profiles, setProfiles] = useState([])
  const handleInsert = async (data) => {
    const response = (await fetch('http://127.0.0.1:5000/insert', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }))
    const resdata = await response.json()
    fetchAllProfiles()
    console.log({resdata, data})
  }

  const handleDeleteAll = async () => {
    const response = (await fetch('http://127.0.0.1:5000/delete-all'))
    const data = await response.json()
    console.log({data})
  }

  const fetchAllProfiles = async () => {
    const response = (await fetch('http://127.0.0.1:5000/all'))
    const data = await response.json()
    setProfiles(data)
  }

  useEffect(() => {
    fetchAllProfiles()
  }, [])

  console.log({profiles})
  return (
    <>
      <div className="card">
        <CreateForm onSubmit={handleInsert} />
        <div className='profiles'>
          {profiles?.map(profile => 
            <ProfileCard key={profile._id} profile={{
              name: `${profile.firstName} ${profile.lastName}`,
              phone: profile.phone
            }} />
            )}
        </div>

        {/* <button onClick={handleInsert}>
          Call Insert
        </button>
        <button onClick={handleDeleteAll}>
          Delete all records
        </button> */}
      </div>
    </>
  )
}

export default App
