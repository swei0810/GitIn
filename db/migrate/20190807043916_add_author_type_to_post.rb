class AddAuthorTypeToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :author_type, :string 
    add_index :posts, [:author_type, :author_id]
  end
end
