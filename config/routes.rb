Rails.application.routes.draw do
  namespace :api do
    resources: breakers
  end
end
