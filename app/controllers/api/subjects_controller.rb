class Api::SubjectsController < ApplicationController

  def index
		render json: Subject.all
  end
  
	def create
		subject = Subject.new(subject_params)
		if subject.save
      render json: subject
		else
      render json: { errors: subject.errors }, status: :unprocessable_entity  
    end
  end
		
	def update
		subject = Subject.find(params[:id])
    if subject.update(subject_params)
      render json: subject
    else
      render json: {errors: subject.errors}, status: :unprocessable_entity
    end
  end   
	
	def destroy
		Subject.find(params[:id]).destroy
		render json: {message: 'Subject deleted'}
  end

  private 
  def subject_params
	  params.require(:subject).permit(:image, :name)
	end

end
