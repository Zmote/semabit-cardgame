class Games::GamesController < ApplicationController
  before_action :set_games_game, only: %i[ show edit update destroy ]

  # GET /games/games or /games/games.json
  def index
    @games_games = Games::Game.all
  end

  # GET /games/games/1 or /games/games/1.json
  def show
  end

  # GET /games/games/new
  def new
    @games_game = Games::Game.new
  end

  # GET /games/games/1/edit
  def edit
  end

  # POST /games/games or /games/games.json
  def create
    @games_game = Games::Game.new(games_game_params)

    respond_to do |format|
      if @games_game.save
        format.html { redirect_to @games_game, notice: "Game was successfully created." }
        format.json { render :show, status: :created, location: @games_game }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @games_game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /games/games/1 or /games/games/1.json
  def update
    respond_to do |format|
      if @games_game.update(games_game_params)
        format.html { redirect_to @games_game, notice: "Game was successfully updated.", status: :see_other }
        format.json { render :show, status: :ok, location: @games_game }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @games_game.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /games/games/1 or /games/games/1.json
  def destroy
    @games_game.destroy!

    respond_to do |format|
      format.html { redirect_to games_games_path, notice: "Game was successfully destroyed.", status: :see_other }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_games_game
      @games_game = Games::Game.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def games_game_params
      params.expect(games_game: [ :title, :description, :type, :state ])
    end
end
