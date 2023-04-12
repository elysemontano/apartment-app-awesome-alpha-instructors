import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {Card, CardBody, Button, CardTitle, CardSubtitle} from "reactstrap"

const ApartmentShow = ({apartments}) => {
  let {id} = useParams()
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)

  return (
    <>
      <h1>Apartment</h1>
      {currentApartment &&
        <Card
          style={{
            width: '18rem'
          }}
        >
          <img
            alt={currentApartment.address}
            src={currentApartment.image}
          />
          <CardBody>
            <CardTitle tag="h5">
              {currentApartment.address},{currentApartment.city}, {currentApartment.state}
            </CardTitle>
            <CardSubtitle>
              Bedrooms: {currentApartment.bedrooms}, Bathrooms:
            {currentApartment.bathrooms}
            </CardSubtitle>
            <CardSubtitle>
              Price: {currentApartment.price}
            </CardSubtitle>
          </CardBody>
          <Button>
            <NavLink to={"/apartmentindex"}>
              Back to index
            </NavLink>
          </Button>
        </Card>
      }
    </>
  )
}

export default ApartmentShow