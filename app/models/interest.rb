# == Schema Information
#
# Table name: interests
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  company_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Interest < ApplicationRecord 
    validates :user_id, :company_id, presence: true 
    belongs_to :user 
    belongs_to :company 


    
end 
