class Api::VenuesController < ApplicationController
  def index
    @venues = Venue.all
  end

  def create
  end

  def show
    @venue = Venue.find_by(params[:id])
  end

  private
  def venue_params
    params.require(:venue).permit(:name, :address, :city, :state, :zip, :borough, :neighborhood)
  end
end
