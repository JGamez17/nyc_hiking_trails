Rails.application.routes.draw do

  resources :boroughs do
    resources :trails do 
      resources :comments
    end
  end
end
