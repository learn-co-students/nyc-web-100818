require 'rest-client'
require 'json'
require 'pry'

# Feature Set => what makes sense for a CLI
# 1. Look for Highest Rated Books
# 2. Look for new books => by date created
# 3. Print out Synopsis
# 4. search for books of a particular genre or author
# 5. print out the books

# response = RestClient.get 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'
# hash = JSON.parse(response)
# books = hash["items"]
#
#
# book_info = books[2]["volumeInfo"]
# title = book_info["title"]
# authors =  book_info["authors"] # this is an array
# synopsis = book_info["description"]
# genres = book_info["categories"] # also an array

def get_response(genre) # author
  RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{genre}"
end

def json(response)
  JSON.parse(response)
end

def books(hash)
  hash["items"]
end

def print_books(books)
  # iterate through all the books
  # at each index pull out the title from that hash
  # each or map???
    # each will force us to create a new array to hold them
    # map will give us a new array with the titles in it
  books.each do |book|
    # print out information about the book
    book_info = book["volumeInfo"]
    print_book(book_info)
    puts "\n"
  end
end

def print_book(book_info)
  puts "Title: '#{book_info["title"]}'"
  # TODO: what about more than 2 authors? or other things like oxford commas?
  # binding.pry
  if !book_info["authors"]
    puts "\tAuthors: Anonymous"
  else
    puts "\tAuthors: #{book_info["authors"].join(" and ")}" # this is an array <==
  end
  # puts book_info["description"]

  # TODO: one line it!
  if !book_info["categories"] # book_info["categories"] == nil
    puts "\tGenres:                                "
  else
    puts "\tGenres: #{book_info["categories"].join(" / ")}" # also an array
  end

  puts "Average Rating: #{book_info['averageRating']}"
end

def delimiter(number)
  puts "\n"
  puts '*' * number
  puts "\n"
end

# main
def run # run, run genre
  # user input
  puts "Enter a genre:"
  user_input = gets.chomp
  response = get_response(user_input)
  hash = json(response)
  b = books(hash)

  sorted_books_by_rating = b.sort_by do |book|
    # binding.pry
    if !book['volumeInfo']['averageRating']
      0
    else
      book['volumeInfo']['averageRating']
    end
  end
  # binding.pry
  highest_rated_book = sorted_books_by_rating.last['volumeInfo']
  puts "This is the highest rated book:"
  print_book(highest_rated_book)
  delimiter(30)
  print_books(b)
end

continue = 'yes'
while continue == "yes"
  run
  puts "Continue????? (yes/no)"
  continue = gets.chomp
end

# binding.pry
