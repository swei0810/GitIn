json.experience_item do 
    json.set! @experience_item.id do 
        json.extract! @experience_item, :id, :user_id, :title, :company, :location, :start_date, :end_date, :description
    end 
end 

