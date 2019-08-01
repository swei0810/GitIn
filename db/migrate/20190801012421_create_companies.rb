class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name, null: false 
      t.string :field, null: false 
      t.text :description, null: false
      t.text :website_url, null: false 
      t.string :location, null: false 
      
      t.timestamps
    end
  end
end
