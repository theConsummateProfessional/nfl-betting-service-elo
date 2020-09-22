class running_back:
	def __init__(
		self,
		first_name,
		last_name,
		current_team,
		year,
		total_recieving_yards,
		total_rushing_yards,
		total_recieving_tds,
		total_rushing_tds,
		):

		self.first_name = first_name
		self.last_name = last_name
		self.current_team = current_team
		self.year = year
		self.total_recieving_yards = total_recieving_yards
		self.total_recieving_tds = total_recieving_tds
		self.total_rushing_yards = total_rushing_yards
		self.total_rushing_tds = total_rushing_tds
		self.total_tds = total_rushing_tds + total_recieving_tds
		self.total_yards = total_rushing_yards + total_recieving_yards

	def __str__(self):
		return """
First Name:            %s
Last Name:             %s
Team:                  %s
Year:                  %s
Total Recieving Yards: %s
Total Rushing Yards:   %s
Total Recieving TDs:   %s
Total Rushing TDs:     %s
Total TDs:             %s
Total Yards:           %s

				""" % (self.first_name, self.last_name,
					   self.current_team, self.year,
					   self.total_recieving_yards, self.total_rushing_yards,
					   self.total_recieving_tds, self.total_rushing_tds,
					   self.total_tds, self.total_yards)






