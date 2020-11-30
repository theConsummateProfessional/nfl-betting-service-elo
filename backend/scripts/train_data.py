import pickle

name = 'scores_regressor.ai'
file = open(name, 'rb')

data = pickle.load(file)

file.close()