class Games::CardGamesController < ApplicationController
  before_action :set_games_card_game, only: %i[ show edit update destroy ]

  # GET /games/card_games or /games/card_games.json
  def index
    @games_card_games = Games::CardGame.all
  end

  # GET /games/card_games/1 or /games/card_games/1.json
  def show
  end

  # GET /games/card_games/new
  def new
    @games_card_game = Games::CardGame.new
  end

  # GET /games/card_games/1/edit
  def edit
  end

  # POST /games/card_games or /games/card_games.json
  def create
    @games_card_game = Games::CardGame.new(games_card_game_params)

    respond_to do |format|
      if @games_card_game.save
        format.html { redirect_to @games_card_game, notice: "Card game was successfully created." }
        format.json { render :show, status: :created, location: @games_card_game }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @games_card_game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /games/card_games/1 or /games/card_games/1.json
  def update
    respond_to do |format|
      if @games_card_game.update(games_card_game_params)
        format.html { redirect_to @games_card_game, notice: "Card game was successfully updated.", status: :see_other }
        format.json { render :show, status: :ok, location: @games_card_game }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @games_card_game.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /games/card_games/1 or /games/card_games/1.json
  def destroy
    @games_card_game.destroy!

    respond_to do |format|
      format.html { redirect_to games_card_games_path, notice: "Card game was successfully destroyed.", status: :see_other }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_games_card_game
    @games_card_game = Games::CardGame.find(params.expect(:id))
  end

  # Only allow a list of trusted parameters through.
  def games_card_game_params
    params.expect(games_card_game: [ :title, :description, :type, :state ])
  end
end
