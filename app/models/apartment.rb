class Apartment < ApplicationRecord
  belongs_to :user
  validates :bedrooms, :user_id, :pets, presence: true
end
