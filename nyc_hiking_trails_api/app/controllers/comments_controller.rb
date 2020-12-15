class CommentsController < ApplicationController

    def index
        # byebug
       @comments = Comment.where("trail_id =?", params[:trail_id])
        render json: @comments, except: [:created_at, :updated_at]
    end    
end
