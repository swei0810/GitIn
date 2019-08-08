# json.partial! "api/users/user", user: @user
    @users.each do |user|
        # json.set! user.id do 
            json.extract! user, :id, :email, :first_name, :last_name  #might need more data 
            if user.photo.attached?
                json.photoUrl url_for(user.photo)
            end 
        # end 
    end 
