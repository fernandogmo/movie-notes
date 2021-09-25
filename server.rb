require 'sinatra'
require_relative 'database_persistence'

configure(:development) do
  require 'sinatra/reloader'
  also_reload 'database_persistence.rb'
end

get '/' do
  send_file 'public/index.html', type: :html
end