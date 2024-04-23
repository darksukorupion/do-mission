Rails.application.routes.draw do
  # ヘルスチェック
  get "/health_check" => "health_checks#index"

  post "login" => "users#login"

  resources :missions, :users, :tasks

  # # ミッション一覧
  # get "/missions" => "missions#index"
  # # ミッション詳細  
  # get "/missions/:id" => "missions#show"
  # # ミッション作成
  # post "/missions" => "missions#create"
  # #ミッション編集
  # put "/missions/:id" => "missions#update"
  # #ミッション削除
  # delete "/missions/:id" => "missions#destroy"

  # # ユーザー一覧
  # get "/users" => "users#index"
  # # ユーザー詳細  
  # get "/users/:id" => "users#show"
  # # ユーザー作成
  # post "/users" => "users#create"
  # #ユーザー編集
  # put "/users/:id" => "users#update"
  # #ユーザー削除
  # delete "/users/:id" => "users#destroy"

end
