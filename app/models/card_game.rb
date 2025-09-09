# frozen_string_literal: true

class CardGame
  attr_reader :rounds
  attr_accessor :players

  MIN_CARDS = 2
  MAX_CARDS = 10

  def initialize(players, card_count: 5)
    @card_count = card_count.clamp(MIN_CARDS, MAX_CARDS)
    @players = players
  end

  def play
    distribute_cards
    do_play
  end

  def reset
    @players.each { |player| player.reset }
  end

  private

  def do_play
    rounds = 0
    finished = false
    until finished
      rounds += 1
      @players.each do |player|
        player.play(Die.cast)
        unless player.cards_remaining > 0
          finished = true
          break
        end
      end
    end
    GameResult.new(rounds, @card_count, players_by_rank)
  end

  def players_by_rank
    @players.sort_by { |player| player.cards_remaining }
            .map { |player| PlayerResult.new(player.name, player.cards_remaining) }
  end
  def distribute_cards
    @card_count.times do
      @players.each do |player|
        player.take(Card.new)
      end
    end
  end
end
