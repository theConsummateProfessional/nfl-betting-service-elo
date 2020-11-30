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
	time.sleep(15)
	source_code = driver.page_source
	driver.quit()
	return source_code

for week in range(17):
    path = "/Users/patrickhood/Development/elo/backend/scripts/2019/week/" + str(week+1)
    os.mkdir(path)

    path = "/Users/patrickhood/Development/elo/backend/scripts/2019/week/" + str(week+1) + "/boxscores"
    os.mkdir(path)
    page_html = parse("https://www.pro-football-reference.com/years/2019/week_"+str(week + 1)+".htm")
    page_soup = soup(page_html)

    container = page_soup.findAll("div", {"class" : "game_summaries"})
	

    game_links = container[1].findAll("td", {"class": "right gamelink"})
    for singular_game in range(len(game_links)):
        link = game_links[singular_game].find('a')['href']

        url = 'https://www.pro-football-reference.com/'+link
        page_html = parse(url)
        page_soup = soup(page_html, "lxml")

        with open("/Users/patrickhood/Development/elo/backend/scripts/2019/week/"+str(week+1)+link, "w") as f:
            f.write(str(page_soup))