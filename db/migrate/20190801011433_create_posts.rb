class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false 
      t.text :body
    

      t.timestamps
    end
    add_index :posts, :author_id
  end
end