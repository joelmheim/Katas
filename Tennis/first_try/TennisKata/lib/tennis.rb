# To change this template, choose Tools | Templates
# and open the template in the editor.
class Tennis
  def initialize
    @score_player_one = 0
    @score_player_two = 0
  end

  def play balls_player_one, balls_player_two
    balls_player_one.times { score_player_one }
    balls_player_two.times { score_player_two }
  end

  def score_player_one
    @score_player_one += 1
  end

  def score_player_two
    @score_player_two += 1
  end
  
  def score
    return "player one wins" if @score_player_one == 4 and @score_player_two == 0
    return "player two wins" if @score_player_one == 0 and @score_player_two == 4
    return "deuce" if both_players_have :forty and score_is_equal
    return "advantage #{leading_player}" if both_players_have :forty and one_player_leads
    return pretty(@score_player_one) + " - " + pretty(@score_player_two)
  end

  def leading_player
    return "player one" if player_one_leads
    return "player two" if player_two_leads
  end

  def one_player_leads
    player_one_leads or player_two_leads
  end

  def player_one_leads
    @score_player_one > @score_player_two
  end

  def player_two_leads
    @score_player_one < @score_player_two
  end

  def score_is_equal
    @score_player_one == @score_player_two
  end

  def both_players_have score
    score = 3 if score == :forty
    @score_player_one >= score and @score_player_two >= score
  end

  def pretty balls
    return "love" if balls == 0
    return "fifteen" if balls == 1
    return "thirty" if balls == 2
    return "forty" if balls == 3
  end
end
