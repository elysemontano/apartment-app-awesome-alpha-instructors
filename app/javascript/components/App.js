import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import ProtectedIndex from "./pages/ProtectedIndex"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentindex" element={<ApartmentIndex />} />
          <Route path="/apartmentshow" element={<ApartmentShow />} />
          <Route path="/apartmentnew" element={<ApartmentNew />} />
          <Route path="/apartmentedit" element={<ApartmentEdit />} />
          <Route path="/myapartments" element={<ProtectedIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App