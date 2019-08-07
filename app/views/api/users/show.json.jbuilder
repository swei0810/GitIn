# using the partial 
# json.partial! "api/users/user", user: @user

json.user do
        json.extract! @user, :id, :email, :first_name, :last_name, :location, :summary, :github_url, :headline
        json.experienceIds @user.experience_items.pluck(:id)
        json.educationIds @user.education_items.pluck(:id)  
        json.skillIds @user.skills.pluck(:id)
        json.photoUrl url_for(@user.photo)
end 


@sorted_experience_items = @user.experience_items.to_a.sort! {|a,b| Date.parse(a.end_date) <=> Date.parse(b.end_date)}



json.experienceItems do 
    # @user.experience_items.each do |experience_item|
    @sorted_experience_items.reverse.each do |experience_item|
        json.set! experience_item.id do 
            json.extract! experience_item, :id, :user_id, :title, :company, :location, :start_date, :end_date, :description
            json.photoUrl url_for(experience_item.company.photo)
        end 
    end 
end 


json.educationItems do
    @user.education_items.each do |education_item|
        json.set! education_item.id do 
            json.extract! education_item, :id, :user_id, :school, :degree, :field, :start_yr, :end_yr, :activities
            json.photoUrl url_for(education_item.school.photo)

        end 
    end 
end  


# if @user.photos.attached? 
    # json.array! json.extract! @user.photo, :service_url
    # json.photoUrl do 
    #     json.array! @user.photos.each do |photo| 
    #         url_for(photo)
    #     end 
    # end
    
# end 


# json.photoUrl do 
#     json.array! @user.photo, :service_url 
# end 


# json.skills do 
#     @user.skills.each do |skill|
#         json.set! skill.id do 

#         end
#     end 
# end 

### education/exp/skill reducers should listen to receiveUser action 