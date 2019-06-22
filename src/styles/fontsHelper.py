import os
import re

path = '/Users/frostzyh/Desktop/projects/mxcmsite/static/fonts'
files = []
# Store file name with its path in the list.
for r, d, f in os.walk(path):
    for file in f:
        if '.ttf' in file:
            dirName = os.path.relpath(r, '/Users/frostzyh/Desktop/projects/mxcmsite/')
            filePath= os.path.join(dirName,file)
            files.append([file,filePath])

# Used to remove non-alphabet characters. such as '-'
regex = re.compile('[^a-zA-Z]')

# Used to generate import statements
for name, path in files:
    name = regex.sub('', name.split('.')[0])
    print('import', name, 'from', "'../../" + path + "';")

# Used to list all font names
for name, _ in files:
    name = regex.sub('', name.split('.')[0])
    print(name + ',')