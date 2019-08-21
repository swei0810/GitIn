

@skills.each do |skill|
    json.set! skill.id do 
        json.extract! skill, :id, :title  #don't need user_id 
    end 
end 