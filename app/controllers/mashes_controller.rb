class MashesController < ApplicationController
  def index
    @mash = Mash.new #similar to below, but mashes.all
    @mashes = current_user.mashes.all
  end

  def create
    @mash = current_user.mashes.new(mash_params) #same as 8 and 9
    # @mash = Mash.new(mash_params)
    # @mash.user_id = current_user.id
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
