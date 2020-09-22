class Defense:
	def __init__(
		self,
		team,
		year,
		points,
		yards,
		points_per_drive,
		yards_per_drive,
		turnovers
		):

		self.team = team
		self.year = year
		self.points = points
		self.yards = yards
		self.points_per_drive = points_per_drive
		self.yards_per_drive = yards_per_drive
		self.turnovers = turnovers

	def __str__(self):
		return """
Team: 	          %s
Year: 	          %s
Points:           %s
Yards: 	          %s
Points Per Drive: %s
Yards Per Drive:  %s
Turnovers:        %s
			   """ % (self.team, self.year, 
			   		  self.points, self.yards,
			   		  self.points_per_drive, self.yards_per_drive,
			   		  self.turnovers)

