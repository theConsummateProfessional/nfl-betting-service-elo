from urllib.request import urlopen as u_req
from bs4 import BeautifulSoup as soup 
import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

def parse(url):
	service = Service('/usr/local/bin/chromedriver')
	service.start()
	driver = webdriver.Remote(service.service_url)
	driver.get(url)
	source_code = driver.page_source
	driver.quit()
	return source_code

url = 'https://www.pro-football-reference.com/players/B/BradTo00.htm'

page_html = parse(url)

page_soup = soup(page_html, "lxml")
containers = page_soup.findAll("tr", {"id" : "rushing_and_receiving.2019"})


containers = page_soup.findAll("tr", {"id" : "passing.2019"})


containers = containers[0]

yards = containers.findAll("td", {"data-stat" : "pass_yds"})
tds = containers.findAll("td", {"data-stat" : "pass_td"})

print('Passing Yards: ' + yards[0].text)
print('Passing Touchdowns: ' + tds[0].text)

#containers = page_soup.findAll("tr", {"id" : "rushing_and_receiving.2019"})
page_soup = soup(page_html, "lxml")
containers = page_soup.findAll("tr", {"id": "rushing_and_receiving.2019"})
#print(page_html)


rushing_yards = containers[0].findAll("td", {"data-stat" : "rush_yds"})
rush_tds = containers[0].findAll("td", {"data-stat": "rush_td"})

print('Rushing Yards: ' + rushing_yards[0].text)
print('Rushing Tds: ' + rush_tds[0].text)

total_yards = int(yards[0].text) + int(rushing_yards[0].text)
total_tds = int(tds[0].text) + int(rush_tds[0].text)
print('Total Yards: ' + str(total_yards))
print('Total Touchdowns ' + str(total_tds))