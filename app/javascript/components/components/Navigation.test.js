import React from "react"

// import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
  })

  it("has clickable links for a registered user", () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={true}/>
      </BrowserRouter>
    )
    // const myApartments = userEvent.click(screen.getByRole("link", {
    //   name: /my listings/i
    // }))
    const myApartments = screen.getByText("My Apartments")
    expect(myApartments).toBeInTheDocument()
  })
})