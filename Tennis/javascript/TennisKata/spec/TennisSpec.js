describe("Tennis", function() {
  var tennis;

  beforeEach(function() {
    tennis = new Tennis();
  });

  describe("regular match", function() {
    
    it("should return love - love when score is 0 - 0", function() {
      expect(tennis.score).toEqual("love - love");
    });

  });
});