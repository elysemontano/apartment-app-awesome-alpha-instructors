class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.integer :bedrooms
      t.float :bathrooms
      t.string :address
      t.string :city
      t.string :state
      t.integer :square_footage
      t.integer :price
      t.text :utilities
      t.boolean :pets
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
