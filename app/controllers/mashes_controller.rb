class MashesController < ApplicationController
  def home
    @mash = Mash.new
  end

  def index
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

  def destroy
    @mash = Mash.find(params[:id])
    @mash.destroy
    render json: @mash
  end

  def mail_test
    ModelMailer.send_mash_game(@mash, "hrfarley@gmail.com").deliver
    render text: "did it"
  end

  private
  def mash_params
    params.require(:mash).permit(:home, :spouse, :kids, :vehicle, :guest)
  end
end
