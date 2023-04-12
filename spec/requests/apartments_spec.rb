require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let (:user) {User.create email: 'elyse@testing.com', password: 'test123', password_confirmation: 'test123'}
  describe "GET /index" do
    it "gets a list of apartments" do 
      user.apartments.create(bedrooms: 5, bathrooms: 1.5, address: '123 fourth street', city: 'Miami', state: 'FL', square_footage: 600, price: 300000, utilities: 'washer, dryer, gas, and electric', pets: true, image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')

      get '/apartments'
      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1
    end
  end

  describe "POST/create" do 
    it "creates an apartment" do 
      apartment_params = {
        apartment: {
          bedrooms: 5, bathrooms: 1.5, address: '123 fourth street', city: 'Miami', state: 'FL', square_footage: 600, price: 300000, utilities: 'washer, dryer, gas, and electric', pets: true, image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', user_id: user.id
        }
      }

      post '/apartments', params: apartment_params

      expect(response).to have_http_status(200)
      apartment = Apartment.first
      expect(apartment.address).to eq '123 fourth street'
    end
  end

  it "does not create an apartment without an address" do 
    apartment_params = {
        apartment: {
          bedrooms: 5, bathrooms: 1.5, city: 'Miami', state: 'FL', square_footage: 600, price: 300000, utilities: 'washer, dryer, gas, and electric', pets: true, image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', user_id: user.id
        }
      }
      post "/apartments", params: apartment_params 
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['address']).to include "can't be blank"
  end
end
