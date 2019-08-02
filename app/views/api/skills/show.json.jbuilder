json.skill do 
  json.set! @user.id do 
    json.extract! @skill, :id, :user_id, :title
    json.endorserIds @skill.endorsers.pluck(:id)
  end 
end 

#want endorser ids as well 