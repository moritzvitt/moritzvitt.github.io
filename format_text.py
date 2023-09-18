import sys

if len(sys.argv) != 3:
    print("Syntax: python format_text.py <input_text> <output_file>")
    sys.exit()
   
input_file = open(sys.argv[1], "r")
lines = input_file.readlines()
input_file.close()

output_file = open(sys.argv[2], "w")
for line in lines:
    line = line.replace("\n", "")
    words = line.split(" ")
    string = ""
    for word in words:
        if word != "":
            string += f"<tmark>{word}</tmark>"
    output_file.write(string + "<br/>\n")