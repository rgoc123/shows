class Api::ShowsController < ApplicationController
  def index
    @shows = (params[:date] == "" || !params[:date]) ? Show.all : Show.meets_date
  end

  def show
    @show = Show.find_by(params[:id])
  end

  private
  def show_params
    params.require(:show).permit(:artist, :genre, :date, :venue, :venue_id)
  end
end
