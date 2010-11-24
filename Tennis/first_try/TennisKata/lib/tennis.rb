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
    return "deuce" if @score_player_one >= 3 and @score_player_two >= 3
    return pretty(@score_player_one) + " - " + pretty(@score_player_two)
  end

  def pretty balls
    return "love" if balls == 0
    return "fifteen" if balls == 1
    return "thirty" if balls == 2
    return "forty" if balls == 3
  end
end
