class AddRestrictionToExperienceItems < ActiveRecord::Migration[5.2]
  def change
    change_column_null :experience_items, :company_id, false 
  end
end
