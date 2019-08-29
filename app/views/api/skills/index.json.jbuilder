

@skills.each do |skill|
    json.set! skill.id do 
        json.extract! skill, :id, :user_id, :title  
        json.endorsementIds skill.endorsements.pluck(:id) 

    end 
end 