import math

class elo:
	def get_expectation(self, rating_1, rating_2):
		calc = (1.0 /( 1.0 + pow(10, ((rating_2 - rating_1) / 400))))
		return calc

	def modify_rating(self, rating, expected, actual, kfactor):
		calc = (rating + kfactor * (actual - expected))
		return calc

