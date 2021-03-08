class AddTagsToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :tags, :string
  end
end
