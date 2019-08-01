# == Schema Information
#
# Table name: skills
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Skill < ApplicationRecord 
    validates :user_id, :title, presence: true 

    has_many :endorsments  #


    has_many :endorsers, #
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: 'User'

end 
