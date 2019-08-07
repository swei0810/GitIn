    # json.set! @experience_item.id do 
        json.extract! @experience_item, :id, :user_id, :title, :company, :location, :start_date, :end_date, :description
        if @experience_item.company.photo.attached? 
            json.photoUrl url_for(@experience_item.company.photo)    
        end 
    # end 

