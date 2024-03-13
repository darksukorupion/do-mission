Rails.application.routes.draw do
  # ヘルスチェック
  get "/health_check" => "health_checks#index"
  # ミッション一覧
  get "/missions" => "missions#index"
  # ミッション詳細  
  get "/missions/:id" => "missions#show"
  # ミッション作成
  post "/missions" => "missions#create"
end
