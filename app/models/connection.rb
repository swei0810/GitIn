# == Schema Information
#
# Table name: connections
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  requester_id :integer          not null
#  requestee_id :integer          not null
#  status       :string
#

class Connection < ApplicationRecord 
    validates :requester_id, uniqueness: { scope: :requestee_id }

end 
