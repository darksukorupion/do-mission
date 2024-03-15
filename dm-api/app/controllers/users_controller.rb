class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end
  
  def show
    user = User.find(params[:id])
    render json: user
  end
  
  def create
    User.create(user_params)
    head :created
  end

  def update
    user = User.find(params[:id])
    user.update(user_params) 
    head :created
  end

  def delete
    user = User.find(params[:id])
    user.destroy
    head :created
  end
   
  private
 
  def user_params
    params.require(:user).permit(:name, :email)
  end

end