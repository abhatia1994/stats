import React, {useState, useEffect} from 'react'
import { ProfileCard } from '../components/profile-card'

export const HomePage = () => {
  const [profiles, setProfiles] = useState<any[]>([])

  const fetchAllProfiles = async () => {
    const response = (await fetch('http://127.0.0.1:5000/all'))
    const data = await response.json()
    setProfiles(data)
  }

  useEffect(() => {
    fetchAllProfiles()
  }, [])

  return (
    <div className="cards">
      <div className='profiles'>
        {profiles?.map(profile => 
          <ProfileCard key={profile._id} profile={{
            name: `${profile.firstName} ${profile.lastName}`,
            phone: profile.phone
          }} />
          )}
      </div>
    </div>
  )
}