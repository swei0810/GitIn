class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.integer :user_id, null: false 
      t.string :title, null: false 

      t.timestamps
    end
  end
end
