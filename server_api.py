import subprocess
from bottle import run, post, request, response, get, route

@route('/<path>',method = 'GET')
def process(path):
    return subprocess.check_output(['python3',path+'.py'],shell=True)

run(host='localhost', port=8080, debug=True)