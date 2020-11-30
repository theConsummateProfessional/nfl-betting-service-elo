from urllib.request import urlopen as u_req
from bs4 import BeautifulSoup as soup 
import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from webdriver_manager.chrome import ChromeDriverManager
import requests
import os

def parse(url):
	service = Service('/usr/local/bin/chromedriver')
	service.start()
	driver = webdriver.Chrome(ChromeDriverManager().install())
	driver.get(url)
	time.sleep(120)
	source_code = driver.page_source
	driver.quit()
	return source_code


for week in range(17):
	if(week == 0 or week == 1 or week == 2 or week == 3 or week == 4 or week == 5 or week == 6 or week == 7 or week == 8 or week == 9 or week == 10 or week == 11 or week == 12 or week == 13 or week == 14 or week == 15):
		continue
	directory = '/Users/patrickhood/Development/elo/backend/scripts/2019/week/' + str(week + 1) + '/boxscores'
	game_data = []
	games = {}

	individual_games = {}

	games['year'] = 2019
	games['week'] = week + 1
	games['games'] = game_data
	
	for filename in os.listdir(directory):
		print(filename)
		with open('/Users/patrickhood/Development/elo/backend/scripts/2019/week/' + str(week + 1) + '/boxscores/' + filename, 'r') as f:
			page_html = f.read()
		page_soup = soup(page_html, "lxml")

		stats = page_soup.findAll("table", {"id": "team_stats"})
		teams = page_soup.findAll("table", {"class": "linescore nohover stats_table no_freeze"})
		date = page_soup.findAll("div", {"class": "scorebox_meta"})
		over_under = page_soup.findAll("table", {"id": "game_info"})
		scores = page_soup.findAll("div", {"class": "scorebox"})
		#print(container)

		scores = scores[0].findAll("div", {"class": "score"})

		teams = teams[0].findAll('a')
		print(teams[2].text)
		if(teams[2].text.count(' ') == 2):
			away_name = teams[2].text.split(' ')
			away_name[0] = away_name[0] + ' ' + away_name[1]
			away_name[1] = away_name[2]
		else:
			away_name = teams[2].text.split(' ')

		date = date[0].findAll("div")
		date = date[0].text + ' ' + date[1].text.replace('Start Time: ', '')
		individual_games['timestamp'] = date

		individual_games['away_team_city'] = away_name[0]
		individual_games['away_team_mascot'] = away_name[1]

		if(teams[5].text.count(' ') == 2):
			home_name = teams[5].text.split(' ')
			home_name[0] = home_name[0] + ' ' + home_name[1]
			home_name[1] = home_name[2]
		else:
			home_name = teams[5].text.split(' ')

		individual_games['home_team_city'] = home_name[0]
		individual_games['home_team_mascot'] = home_name[1]

		print(scores)
		print(scores[0].text)
		print(scores[1].text)
		individual_games['home_team_score'] = int(scores[0].text)
		individual_games['away_team_score'] = int(scores[1].text)

		vis_stats = stats[0].findAll("td", {"data-stat": "vis_stat"})
		home_stats = stats[0].findAll("td", {"data-stat": "home_stat"})

		individual_games['away_team_first_downs'] = int(vis_stats[0].text)
		individual_games['home_team_first_downs'] = int(home_stats[0].text)

		away_rush_list = vis_stats[1].text.split('-')
		home_rush_list = home_stats[1].text.split('-')
		individual_games['home_team_rush_attempts'] = int(home_rush_list[0])
		individual_games['away_team_rush_attempts'] = int(away_rush_list[0])
		individual_games['home_team_rush_yards'] = int(home_rush_list[1])
		individual_games['away_team_rush_yards'] = int(away_rush_list[1])
		individual_games['home_team_rush_touchdowns'] = int(home_rush_list[2])
		individual_games['away_team_rush_touchdowns'] = int(away_rush_list[2])

		away_pass_list = vis_stats[2].text.split('-')
		home_pass_list = home_stats[2].text.split('-')
		individual_games['home_team_completions'] = int(home_pass_list[0])
		individual_games['away_team_completions'] = int(away_pass_list[0])
		individual_games['home_team_pass_attempts'] = int(home_pass_list[1])
		individual_games['away_team_pass_attempts'] = int(away_pass_list[1])
		individual_games['home_team_pass_yards'] = int(home_pass_list[2])
		individual_games['away_team_pass_yards'] = int(away_pass_list[2])
		individual_games['home_team_pass_touchdowns'] = int(home_pass_list[3])
		individual_games['away_team_pass_touchdowns'] = int(away_pass_list[3])

		away_sack_list = vis_stats[3].text.split('-')
		home_sack_list = home_stats[3].text.split('-')

		individual_games['home_team_sacks'] = int(home_sack_list[0])
		individual_games['away_team_sacks'] = int(away_sack_list[0])

		individual_games['home_team_yards'] = int(home_stats[5].text)
		individual_games['away_team_yards'] = int(vis_stats[5].text)

		individual_games['home_team_turnovers'] = int(home_stats[7].text)
		individual_games['away_team_turnovers'] = int(vis_stats[7].text)

		home_pen_list = home_stats[8].text.split('-')
		away_pen_list = vis_stats[8].text.split('-')

		individual_games['home_team_penalties'] = int(home_pen_list[0])
		individual_games['away_team_penalties'] = int(away_pen_list[0])
		individual_games['home_team_penalty_yards'] = int(home_pen_list[1])
		individual_games['away_team_penalty_yards'] = int(away_pen_list[1])

		home_third_list = home_stats[9].text.split('-')
		away_third_list = vis_stats[9].text.split('-')

		individual_games['home_team_third_down_percentage'] = round(float(home_third_list[0]) / float(home_third_list[1]), 2)
		individual_games['away_team_third_down_percentage'] = round(float(away_third_list[0]) / float(away_third_list[1]), 2)

		home_time_list = home_stats[11].text.split(':')
		away_time_list = vis_stats[11].text.split(':')

		home_seconds = str(round(float(home_time_list[1])/60, 2))
		away_seconds = str(round(float(away_time_list[1])/60,2))
		home_seconds = home_seconds.strip('0')
		away_seconds = away_seconds.strip('0')

		individual_games['home_team_time_of_possession'] = float(home_time_list[0] + home_seconds)
		individual_games['away_team_time_of_possession'] = float(away_time_list[0] + away_seconds)

		is_dome = over_under[0].findAll('tr', {'data-row': '1'})
		if("Won OT Toss" in is_dome[0].text):
			is_dome = over_under[0].findAll('tr', {'data-row': '2'})
			if("outdoors" in is_dome[0].text):
				favorite = over_under[0].findAll('tr', {'data-row': '7'})
				over_under = over_under[0].findAll('tr', {'data-row': '8'})
			else:
				favorite = over_under[0].findAll('tr', {'data-row': '6'})
				over_under = over_under[0].findAll('tr', {'data-row': '7'})
		else:
			if("outdoors" in is_dome[0].text and "Weather" in over_under[0].findAll('tr', {'data-row': '5'})[0].text):
				favorite = over_under[0].findAll('tr', {'data-row': '6'})
				over_under = over_under[0].findAll('tr', {'data-row': '7'})
			else:
				favorite = over_under[0].findAll('tr', {'data-row': '5'})
				over_under = over_under[0].findAll('tr', {'data-row': '6'})
		favorite = favorite[0].text.replace('Vegas Line', '')
		over_under = over_under[0].text.replace('Over/Under', '')
		over_under = over_under.split(' ')

		if(favorite.count(' ') == 3):
			favorite = favorite.split(' ')
			favorite[0] = favorite[0] + ' ' + favorite[1]
			favorite[1] = favorite[2]
			favorite[2] = favorite[3]
		else:
			favorite = favorite.split(' ')

		individual_games['over_under'] = float(over_under[0])
		individual_games['betting_line'] = {'betting_number': float(favorite[2]), 'favored_team': favorite[1]}
		game_data.append(individual_games.copy())
		games['games'] = game_data
		print(week + 1)


	response = requests.post('http://localhost:3000/games/', json=games)

print(response.json())