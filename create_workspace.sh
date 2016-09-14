#!/bin/zsh

SESSION_NAME=react-starter-kit
WINDOW1=gulp_express
WINDOW2=actions
WINDOW3=reducers
WINDOW4=components
WINDOW5=containers
WINDOW6=misc

echo "Creating tmux session: $SESSION_NAME"

tmux new-session -s $SESSION_NAME -n $WINDOW1 -d \; split-window
tmux new-window -t $SESSION_NAME -n $WINDOW2
tmux new-window -t $SESSION_NAME -n $WINDOW3
tmux new-window -t $SESSION_NAME -n $WINDOW4
tmux new-window -t $SESSION_NAME -n $WINDOW5
tmux new-window -t $SESSION_NAME -n $WINDOW6

tmux send-keys -t $WINDOW1.0 'gulp' Enter
tmux send-keys -t $WINDOW1.1 'node server' Enter
tmux send-keys -t $WINDOW2 'vim app/js/actions/* ' Enter
tmux send-keys -t $WINDOW3 'vim app/js/reducers/*' Enter
tmux send-keys -t $WINDOW4 'vim app/js/components/*' Enter
tmux send-keys -t $WINDOW5 'vim app/js/containers/*' Enter
tmux send-keys -t $WINDOW6 'vim app/js/*.js app/js/index.js app/index.html app/css/style.css' Enter

echo "Tmux session: $SESSION_NAME created!"
