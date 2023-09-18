import sys

if len(sys.argv) != 3:
    print("Syntax: python format_text.py <input_text> <output_file>")
    sys.exit()
   
input_file = open(sys.argv[1], "r")
lines = input_file.readlines()
input_file.close()

def split_word(word):
    front = ""
    
    for s in word:
        if s.isalpha():
            front += s
        else:
            return front, word[len(front):]
    
    return word, ""

output_file = open(sys.argv[2], "w")
for line in lines:
    line = line.replace("\n", "")
    words = line.split(" ")
    marked_words = []
    for word in words:
        if word != "":
            front, back = split_word(word);
            marked_words.append(f"<tmark>{front}</tmark>{back}")
    output_file.write(" ".join(marked_words) + "<br/>\n")
output_file.close()