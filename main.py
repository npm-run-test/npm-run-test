import string
import time

text = 'Hello, Everyone!'
temp = ''

for char in text:
    for i in string.printable:
        if i == char or char == ' ':
            time.sleep(0.002)
            print(temp+i)
            temp += char
            break
        else:
            time.sleep(0.02)
            print(temp+i)