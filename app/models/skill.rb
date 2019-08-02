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

    belongs_to :user 

    has_many :endorsments  

    has_many :endorsers, 
        through: :endorsments, 
        source: :endorser
  

end 
