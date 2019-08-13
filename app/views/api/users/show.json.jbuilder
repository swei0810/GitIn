# using the partial 
# json.partial! "api/users/user", user: @user

json.user do
        json.extract! @user, :id, :email, :first_name, :last_name, :location, :summary, :github_url, :headline
        json.experienceIds @user.experience_items.pluck(:id)
        json.educationIds @user.education_items.pluck(:id)  
        json.skillIds @user.skills.pluck(:id)
        if @user.photo.attached?
            json.photoUrl url_for(@user.photo)
        end 
end 


# @sorted_experience_items = @user.experience_items.to_a.sort! {|a,b| Date.parse(a.end_date) <=> Date.parse(b.end_date)}



json.experienceItems do 
    # @user.experience_items.each do |experience_item|
    @user.experience_items.each do |experience_item|
        json.set! experience_item.id do 
            json.extract! experience_item, :id, :user_id, :title, :company, :location, :start_date, :end_date, :description
            if experience_item.company.photo.attached? 
                json.photoUrl url_for(experience_item.company.photo)
            end 
        end 
    end 
end 


json.educationItems do
    @user.education_items.each do |education_item|
        json.set! education_item.id do 
            json.extract! education_item, :id, :user_id, :school, :degree, :field, :start_yr, :end_yr, :activities
            if education_item.school.photo.attached? 
                json.photoUrl url_for(education_item.school.photo)
            end

        end 
    end 
end  


json.connections do 
    @user.sent_connection_requests.each do |request|
        json.set! request.id do 
            json.extract! request, :id, :requester_id, :requestee_id, :status
        end 
    end 

    @user.received_connection_requests do |request|
        json.set! request.id do 
            json.extract! request, :id, :requester_id, :requestee_id, :status
        end 
    end 
end 
