@companies.each do |company|
    json.set! company.id do 
        json.extract! company, :id, :name
        if company.photo.attached?
            json.photoUrl url_for(company.photo)
        end 
    end 
end 