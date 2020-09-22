from elo_class import elo
K_FACTOR = 30

class team(elo):
    def __init__(self, name, rating):
        self.name = name
        self.rating = rating
        self.actual = 0
        self.expected = 0



