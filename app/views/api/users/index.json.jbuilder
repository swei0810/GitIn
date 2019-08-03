# json.partial! "api/users/user", user: @user
json.errorhere do 
    @users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :email, :first_name, :last_name  #might need more data 
        end 
    end 
end 
