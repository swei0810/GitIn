# == Schema Information
#
# Table name: experience_items
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  company     :string           not null
#  location    :string           not null
#  start_date  :integer          not null
#  end_date    :integer
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ExperienceItem < ApplicationRecord 
    validates :user_id, :title, :company, :location, :start_date, presence: true
    
    belongs_to :user 
    belongs_to :company 
end 
