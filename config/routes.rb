Rails.application.routes.draw do
  
  namespace :api do
    resources :subjects do 
      resources :breakers
    end
  end
  
end
