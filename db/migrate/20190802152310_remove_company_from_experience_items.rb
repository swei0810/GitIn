class RemoveCompanyFromExperienceItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :experience_items, :company, :string 
    add_column :experience_items, :company_id, :integer
  end
end
