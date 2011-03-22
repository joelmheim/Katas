describe("Tennis", function() {
  var tennis

  beforeEach(function() {
    tennis = new Tennis()
  })

  describe("regular match", function() {
    
    it("should return love - love when score is 0 - 0", function() {
      tennis.game(0,0)
      expect(tennis.score()).toEqual('love - love')
    })

    it("should return 'love - fifteen' when score is 0 - 1", function() {
        tennis.game(0,1)
        expect(tennis.score()).toEqual('love - fifteen')
    })

    it("should return 'fifteen - love' when score is 1 - 0", function() {
        tennis.game(1,0)
        expect(tennis.score()).toEqual('fifteen - love')
    })

  })
})