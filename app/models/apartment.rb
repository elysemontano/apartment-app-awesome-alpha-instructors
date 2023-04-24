class Apartment < ApplicationRecord
  belongs_to :user
  validates :bedrooms, :user_id, :address, presence: true
  validates :pets, inclusion: { :in => [true, false] }
end
