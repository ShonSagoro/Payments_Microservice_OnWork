sudo apt update -y && sudo apt upgrade -y && sudo apt-get update && sudo apt-get install -y ca-certificates curl && sudo install -m 0755 -d /etc/apt/keyrings && sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc && sudo chmod a+r /etc/apt/keyrings/docker.asc && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null && sudo apt-get update && sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin && sudo groupadd docker && sudo usermod -aG docker $USER && newgrp docker
sudo usermod -aG docker $USER && newgrp docker
sudo apt update
sudo apt install nginx -y
sudo apt-get remove certbot
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'
sudo certbot certonly --nginx
sudo certbot renew --dry-run
sudo nano /etc/nginx/sites-available/dns_onwork
sudo ln -s /etc/nginx/sites-available/dns_onwork /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
sudo nano /etc/nginx/sites-available/dns_onwork
sudo nginx -t
sudo systemctl restart nginx
docker stop usera && docker rm usera && docker rmi user
docker build -t user . && docker run -d -p 3001:3001 --name usera user
ls
sudo rm -r app/
cd app
docker stop usera && docker rm usera && docker rmi user
docker build -t user . && docker run -d -p 3001:3001 --name usera user
docker stop usera && docker rm usera && docker rmi user
docker build -t user . && docker run -d -p 3001:3001 --name usera user
docker stop usera && docker rm usera && docker rmi user
docker build -t user . && docker run -p 3001:3001 --name usera user
sudo rm -r src/
ls
docker stop usera && docker rm usera && docker rmi user
docker build -t user . && docker run -p 3001:3001 --name usera user
docker stop usera && docker rm usera && docker rmi user
docker build -t user . && docker run -d -p 3001:3001 --name usera user
cd app/
docker build -t user . && docker run -p 3001:3001 --name usera user
sudo nano /etc/nginx/sites-available/dns_onwork
cd app/
ls src/
sudo nginx -t
sudo systemctl restart nginx
\
docker stop usera && docker rm usera && docker rmi user
docker build -t user . && docker run -p 3001:3001 --name usera user
cd app/
docker stop usera && docker rm usera && docker rmi user
docker build -t user . && docker run -p 3001:3001 --name usera user
