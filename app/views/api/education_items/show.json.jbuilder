json.educationItem do 
    json.set! @education_item.id do 
        json.extract! @education_item, :id, :user_id, :school, :degree, :field, :start_yr, :end_yr, :activities
    end 
end 