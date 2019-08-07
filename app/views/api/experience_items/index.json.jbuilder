
@experience_items.each do |experience_item|
    json.set! experience_item.id do 
        json.extract! experience_item, :id, :title, :location, :start_date, :end_date, :description, :company
        if experience_item.company.photo.attached?
            json.photoUrl url_for(experience_item.company.photo)
        end 

    end 
end 


