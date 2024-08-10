Rails.application.routes.draw do
  root 'home#index'
  
  get 'teacher', to: 'home#teacher'
  get 'software_engineer', to: 'home#software_engineer'
  get 'phylogeneticist', to: 'home#phylogeneticist'
  get 'writer', to: 'home#writer'
end
