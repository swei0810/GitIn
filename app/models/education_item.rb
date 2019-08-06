# == Schema Information
#
# Table name: education_items
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  degree     :string
#  field      :string
#  start_yr   :string
#  end_yr     :string
#  activities :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  school_id  :integer
#

class EducationItem < ApplicationRecord 
    validates :user_id, :school, presence: true 
    belongs_to :user

    belongs_to :school, 
        primary_key: :id, 
        foreign_key: :school_id, 
        class_name: 'Company'

    has_one_attached :photo 
    
end 
