# frozen_string_literal: true

class IndifferentJsonType < ActiveRecord::Type::Json
  def deserialize(value)
    json = super(value)
    json.is_a?(Hash) ? json.with_indifferent_access : json
  end
end
