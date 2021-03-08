class AddIntroToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :intro, :text
  end
end
