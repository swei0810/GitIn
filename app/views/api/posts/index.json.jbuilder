json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :body, :author_id, :author_type
        end
    end
end


@posts.each do |post|
    json.comments do 
        post.comments.each do |comment|
            json.set! comment.id do 
                json.extract! comment, :id, :body, :user_id, :post_id
            end
        end
    end

