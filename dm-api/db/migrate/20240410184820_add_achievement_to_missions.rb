class AddAchievementToMissions < ActiveRecord::Migration[7.1]
  def change
    add_column :missions, :achievement, :integer
  end
end
