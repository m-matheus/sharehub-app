import React from 'react'
import { urlFor } from '../client'

const Pin = ({ pin: postedBy, image, _id, destination }: { pin: any, image: any, _id: any, destination: any }) => {
  return (
    <div>
      <img src={urlFor(image).width(250).url()} alt="user-post" className="rounded-lg w-full"/>
    </div>
  )
}

export default Pin
