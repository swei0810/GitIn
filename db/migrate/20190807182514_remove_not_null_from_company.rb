class RemoveNotNullFromCompany < ActiveRecord::Migration[5.2]
  def change
    change_column_null :companies, :field, true
    change_column_null :companies, :description, true
    change_column_null :companies, :website_url, :field, true
    change_column_null :companies, :location, :field, true
  end
end
