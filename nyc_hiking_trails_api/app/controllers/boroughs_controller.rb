class BoroughsController < ApplicationController
    def index
         @boroughs = Borough.all
         render json: @boroughs, except: [:created_at, :updated_at]
    end
    
    
end
