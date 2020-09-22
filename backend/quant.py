from elo_class import elo
import json

K_FACTOR = 32 #Constant

global data
teams_dict = {}
week = 0

with open('teams.json') as json_file:
	data = json.load(json_file)
	for t in data['teams']:
		teams_dict.update({t : 1400})

with open('data.json') as json_file:
	data = json.load(json_file)

print(data['week_1'][0]['winner'])

for x in range(17):
	for y in range(len(data['week_' + str(x + 1)])):
		
		if(data['week_' + str(x + 1)][y]['winner']):
			elo_rating = elo()
			print(teams_dict[data['week_' + str(x + 1)][y]['winner']])
			print(teams_dict[data['week_' + str(x + 1)][y]['loser']])
			print(elo_rating.get_expectation(teams_dict[data['week_' + str(x + 1)][y]['winner']], teams_dict[data['week_' + str(x + 1)][y]['loser']]))

			expected = elo_rating.get_expectation(teams_dict[data['week_' + str(x + 1)][y]['winner']], teams_dict[data['week_' + str(x + 1)][y]['loser']])

			teams_dict[data['week_' + str(x + 1)][y]['winner']] = elo_rating.modify_rating(teams_dict[data['week_' + str(x + 1)][y]['winner']], expected, 1, K_FACTOR)
			teams_dict[data['week_' + str(x + 1)][y]['loser']] = elo_rating.modify_rating(teams_dict[data['week_' + str(x + 1)][y]['loser']], expected, 0, K_FACTOR)

			print(teams_dict[data['week_' + str(x + 1)][y]['winner']])
			print(teams_dict[data['week_' + str(x + 1)][y]['loser']])


print(teams_dict)
print(teams_dict['Cincinnati Bengals'])
print(sorted(teams_dict.items(), key = lambda x: x[1]))

print(elo_rating.get_expectation(teams_dict['Kansas City Chiefs'], teams_dict['San Francisco 49ers']))









