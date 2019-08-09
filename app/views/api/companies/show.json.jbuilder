json.extract! @company, :id, :name
if @company.photo.attached?
    json.photoUrl url_for(@company.photo)

end 