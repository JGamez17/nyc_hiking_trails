class Trail < ApplicationRecord
    belongs_to :borough
    has_many :comments

    after_initialize :set_likes
        def set_likes
            self.likes ||= 0 
        end

end

