# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  location        :string
#  summary         :text
#  github_url      :string
#  headline        :string
#

class User < ApplicationRecord 
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
  
    after_initialize :ensure_session_token
    attr_reader :password

    #associations 
    has_many :experience_items
    has_many :education_items
    has_many :companies,  #you work for 
        through: :experience_items, 
        source: :company
    has_many :posts,
      primary_key: :id, 
      foreign_key: :author_id, 
      class_name: 'Post'
    
    has_many :skills
    has_many :interests   #companies you are interested in 
    has_many :connections  
    # has_many :second_connections, 
    #     through: :connections, 
    #     source: :, 
    # has_many :third_connections, 
    #     through: :second_connections
    #     source: :, 


    has_one_attached :photo





    def total_connections 
        #count the number of total connections a user has 
        #In views, can call @user.total_connections 
    end 

    #Backend Auth 
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def reset_session_token!
      self.session_token = User.generate_session_token
      self.save!
      self.session_token
    end
  
    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    private
  
    def ensure_session_token
        self.session_token ||= User.generate_session_token 
    end
  

    
end 
