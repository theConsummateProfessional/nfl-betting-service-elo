from urllib.request import urlopen as u_req
from bs4 import BeautifulSoup as soup 
import json

week = 1
data = {}

while(week < 18):
	data['week_' + str(week)] = []

	#Eventually add in week 
	url = 'https://www.pro-football-reference.com/years/2019/week_' + str(week) + '.htm'

	#print(url)

	u_client = u_req(url)
	page_html = u_client.read()
	u_client.close()

	page_soup = soup(page_html, "html.parser")

	containers = page_soup.findAll("div", {"class": "game_summary expanded nohover"})

	print(len(containers))

	for x in range(len(containers)):
		contain = containers[x]
		# contain = contain.findAll("table"), {"class": "teams"}
		# print(contain)

		# print("next")

		# winner = contain.findAll("tr", {"class": "winner"})
		# print(winner)

		winner = contain.findAll("tr", {"class": "winner"})
		loser = contain.findAll("tr", {"class": "loser"})
		draw = contain.findAll("tr", {"class": "draw"})

		if(len(winner) > 0):
			print("Winner: ")
			print(winner[0].td.a.text)

			print("Loser: ")
			print(loser[0].td.a.text)
			print("")

			data['week_' + str(week)].append({
				'winner': winner[0].td.a.text,
				'loser': loser[0].td.a.text
				})
		else:
			print("draw: ")
			print(draw[0].td.a.text)
			print(draw[1].td.a.text)
			print("")
			data['week_' + str(week)].append({
				'draw_team_1': draw[0].td.a.text,
				'draw_team_2': draw[1].td.a.text
				})

	week = week + 1

with open('data.json', 'w') as outfile:
	json.dump(data, outfile)