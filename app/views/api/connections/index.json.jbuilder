@connections.each do |connection|
    debugger
    json.set! connection.id do 
        json.extract! connection, :id, :requester_id, :requestee_id, :status
    end
end
