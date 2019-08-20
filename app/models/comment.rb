# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord 
    validates :user_id, :post_id, presence: true 
    
    belongs_to :author,         
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :post 


end 
