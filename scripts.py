import subprocess

def build():
    # List out all dependencies
    subprocess.run(['pip', 'freeze', '>', 'requirements.txt'])
    # Run Build Command
    subprocess.run(['pip', 'install', '-r', 'requirements.txt'])
    
def run_dev_server():
    subprocess.run(['python', 'manage.py', 'runserver', '5000'], cwd='app')

if __name__ == '__main__':
    run_dev_server()