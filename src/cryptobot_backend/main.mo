import Random "mo:base/Random";

actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
