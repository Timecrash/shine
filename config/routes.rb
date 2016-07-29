Rails.application.routes.draw do
  devise_for :users
  root 'dashboard#index'
  resources :customers, only: [:index, :show, :update]
  get "angular_test", to: "angular_test#index"
  get "fake_billing", to: "fake_billing#show"
end
