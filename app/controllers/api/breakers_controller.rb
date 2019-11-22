class Api::BreakersController < ApplicationController
	before_action :set_subject
	
	def index
		render json: subject.breakers.all
	end

	def create
		breaker = subject.breakers.new(breaker_params)
		if breaker.save
				render json: breaker
		else
				render json: { errors: breaker.errors }, status: :unprocessable_entity  
		end
	end

	def update
		breaker = subject.breakers.find(params[:id])
		render json: breaker
	end

	def destroy
		Breaker.find(params[:id]).destroy
		render json: {message: 'Breaker deleted'}
	end

	private 
	def breaker_params
	params.require(:breaker).permit(:image, :name, :description, :rating)
	end

	def set_subject
		subject = Subject.find(params[:subject_id])
	end

end
