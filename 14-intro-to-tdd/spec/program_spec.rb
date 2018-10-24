require_relative '../program.rb'

# 1. true <== Happy Path
# 2. false <== Sad Path
# 3. Edge Cases <=== nil, if it exists? valid input? return type?
describe "is_palindrome?" do
  it "should return true if the word is a palindrome" do
    expect(is_palindrome?("racecar")).to eq(true)
    expect(is_palindrome?("level")).to eq(true)
    expect(is_palindrome?("redivider")).to eq(true)
  end

  it "should return false if the word is not a palindrome" do
    expect(is_palindrome?("person")).to eq(false)
    expect(is_palindrome?("Sydney")).to eq(false)
    expect(is_palindrome?("anything else")).to eq(false)
  end

  # a ton of edge case tests

  # you ask Zordon
  it "should expect ArgumentError if the word is not a String" do
    expect { is_palindrome?(1) }.to raise_error(ArgumentError)
    expect { is_palindrome?(true) }.to raise_error(ArgumentError)
    expect { is_palindrome?([1,2,3]) }.to raise_error(ArgumentError)
    expect { is_palindrome?({ key: "value" }) }.to raise_error(ArgumentError)
    # wrong arguement error <===
    # syntax error
    # prints out not a string
  end

  # Capitalization
  it "should return true if the word has capitalization and is a palindrome" do
    expect(is_palindrome?("RaceCar")).to eq(true)
    expect(is_palindrome?("LeveL")).to eq(true)
  end

  it "should return false if the word has capitalization and is not a palindrome" do
    expect(is_palindrome?("Blah")).to eq(false)
    expect(is_palindrome?("Blaaaaaahhh")).to eq(false)
  end

  # a man a plan a canal panama
  # god lived as a devil dog
  it "should return true if the word is a palindrome sentence" do
    expect(is_palindrome?("a man a plan a canal panama")).to eq(true)
    expect(is_palindrome?("god lived as a devil dog")).to eq(true)
  end

  # separate test for sentences that are palindomes that have capitalization

  # punctuation
  it "should return false if the word has punctuation" do
    expect(is_palindrome?("a man a plan a canal, panama")).to eq(false)
    expect(is_palindrome?("god lived as a devil dog.")).to eq(false)
  end

  # length is greater than 2 == not a real word
  it "should return false if the word is a one letter word or blank" do
    expect(is_palindrome?("c")).to eq(false)
    expect(is_palindrome?("")).to eq(false)
    expect(is_palindrome?("a")).to eq(false)
    expect(is_palindrome?(" ")).to eq(false)
  end
end
