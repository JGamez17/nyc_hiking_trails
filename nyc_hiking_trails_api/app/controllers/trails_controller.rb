    class TrailsController < ApplicationController
        before_action :set_trail, only: [:show, :update, :destroy]
      
        # GET /trails
        def index
          @borough = Borough.find_by_id(params[:borough_id])
          @trails = @borough.trails
          # byebug
          render json: @trails, except: [:created_at, :updated_at]
        end

        # PATCH/PUT /trails/1
        def update
          @trail = Trail.find_by_id(params[:id])
          @trail.update(likes: @trail.likes + 1)
          render json: @trail, except: [:created_at, :updated_at]
        end
     
        private
          # Use callbacks to share common setup or constraints between actions.
          def set_trail
            @trail = Trail.find(params[:id])
          end
    end
