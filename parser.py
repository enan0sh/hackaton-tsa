from bs4 import BeautifulSoup
import requests
from bottle import run, post, request, response, get, route
from json import dumps

table_content = []
def parse():
    url = 'https://www.tsa.gov/coronavirus/passenger-throughput'
    NO_PROXY = {
        'no': 'pass',
    }
    page = requests.get(url,proxies=NO_PROXY)
    soup = BeautifulSoup(page.content, "html.parser")
    rows = soup.find_all("table")[0].find("tbody").find_all("tr")

    for row in rows:
        cells = row.find_all("td")
        json_object = {'date':cells[0].get_text().strip(), 'travel_21':cells[1].get_text().strip(), 'travel_20':cells[2].get_text().strip(), 'travel_19': cells[3].get_text().strip()}
        table_content.append(json_object)
    return table_content

@route('/parser',method = 'GET')
def process():
    response.content_type = 'application/json'
    data = parse()
    return dumps(data)

run(host='localhost', port=4200, debug=True)