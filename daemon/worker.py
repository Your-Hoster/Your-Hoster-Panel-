# worker.py
import os
import time
import subprocess

def start_server():
    # Startet den Server (z.B. ein lokaler Prozess oder ein Docker-Container)
    subprocess.Popen(["docker", "run", "-d", "--name", "mc-server", "-p", "25565:25565", "itzg/minecraft-server"])
    print("Server gestartet")

def stop_server():
    # Stoppt den Server
    os.system("docker stop mc-server && docker rm mc-server")
    print("Server gestoppt")

# Beispielhafte Endlosschleife
while True:
    # Überprüfe den Status und andere notwendige Prozesse
    time.sleep(5)
