class PartiesController < ApplicationController
  def index
    @parties = current_user.parties.all
    @party = Party.new
  end

  def create
    @party = current_user.parties.new(party_params)
    if @party.save
      render json: @party
    else
      render json: @party.errors, status: :unprocessable_entity
    end
  end

  private
  def party_params
    params.require(:party).permit(:title)
  end
end
