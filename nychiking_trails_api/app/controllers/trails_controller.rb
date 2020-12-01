    class TrailsController < ApplicationController
        before_action :set_trail, only: [:show, :update, :destroy]
      
        # GET /trails
        def index
          @trails = Trail.all
          render json: @trails, except: [:created_at, :updated_at]
        end
      
        # GET /trails/1
        def show
          render json: @trail, except: [:created_at, :updated_at]

        end
      
        # PATCH/PUT /trails/1
        def update
          if @trail.update(trail_params)
            render json: @trail
          else
            render json: @trail.errors, status: :unprocessable_entity
          end
        end
      
        # DELETE /trails/1
        def destroy
          @trail.destroy
        end
      
        private
          # Use callbacks to share common setup or constraints between actions.
          def set_trail
            @trail = Trail.find(params[:id])
          end
    end
