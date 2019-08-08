    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :body, :author_id, :author_type, :author 
            if post.photo.attached?
                json.photoUrl url_for(post.photo)
            end 
            if post.author.photo.attached?
                json.authorPhotoUrl url_for(post.author.photo)
            end 
        end
    end


    # @posts.first.author.photo.attached? true 
# @posts.each do |post|
#     json.comments do 
#         post.comments.each do |comment|
#             json.set! comment.id do 
#                 json.extract! comment, :id, :body, :user_id, :post_id
#             end
#         end
#     end

