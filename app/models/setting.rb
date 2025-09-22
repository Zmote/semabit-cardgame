# frozen_string_literal: true

class Setting < ApplicationRecord
  validates :scope, presence: true
  validates :category, presence: true, uniqueness: { scope: :scope }
  validates :value, presence: true

  # Custom type that deserialized to HashWithIndifferentAccess
  attribute :value, :indifferent_json, default: {}

  SCOPE_SETTING = :setting
  SCOPES = [ SCOPE_SETTING ]
  SCOPES_ENUM = [ SCOPE_SETTING ].map { |k| [ k, k.to_s ] }.to_h

  enum :scope, SCOPES_ENUM, prefix: true

  CATEGORY_QUOTES = :quotes
  CATEGORIES = [ CATEGORY_QUOTES ]
  CATEGORIES_ENUM = CATEGORIES.map { |k| [ k, k.to_s ] }.to_h

  enum :category, CATEGORIES_ENUM, prefix: true

  private_constant :SCOPES, :CATEGORIES, :SCOPES_ENUM, :CATEGORIES_ENUM

  class << self
    def register(scope:, category:, value:)
      find_or_create_by(scope: scope, category: category) do |setting|
        setting.value = value
      end
    end

    def quotes_value(key:)
      setting = self.for(category: CATEGORY_QUOTES)
      setting.value.dig(key)
    end

    def for(scope: SCOPE_SETTING, category:)
      find_or_initialize_by(scope: scope, category: category)
    end
  end
end
