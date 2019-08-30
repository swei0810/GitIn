json.set! @endorsement.id do 
    json.extract! @endorsement, :id, :user_id, :skill_id 
end