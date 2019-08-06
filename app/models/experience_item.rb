# == Schema Information
#
# Table name: experience_items
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  location    :string           not null
#  start_date  :string           not null
#  end_date    :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  company_id  :integer          not null
#

#remigrate company to company_id 

class ExperienceItem < ApplicationRecord 
    validates :user_id, :title, :company_id, :location, :start_date, presence: true
    
    belongs_to :user 
    belongs_to :company 
end 
