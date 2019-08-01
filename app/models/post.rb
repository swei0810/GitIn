# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord 
    validates :author_id, presence: true 
    has_many :likes 
    has_many :comments 


end 
