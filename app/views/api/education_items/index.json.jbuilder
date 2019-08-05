@education_items.each do |education_item|
    json.set! education_item.id do 
        json.extract! education_item, :school, :degree, :field, :start_yr, :end_yr, :activities 
    end 
end 

