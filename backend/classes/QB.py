class quarterback:
	def __init__(
		self,
		first_name, 
		last_name, 
		current_team,
		year, 
		total_passing_yards,
		total_rushing_yards,
		total_passing_tds,
		total_rushing_tds,
		turnovers
		):

		self.first_name = first_name
		self.last_name = last_name
		self.current_team = current_team
		self.year = year
		self.total_rushing_yards = total_rushing_yards
		self.total_passing_yards = total_passing_yards
		self.total_passing_tds = total_passing_tds
		self.total_rushing_tds = total_rushing_tds
		self.turnovers = turnovers
		self.total_yards = total_rushing_yards + total_passing_yards
		self.total_tds = total_passing_tds + total_rushing_tds

	def __str__(self):
		return """
First Name:          %s
Last Name:           %s
Current Team:        %s
Year:                %s
Total Passing Yards: %s
Total Rushing Yards: %s
Total Passing TDs:   %s
Total Rushing TDs:   %s
Total Yards:         %s
Total TDs:           %s
Total Turnovers:     %s

				""" % (self.first_name, self.last_name,
					   self.current_team, self.year,
					   self.total_passing_yards, self.total_rushing_yards,
					   self.total_passing_tds, self.total_rushing_tds,
					   self.total_yards, self.total_tds,
					   self.turnovers)









