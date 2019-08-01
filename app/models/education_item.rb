# == Schema Information
#
# Table name: education_items
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  school     :string           not null
#  degree     :string
#  field      :string
#  start_yr   :integer
#  end_yr     :integer
#  activities :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EducationItem < ApplicationRecord 
    validates :user_id, :school, presence: true 
    
end 
