class AddPrivateToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :private, :boolean, default: false
  end
end
