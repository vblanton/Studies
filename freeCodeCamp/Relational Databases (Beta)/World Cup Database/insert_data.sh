#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
START=`date +%s`
echo -e "clearing worldcup database...\n\c" $($PSQL "TRUNCATE TABLE games, teams")
#insert teams
echo -e "populating teams..."
cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS
  do
  if [[ $WINNER != "winner" ]]
  then
    # get/check team_id
    TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
     # if not found
    if [[ -z $TEAM_ID ]]
    then
    # insert team name
    INSERT_TEAM_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$WINNER')")
    fi
  fi
  if [[ $OPPONENT != "opponent" ]]
  then
    # get/check team_id
    TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
     # if not found
    if [[ -z $TEAM_ID ]]
    then
    # insert team name
    INSERT_TEAM_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$OPPONENT')")
    fi
  fi
done
#insert games
echo -e "populating games..."
cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS
  do
    #get winner_id and opponent_id
    if [[ $WINNER != "winner" ]]
    then
    WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
    OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
    INSERT_ROW_RESULT=$($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES($YEAR, '$ROUND', $WINNER_ID, $OPPONENT_ID, $WINNER_GOALS, $OPPONENT_GOALS)")
    fi
done
echo -e "done"
END=`date +%s`
RUNTIME=$((END-START))
echo "Completed in $RUNTIME seconds"