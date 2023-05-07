import React from 'react'

const AddressForm = () => {
  return (
    <div>
      <input className="addressInput userName" type="text" placeholder="Name" />
      <input className="addressInput address" type="text" placeholder="Address" />
      <input className="addressInput city" type="text" placeholder="City" />
      <input className="addressInput state" type="text" placeholder="State" />
      <input className="addressInput zipCode" type="text" placeholder="Zip code" />
    </div>
  )
}

export default AddressForm