from collections import Counter
import string
def build_histogram(text):
    char_counts = Counter(char for char in text if char not in string.whitespace)
    sorted_chars = sorted(char_counts)
    max_count = max(char_counts.values())
    for i in range(max_count, 0, -1):
        for char in sorted_chars:
            count = char_counts[char]
            print('#' if count >= i else ' ', end=' ')
        print()
    for char in sorted_chars:
        print(char, end=' ')

encrypted_text = input()
build_histogram(encrypted_text)