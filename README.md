## Getting started

This README covers the setup for testing purposes only.

### 1. Clone the Repo

```bash
git clone https://github.com/maxonlinux/nooro-take-home-next.git
cd nooro-take-home-next
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the project

```bash
npm run build
```

### 4. Run the project

```bash
npm run start
```

## Deployment

This guide covers only minimal and basic deployment instructions. For real production deployment, please consider configuring other important things like SSL, firewall, etc.

### 1. Configure your DNS records

#### Create A record that points to ypur server IP (example below)

```text
A your-domain.com 192.168.1.100
```

### 2. Install and Setup Nginx

#### Install Nginx for your OS

On Ubuntu or Debian, install Nginx using:

```bash
sudo apt update
sudo apt install nginx
```

For CentOS or RHEL-based systems:

```bash
sudo yum install nginx
```

For other OS pls see the relevant documentation

#### Adjust the firewall (Ubuntu)

```bash
sudo ufw allow 'Nginx Full'
```

#### Check if web server is running

```bash
systemctl status nginx
```

#### Create a new config and open it with `nano`

```bash
sudo nano /etc/nginx/sites-available/your-domain
```

#### Configure Nginx as proxy-pass (example below)

```nginx
  server {
      server_name your-domain;

      location / {
          proxy_pass http://localhost:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
      }

      listen 80;
  }
```

#### Enable your new config

```
sudo ln -s /etc/nginx/sites-available/your-domain /etc/nginx/sites-enabled/
```

#### Check if your config is valid

```bash
sudo nginx -t
```

#### Restart Nginx to apply changes

```bash
sudo systemctl restart nginx
```

### 3. Place the Project on the Server (e.g. to `/home/user/frontend`) and Follow the Steps from Getting Started Section

Follow the steps in the Getting Started section to complete the setup.

### 4. Install PM2 for Process Management

To ensure that your Node.js app runs continuously (even after server restarts), you'll need a process manager like PM2.

#### Install PM2 globally

```bash
npm install -g pm2
```

#### Start your project using PM2

```bash
pm2 start "npm run start" --name NextTodoApp
```

#### Ensure PM2 starts automatically on boot

```bash
pm2 startup
```

#### Save the PM2 process list

```bash
pm2 save
```

#### Check Application Logs with PM2

You can view logs for your application by running

```bash
pm2 logs NextTodoApp
```

## Next Steps

To enable an HTTPS connection with an SSL certificate, you may want to use `Let's Encrypt` with `Certbot` or route your server through a service like `Cloudflare`. These configurations are not covered in this guide. Please refer to the documentation and set them up on your own.
