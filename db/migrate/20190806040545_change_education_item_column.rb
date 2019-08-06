class ChangeEducationItemColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :education_items, :school, :string 
    add_column :education_items, :school_id, :integer
  end
end
