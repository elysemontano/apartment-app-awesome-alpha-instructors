require 'rails_helper'
# bedrooms: 5, bathrooms: 1.5, address: '123 fourth street', city: 'Miami', state: 'FL', square_footage: 600, price: 300000, utilities: 'washer, dryer, gas, and electric', pets: true, image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

RSpec.describe Apartment, type: :model do
  let (:user) {User.create email: 'elyse@testing.com', password: 'test123', password_confirmation: 'test123'}

  it 'should validate bedrooms' do 
    apartment = user.apartments.create(bathrooms: 1.5, address: '123 fourth street', city: 'Miami', state: 'FL', square_footage: 600, price: 300000, utilities: 'washer, dryer, gas, and electric', pets: true, image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
    expect(apartment.errors[:bedrooms]).to include "can't be blank"
  end

  it 'should validate a user_id' do 
    apartment = Apartment.create(bedrooms: 5, bathrooms: 1.5, address: '123 fourth street', city: 'Miami', state: 'FL', square_footage: 600, price: 300000, utilities: 'washer, dryer, gas, and electric', pets: true, image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
    expect(apartment.errors[:user_id]).to include "can't be blank"
  end

  it 'should validate pets' do 
    apartment = user.apartments.create(bedrooms: 5, bathrooms: 1.5, address: '123 fourth street', city: 'Miami', state: 'FL', square_footage: 600, price: 300000, utilities: 'washer, dryer, gas, and electric', image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
    expect(apartment.errors[:pets]).to_not be_empty
  end
end
