class CommentsController < ApplicationController

    def index
        @comments =  if params[:trail_id]
            Comment.where(trail_id: params[:trail_id])
        end
        render json: @comments, except: [:created_at, :updated_at]
    end
    
end
