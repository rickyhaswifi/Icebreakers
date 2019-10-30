class CreateBreakers < ActiveRecord::Migration[6.0]
  def change
    create_table :breakers do |t|
      t.string :image
      t.string :name
      t.string :description
      t.string :rating

      t.timestamps
    end
  end
end
