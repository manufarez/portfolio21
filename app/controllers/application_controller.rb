class ApplicationController < ActionController::Base
  skip_before_action :check_for_lockup, raise: false

  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end
end
