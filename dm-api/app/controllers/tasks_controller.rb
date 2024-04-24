class TasksController < ApplicationController
    def index
      tasks = Task.all
      render json: tasks
    end
    
    def show
      task = Task.find(params[:id])
      render json: task
    end
    
    def create
      task.create(task_params)
      head :created
    end
  
    def update
      task = Task.find(params[:id])
      task.update(task_params) 
      head :created
    end
  
    def destroy
      task = Task.find(params[:id])
      task.destroy
      head :created
    end
     
    private
   
    def task_params
      params.require(:task).permit(:datetime, :duration, :memo)
    end  
end
