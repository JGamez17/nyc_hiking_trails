Rails.application.routes.draw do

  resources :boroughs do
    
    resources :trails
    
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
