class Api::BreakersController < ApplicationController

	def index
		render json: Breaker.all
	end

	def create
		breaker = Breaker.new(breaker_params)
		if breaker.save
				render json: breaker
		else
				render json: { errors: breaker.errors }, status: :unprocessable_entity  
		end
	end

	def update
		breaker = Breaker.find(params[:id])
		render json: breaker
	end

	def destroy
		Breaker.find(params[:id]).destroy
		render json: {message: 'Breaker deleted'}
	end

	private breaker_params
	params.require(:breaker).permit(:image, :name, :description, :rating)
	end

end
