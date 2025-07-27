import json
import os

books_file = 'books.json'

# Load existing books if file exists
if os.path.exists(books_file):
    with open(books_file, 'r') as f:
        books = json.load(f)
else:
    books = []

new_books = []

while True:
    print("\n📚 Enter book details:")
    title = input("Enter book title: ")
    author = input("Enter author: ")
    genre = input("Enter genre: ")
    rating = float(input("Enter rating (e.g., 4.5): "))
    cover = input("Enter cover image path (e.g., images/cover.jpg): ")
    favlines = input("Enter your favorite lines: ")

    new_books.append({
        "title": title,
        "author": author,
        "genre": genre,
        "rating": rating,
        "cover": cover,
        "favlines": favlines
    })

    add_more = input("Do you want to add another book? (yes/no): ").strip().lower()
    if add_more != 'yes':
        break

books.extend(new_books)

# Save back to file
with open(books_file, 'w') as f:
    json.dump(books, f, indent=2)

print(f"\n✅ {len(new_books)} books added successfully to books.json!")
