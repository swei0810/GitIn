class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.timestamps 
      t.string :first_name 
      t.string :last_name
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token , null: false
      t.string :location
      t.text :summary 
      t.string :github_url
      t.string :headline
    end

    add_index :users, :email, unique: true
    add_index :users, :password_digest, unique: true 
    
  end
end
