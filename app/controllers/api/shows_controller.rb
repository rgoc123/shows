class Api::ShowsController < ApplicationController
  def index

    shows = (params[:date] == "" || !params[:date]) ? Show.all : Show.meets_date

    @shows = []
    
    if params[:now] == "true"
      @shows.concat(shows.where('start_time < ? AND end_time > ?', Time.now, Time.now))
    end
    if params[:soon] == "true"
      @shows.concat(shows.where('start_time > ? AND start_time < ?', Time.now, Time.now + 3600))
    end
    if params[:later] == "true"
      @shows.concat(shows.where('start_time >= ? AND date = ?', Time.now + 3600, Date.today))
    end
    if (params[:now] == "false" && params[:soon] == "false" && params[:later] == "false") || (!params[:now] && !params[:soon] && !params[:later])
      @shows = shows
    end

    return @shows

  end

  def show
    @show = Show.find_by(params[:id])
  end

  private
  def show_params
    params.require(:show).permit(:artist, :genre, :date, :venue, :venue_id)
  end


end
