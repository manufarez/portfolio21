class Project < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_rich_text :body
  validates_presence_of :position, message: "can't be blank"
  validates_presence_of :title, message: "can't be blank"

  extend FriendlyId
    friendly_id :title, use: :slugged

  def self.tagged_with(name)
    Tag.find_by!(name: name).projects
  end

  def self.tag_counts
    Tag.select('tags.*, count(taggings.tag_id) as count').joins(:taggings).group('taggings.tag_id')
  end

  def tag_list
    tags.map(&:name).join(', ')
  end

  def tag_list=(names)
    self.tags = names.split(',').map do |n|
      Tag.where(name: n.strip).first_or_create!
    end
  end
end
