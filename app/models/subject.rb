class Subject < ApplicationRecord
  has_many :breakers, dependent: :destroy
end
