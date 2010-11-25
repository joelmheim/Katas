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
    return "deuce" if both_players_have :forty and score_is_equal
    return "advantage #{leading_player}" if both_players_have :forty and 
                                   one_player_leads_by_one
    return "#{leading_player} wins" if one_player_has_at_least_four_points and
                                        at_least_two_points_more_than_opponent
    return pretty(@score_player_one) + " - " + pretty(@score_player_two)
  end

  def one_player_has_at_least_four_points
    @score_player_one >= 4 or @score_player_two >= 4
  end

  def at_least_two_points_more_than_opponent
    @score_player_one >= @score_player_two + 2 or
      @score_player_one +2 <= @score_player_two
  end

  def leading_player
    return "player one" if player_one_leads
    return "player two" if player_two_leads
  end

  def one_player_leads_by_one
    (player_one_leads and @score_player_one == @score_player_two + 1) or
      (player_two_leads and @score_player_one + 1 == @score_player_two)
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
