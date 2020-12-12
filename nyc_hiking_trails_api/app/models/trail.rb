class Trail < ApplicationRecord
    belongs_to :borough
    has_many :comments
end
