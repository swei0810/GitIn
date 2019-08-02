# == Schema Information
#
# Table name: companies
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  field       :string           not null
#  description :text             not null
#  website_url :text             not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Company < ApplicationRecord 
    validates :name, :field, :description, :website_url, :location,  presence: true 
    has_many :posts 

    #how do you do this 
    #followers -> people who are interested in the company 
    has_many :employees, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: 'User'

    has_many :followers


end 
