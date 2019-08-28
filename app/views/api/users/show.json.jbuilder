# using the partial 
# json.partial! "api/users/user", user: @user

json.user do
        json.extract! @user, :id, :email, :first_name, :last_name, :location, :summary, :github_url, :headline
        json.experienceIds @user.experience_items.pluck(:id)
        json.educationIds @user.education_items.pluck(:id)  
        json.skillIds @user.skills.pluck(:id)
        json.sentConnectionIds @user.requested_connections.pluck(:requestee_id)
        json.receivedConnectionIds @user.received_connections.pluck(:requester_id)
        # @user.received_connections.pluck(:id)
        #this is where you grab the id of the user you are connected to, will be using this in connections_index 
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


json.skills do 
    @user.skills.each do |skill|
        json.set! skill.id do 
            json.extract! skill, :id, :user_id, :title 
        end 
    end 
end 

json.requestedConnections do
    @user.requested_connections.each do |connection|
        json.set! connection.id do
            json.extract! connection, :id, :requester_id, :requestee_id, :status
        end  
    end 
end  

json.receivedConnections do
    @user.received_connections.each do |connection|
        json.set! connection.id do
            json.extract! connection, :id, :requester_id, :requestee_id, :status
        end  
    end 
end  


