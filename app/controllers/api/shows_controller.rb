class Api::ShowsController < ApplicationController
  def index
<<<<<<< HEAD

    shows = Show.all

    @shows = []
    if params[:now] == "true"
      # @shows.concat(shows.where('start_time < ? AND end_time > ?', Time.now.hour, Time.now.hour))
      shows.each {|show| @shows.push(show) if show.now?}
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

=======
    @shows = Show.all
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
  end

  def show
    @show = Show.find_by(params[:id])
  end

  private
  def show_params
    params.require(:show).permit(:artist, :genre, :date, :venue, :venue_id)
  end
<<<<<<< HEAD


=======
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468
end
