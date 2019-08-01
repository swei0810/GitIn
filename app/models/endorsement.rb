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
    belongs_to :user 
    belongs_to :skill 

    

    
end 
