ActiveSupport.on_load(:active_record) do
  ActiveRecord::Type.register(:indifferent_json, IndifferentJsonType)
end
