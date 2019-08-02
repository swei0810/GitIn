# == Schema Information
#
# Table name: endorsements
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  skill_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Endorsement < ApplicationRecord 
    belongs_to :endorser, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: 'User'
        
    belongs_to :skill 

    

    
end 
