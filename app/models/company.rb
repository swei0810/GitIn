# == Schema Information
#
# Table name: companies
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  field       :string
#  description :text
#  website_url :text
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Company < ApplicationRecord 
    validates :name,  presence: true 
    has_many :posts, as: :author

    #how do you do this 
    #followers -> people who are interested in the company 
    has_many :employees, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: 'User'

    has_many :followers

    has_many :experience_items
    has_many :education_items

    has_one_attached :photo 

end 
