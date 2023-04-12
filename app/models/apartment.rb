class Apartment < ApplicationRecord
  belongs_to :user
  validates :bedrooms, :user_id, :pets, :address, presence: true
end
