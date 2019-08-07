json.post do
    json.set! @post.id do 
        json.extract! @post, :id, :body, :author_id, :author_type
    end
end


# json.author do 
#     json.set! @post.author_id do
#         json.partial! 'api/users/user', user: @post.author
#     end
# end


json.comments do 
    @post.comments.each do |comment|
        json.set! comment.id do 
            json.extract! :id, :body, :user_id, :post_id
        end
    end
end