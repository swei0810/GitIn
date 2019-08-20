# == Schema Information
#
# Table name: posts
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_type :string
#


# author_type add_column for polymorphistic asosciation 

class Post < ApplicationRecord 
    validates :author_id, presence: true 
    # has_many :likes 

    belongs_to :author, polymorphic: true #can be either a user or a company , how do you do this? 
    
    has_many :comments, dependent: :destroy

    has_one_attached :photo


    #implement this 
    # def num_comments 

    # end 

end 
