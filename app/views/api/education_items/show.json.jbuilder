    # json.set! @education_item.id do 
        json.extract! @education_item, :id, :user_id, :school, :degree, :field, :start_yr, :end_yr, :activities 
       
            if @education_item.school.photo.attached? 
                json.photoUrl url_for(@education_item.school.photo)
            end 
    # end 
