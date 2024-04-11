class AddDatetimeToMissions < ActiveRecord::Migration[7.1]
  def change
    add_column :missions, :datetime, :date
  end
end
