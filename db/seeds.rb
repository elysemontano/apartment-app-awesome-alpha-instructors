user1 = User.where(email: 'test@testing.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')
user2 = User.where(email: 'testing@testing.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')

user1_apartments = [
  {
    bedrooms: 5, 
    bathrooms: 1.5, 
    address: '123 fourth street', 
    city: 'Miami', 
    state: 'FL', 
    square_footage: 600, 
    price: 300000, 
    utilities: 'washer, dryer, gas, and electric', 
    pets: true, 
    image: 'https://images.unsplash.com/photo-1638945657499-a7e1de359849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]

user2_apartments = [
  {
    bedrooms: 2, 
    bathrooms: 1.5, 
    address: '567 eighth street', 
    city: 'Los Angeles', 
    state: 'CA', 
    square_footage: 500, 
    price: 600000, 
    utilities: 'none', 
    pets: false, 
    image: 'https://images.unsplash.com/photo-1638894174021-a6fcc009089a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
]

user1_apartments.each do |apartment|
  user1.apartments.create(apartment)
  p "created: #{apartment}"
end

user2_apartments.each do |apartment|
  user2.apartments.create(apartment)
  p "created: #{apartment}"
end