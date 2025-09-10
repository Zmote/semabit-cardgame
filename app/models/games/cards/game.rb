# frozen_string_literal: true

require "faker"

module Games
  module Cards
    class Game
      attr_reader :rounds
      attr_accessor :players

      MIN_CARDS = 2
      MAX_CARDS = 10

      MIN_PLAYERS = 2
      MAX_PLAYERS = 10

      class << self
        def from(config)
          card_count, player_count = config.values_at(:card_count, :player_count)
          new(player_count: player_count, card_count: card_count)
        end
      end

      def initialize(player_count: 4, card_count: 5)
        @card_count = card_count.clamp(MIN_CARDS, MAX_CARDS)
        player_count = player_count.clamp(MIN_PLAYERS, MAX_PLAYERS)
        @players = (0..(player_count - 1)).map { Player.new(::Faker::Name.name) }
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
  end
end
