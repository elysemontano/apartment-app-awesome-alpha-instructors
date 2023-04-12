import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const ApartmentNew = ({ current_user, createApartment }) => {
  const navigate = useNavigate()
  const [myApartment, setMyApartment] = useState({
    address:"",
    city:"",
    state:"",
    square_footage:"",
    price:"",
    utilities:"",
    pets:"",
    image:"",
    user_id: current_user?.id
  })

  const handleChange = (e) => {
    setMyApartment({...myApartment, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createApartment(myApartment)
    navigate("/apartmentindex")
  }

  return (
    <>
      <h1>Create a Listing</h1>
      <Form>
        <FormGroup>
          <Label for="address">
            Address
          </Label>
          <Input
            id="address"
            name="address"
            placeholder="What is the address?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">
            City
          </Label>
          <Input
            id="city"
            name="city"
            placeholder="What is the city?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">
            State
          </Label>
          <Input
            id="state"
            name="state"
            placeholder="State"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">
            Bedrooms
          </Label>
          <Input
            name="bedrooms"
            placeholder="bedrooms"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">
            Bathrooms
          </Label>
          <Input
            name="bathrooms"
            placeholder="Bathrooms"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="square_footage">
            Square Footage
          </Label>
          <Input
            name="square_footage"
            placeholder="How big is the apartment?"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">
            Price
          </Label>
          <Input
            name="price"
            placeholder="Price"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="utilities">
            Utilities
          </Label>
          <Input
            name="utilities"
            placeholder="Utilities"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pets">
            Pets
          </Label>
          <Input
            name="pets"
            placeholder="Pets"
            type="checkbox"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            name="image"
            placeholder="Place an image"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Create Listing
        </Button>
      </Form>
    </>
  )
}

export default ApartmentNew