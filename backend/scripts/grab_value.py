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

