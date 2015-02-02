class MashesController < ApplicationController
  def index
    @mash = Mash.new
  end

  def create
    @mash = Mash.new(mash_params)
    if @mash.save
      render json: @mash
    else
      render json: @mash.errors, status: :unprocessable_entity
    end
  end

  private
  def mash_params
    params.require(:mash).permit(:home, :spouse, :kids, :vehicle, :guest)
  end
end
