# To change this template, choose Tools | Templates
# and open the template in the editor.

require 'tennis'

describe Tennis do
  before(:each) do
    @tennis = Tennis.new
  end

  describe "score" do
    {
      {:player_one => 0, :player_two => 0} => "love - love",
      {:player_one => 1, :player_two => 0} => "fifteen - love",
      {:player_one => 1, :player_two => 1} => "fifteen - fifteen",
      {:player_one => 2, :player_two => 1} => "thirty - fifteen",
      {:player_one => 2, :player_two => 2} => "thirty - thirty",
      {:player_one => 3, :player_two => 2} => "forty - thirty",
      {:player_one => 0, :player_two => 1} => "love - fifteen",
      {:player_one => 1, :player_two => 2} => "fifteen - thirty",
      {:player_one => 2, :player_two => 3} => "thirty - forty",
      {:player_one => 2, :player_two => 0} => "thirty - love",
      {:player_one => 0, :player_two => 2} => "love - thirty",
      {:player_one => 3, :player_two => 0} => "forty - love",
      {:player_one => 0, :player_two => 3} => "love - forty",
    }.each do | balls, expected_result |
      it "should return '#{expected_result}' when #{balls[:player_one]} - #{balls[:player_two]}" do
        @tennis.play balls[:player_one], balls[:player_two]
        @tennis.score.should eql expected_result
      end
    end
  end

  describe "deuce" do
    {
      {:player_one => 3, :player_two => 3} => "deuce",
      {:player_one => 4, :player_two => 4} => "deuce",
#      {:player_one => 1, :player_two => 1} => "deuce",
#      {:player_one => 2, :player_two => 1} => "deuce",
    }.each do | balls, expected_result |
      it "should return '#{expected_result}' when #{balls[:player_one]} - #{balls[:player_two]}" do
        @tennis.play balls[:player_one], balls[:player_two]
        @tennis.score.should eql expected_result
      end
    end
  end

end

