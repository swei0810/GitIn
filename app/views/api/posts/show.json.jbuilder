    # json.set! @post.id do 
        json.extract! @post, :id, :body, :author_id, :author_type, :author
        if @post.photo.attached? 
            json.photoUrl url_for(@post.photo)
        end 

        
    # end

# json.comments do 
#     @post.comments.each do |comment|
#         json.set! comment.id do 
#             json.extract! :id, :body, :user_id, :post_id
#         end
#     end
# end