class RemoveBodyFromProjects < ActiveRecord::Migration[6.1]
  def change
    remove_column :projects, :body
  end
end
