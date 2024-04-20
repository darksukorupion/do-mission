class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.integer :mission_id
      t.date :datetime
      t.integer :duration
      t.string :memo
      t.timestamps
    end
  end
end
