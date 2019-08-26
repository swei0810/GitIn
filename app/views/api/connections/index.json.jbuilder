
    json.sent do 
        @requested_connections.each do |connection|
            json.set! connection.id do 
                json.extract! connection, :id, :requester_id, :requestee_id, :status
            end 
        end 
    end 

    json.received do 
        @received_connections.each do |connection|
            json.set! connection.id do 
                json.extract! connection, :id, :requester_id, :requestee_id, :status
            end 
        end 
    end 

    