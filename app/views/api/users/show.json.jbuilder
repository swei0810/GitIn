# using the partial 
# json.partial! "api/users/user", user: @user

json.user do
        json.extract! @user, :id, :email, :first_name, :last_name, :location, :summary, :github_url
        json.experienceIds @user.experience_items.pluck(:id)
        json.educationIds @user.education_items.pluck(:id)  
        json.skillIds @user.skills.pluck(:id)
end 


json.experienceItems do 
    @user.experience_items.each do |experience_item|
        json.set! experience_item.id do 
            json.extract! experience_item, :id, :user_id, :title, :company, :location, :start_date, :end_date, :description
        end 
    end 
end 


json.educationItems do
    @user.education_items.each do |education_item|
        json.set! education_item.id do 
            json.extract! education_item, :id, :user_id, :school, :degree, :field, :start_yr, :end_yr, :activities
        end 
    end 
end  


# json.skills do 
#     @user.skills.each do |skill|
#         json.set! skill.id do 

#         end
#     end 
# end 

### education/exp/skill reducers should listen to receiveUser action 