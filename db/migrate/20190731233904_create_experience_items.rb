class CreateExperienceItems < ActiveRecord::Migration[5.2]
  def change
    create_table :experience_items do |t|
      t.integer :user_id, null: false 
      t.string :title, null: false 
      t.string :company, null: false 
      t.string :location, null: false 
      t.integer :start_date, null: false  
      t.integer :end_date 
      t.text :description

      t.timestamps
    end
  end
end
