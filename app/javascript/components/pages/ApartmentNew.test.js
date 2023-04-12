import React from "react"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ApartmentNew from "./ApartmentNew"

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    const current_user ={
      email: "test@testing.com",
      password: "testing123",
      id: 1
    }

    // const userApartment = [
    //   {
    //     id:1, bedrooms: 5, bathrooms: 1.5, address: '123 fourth street', city: 'Miami', state: 'FL', square_footage: 600, price: 300000, utilities: 'washer, dryer, gas, and electric', pets: true, image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', user_id: 1
    //   }
    // ]
    render(
      <BrowserRouter>
        <ApartmentNew current_user={current_user}/>
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {})
  it("has a form for address", () => {
    // screen.logTestingPlaygroundURL()
    const apartments = screen.getByRole('textbox', {
      name: /address/i
    })
    expect(apartments).toBeInTheDocument()
  })
})