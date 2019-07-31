class CreateEducationItems < ActiveRecord::Migration[5.2]
  def change
    create_table :education_items do |t|
      t.integer :user_id, null: false
      t.string :school,  null: false
      t.string :degree
      t.string :field 
      t.integer :start_yr
      t.integer :end_yr 
      t.text :activities



      t.timestamps
    end
  end
end
