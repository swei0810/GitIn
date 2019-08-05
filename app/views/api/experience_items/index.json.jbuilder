@experience_items.each do |experience_item|
    json.set! experience_item.id do 
        json.extract! experience_item, :title, :location, :start_date, :end_date, :description, :company_id 
    end 
end 


