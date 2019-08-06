class ChangeDateType < ActiveRecord::Migration[5.2]
  def change
    change_column :education_items, :start_yr, :string
    change_column :education_items, :end_yr, :string
    change_column :experience_items, :start_date, :string 
    change_column :experience_items, :end_date, :string 


  end
end
