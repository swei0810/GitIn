class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.timestamps
      t.integer :requester_id, null: false
      t.integer :requestee_id, null: false 
      t.string :status
    end
    add_index :connections, [:requester_id, :requestee_id], unique: true
  end
end
