class CreateMissions < ActiveRecord::Migration[7.1]
  def change
    create_table :missions do |t|
      t.integer :user_id
      t.string :title
      t.text :summary
      t.integer :achivement
      t.date :dead_line
      t.timestamps
    end
  end
end
