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
    # has_many :likes 

    belongs_to :author #can be either a user or a company , how do you do this? 
    
    has_many :comments, 
        primary_key: :id, 
        foreign_key: :post_id, 
        class_name: 'Comment'


end 
