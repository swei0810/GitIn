@endorsements.each do |endorsement| 
    json.set! endorsement.id do 
        json.extract! endorsement, :id, :skill_id, :user_id 
    end 
end 

