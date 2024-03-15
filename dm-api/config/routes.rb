Rails.application.routes.draw do
  # ヘルスチェック
  get "/health_check" => "health_checks#index"
  # ミッション一覧
  get "/missions" => "missions#index"
  # ミッション詳細  
  get "/missions/:id" => "missions#show"
  # ミッション作成
  post "/missions" => "missions#create"
  #ミッション編集
  post "/missions/:id/update" => "missions#update"
  #ミッション削除
  post "/missions/:id/delete" => "missions#delete"

  # ユーザー一覧
  get "/users" => "users#index"
  # ユーザー詳細  
  get "/users/:id" => "users#show"
  # ユーザー作成
  post "/users" => "users#create"
  #ユーザー編集
  post "/users/:id/update" => "users#update"
  #ユーザー削除
  post "/users/:id/delete" => "users#delete"

end
