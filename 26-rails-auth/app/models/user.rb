class User < ApplicationRecord
  validates :username, uniqueness: { case_sensitive: false }
  # validates(:username, { uniqueness: { case_sensitive: false } })
  has_secure_password # RAILS MAGIC WOW OMG WUT (comes from ActiveModel)
  #as a reminder, ActiveRecord provides getters and setters for the attributes specified by our schema
  # therefore, we have getters/setters for username and password_digest

  # user provides their password via some form
  # run validations (this happens automagically)
  #
  # def password=(plaintext_pw)
  #   # plaintext_pw -> 'michael' for example
  #   # take the user's plaintext password and encrypt it
  #   # store the salted and hashed password in our database
  #   # self is the newly created user
  #   self.password_digest = BCrypt::Password.create(plaintext_pw)
  # end
  #
  # def authenticate(plaintext_pw) #is the user who they claim to be
  #   # this is an instance method on an ALREADY EXISTING USER
  #   # plaintext_pw -> 'flavortown', for example
  #   # if the provided plaintext_pw matches our salted and hashed pw when run through bcrypt
  #   # then the user is who they claim they are!
  #   # same method: is_password? && BCrypt::Password#==
  #   # BCrypt::Password.new(self.password_digest).is_password?(plaintext_pw)
  #   if BCrypt::Password.new(self.password_digest) == plaintext_pw
  #     self #return the user instance
  #   else
  #     false # wrong password! u r not authenticated
  #   end
  # end
end
