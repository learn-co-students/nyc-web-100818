require 'pry'

# Orange - modified lines of code
# Green - added lines of code
# Red - removed lines of code

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

# # knows the number of points scored by each player
# def num_points_scored(players_name)
#   # iterate through the hash until you get to the player's name
#     # problems: nested hash, need to see the whole hash to get there
#     # first go through the entire hash, and go level by level
#
#   # see if the players_name equal;s what you're trying to test
#   # include?
#   # find vs select
#     # find will return one thing
#     # select will return an array of thing(s)
#     # based on a matching condition
#     # loop through ALL the players
#     # if game_hash[:home][:players] == players_name
#     # else
#     #   game_hash[:away][:players]
#     # get all the players
#     home_players = game_hash[:home][:players]
#     away_players = game_hash[:away][:players]
#     all_players = home_players + away_players
#
#     # player_hash, player_stats, found_player
#     found_player = all_players.find do |player|  # player, stat,
#       player[:player_name] == players_name
#     end
#
#     found_player[:points]
#
#     # binding.pry
#   # return the number of points
#
#
#
# end

# knows the number of points scored by each player
def num_points_scored(players_name)
    # first two steps should maybe be a separate method
    # felt like, at first difficult, but seems simple now
    # pseudocode
    found_player = find_player(players_name)
    found_player[:points]
end

# knows the shoe size of each player
def shoe_size(players_name)
  # same thing as num_points_scored
  # but change that last line

  # iterate through the hash until you get to the player's name
  # define this code as another method, and just call it

  found_player = find_player(players_name)
  # return that player's shoe size
  found_player[:shoe]

  # find_player(players_name)[:shoe]

end

# merging all the players into a single array
def all_players # constructor, players, get_all_players, all_players, merge_game_hash_players
  home_players = game_hash[:home][:players]
  away_players = game_hash[:away][:players]
  home_players + away_players
end

# do exactly one thing - one job
def find_player(players_name)
  all_players.find do |player|
    player[:player_name] == players_name
  end
end

# each, map, select

instructors = [
    { name: 'Mike', cats: true, age: 9001 },
    { name: 'Laura', cats: false, age: 1 },
    { name: 'Steven', cats: true, age: 2 },
    { name: 'Jeff', cats: false, age: 26 }
  ]

# select
# pick out all the cat people
# return an array of two objects (the cat people)
def cat_people(instructors)
  instructors.select do |instructor|
    instructor[:cats] # == true
  end
end

# map
# get everyone's names in an array (so an array of strings)
def instructor_names(instructors)
  # 4 instructors
  # returning array will have 4 items
  instructors.map do |instructor|
    instructor[:name]
  end
end

def average_age(instructors)
# each
# get the average age of your instructors
  # collect the instructor ages
    # sum them up
      # variable called total_age
      # then go through them and add to total_age
  total_age = 0
  instructors.each do |instructor|
    total_age += instructor[:age]
  end
  # average them
    # divide it
  total_age.to_f / instructors.size # length, count
  # what is an average? => sum / the number of things
end

def find_instructor(instructors, instructor_name)
  instructors.find do |instructor|
    instructor[:name] == instructor_name
  end
end

# reduce will do EVERYTHING!


# select, map, find
# write them all using EACH

binding.pry
# binding.pry
