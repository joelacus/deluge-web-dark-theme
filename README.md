# Deluge Web UI Dark Theme + Responsive Mobile UI
A modern dark theme for Deluge Web UI with custom accent colours and updated icons.

Automatically uses an optimised view for mobile devices with small screens.

Works with [Deluge 2](#deluge-2), [Deluge 1.3](#deluge-1), [Docker](#deluge-docker), [TrueNAS](#deluge-truenas), and [Windows](#windows).

![Alt text](screenshot.png?raw=true "Optional Title")

## INSTALL

## Deluge 2

1) Stop deluge-web:
```
pkill deluge-web
```
2) (optional) Backup old files:
```
sudo mv /usr/lib/python3/dist-packages/deluge/ui/web/icons/ /usr/lib/python3/dist-packages/deluge/ui/web/icons.bak & sudo mv /usr/lib/python3/dist-packages/deluge/ui/web/images/ /usr/lib/python3/dist-packages/deluge/ui/web/images.bak
```

3) Install the theme:
```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C /usr/lib/python3/dist-packages/deluge/ui/web/
```

4) Edit web.conf to set the theme. Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`
```
nano ~/.config/deluge/web.conf
```
&nbsp;&nbsp;&nbsp;If the web.conf file is not there, it might be here instead:
```
sudo nano /var/lib/deluge/.config/deluge/web.conf
```

&nbsp;&nbsp;&nbsp;If a file called `web.conf~` exists, delete it. This will overwrite web.conf when deluge-web is restarted.

5) Edit `index.html` 
```
sudo nano /usr/lib/python3/dist-packages/deluge/ui/web/index.html
```
&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header:
```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```
&nbsp;&nbsp;&nbsp;This prevents scaling issues on mobile devices.
  

6) Restart deluge-web
```
deluge-web
```

7) (optional) You can change the accent colour by editing this file:
```
sudo nano /usr/lib/python3/dist-packages/deluge/ui/web/themes/css/xtheme-dark.css
```
&nbsp;&nbsp;&nbsp;Replace the values in the line `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

8) Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Deluge 1

1) Stop deluge-web:
```
pkill deluge-web
```
2) (optional) Backup old files:
```
sudo mv /usr/lib/python2.7/dist-packages/deluge/ui/web/icons/ /usr/lib/python2.7/dist-packages/deluge/ui/web/icons.bak & sudo mv /usr/lib/python2.7/dist-packages/deluge/ui/web/images/ /usr/lib/python2.7/dist-packages/deluge/ui/web/images.bak
```

3) Install the theme:
```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C /usr/lib/python2.7/dist-packages/deluge/ui/web/
```

4) Edit web.conf to set the theme. Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`
```
nano ~/.config/deluge/web.conf
```
&nbsp;&nbsp;&nbsp;If the web.conf file is not there, it might be here instead:
```
sudo nano /var/lib/deluge/.config/deluge/web.conf
```

&nbsp;&nbsp;&nbsp;If a file called `web.conf~` exists, delete it. This will overwrite web.conf when deluge-web is restarted.

5) Edit `index.html` 
```
sudo nano /usr/lib/python2.7/dist-packages/deluge/ui/web/index.html
```
&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header:
```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```
&nbsp;&nbsp;&nbsp;This prevents scaling issues on mobile devices.
 
6) Restart deluge-web
```
deluge-web
```

7) (optional) You can change the accent colour by editing this file:
```
sudo nano /usr/lib/python2.7/dist-packages/deluge/ui/web/themes/css/xtheme-dark.css
```
&nbsp;&nbsp;&nbsp;Replace the values in the line `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

8) Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Deluge Docker

1) Stop the deluge docker container. List your docker containers with this command to find the ID `sudo docker container ls`
```
sudo docker stop <Container ID>
```
&nbsp;&nbsp;&nbsp;If you are using [compose](https://docs.linuxserver.io/general/docker-compose), use this command:
```
docker-compose down
```

### Install Option 1
2) Mount the theme as a volume with [compose](https://docs.linuxserver.io/general/docker-compose).

&nbsp;&nbsp;&nbsp;2a) Create a directory to save the theme locally:
```
mkdir ~/docker_config/deluge/ui -p
```
&nbsp;&nbsp;&nbsp;2b) Download and extract the theme into the directory:
```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C ~/docker_config/deluge/ui
```
&nbsp;&nbsp;&nbsp;2c) Edit `docker-compose.yml` and add the following under `deluge:volumes:`:
```
- ~/docker_config/deluge/ui/icons:/usr/lib/python3/dist-packages/deluge/ui/web/icons
- ~/docker_config/deluge/ui/images:/usr/lib/python3/dist-packages/deluge/ui/web/images
- ~/docker_config/deluge/ui/themes:/usr/lib/python3/dist-packages/deluge/ui/web/themes
```
&nbsp;&nbsp;&nbsp;Note: Your path may differ slightly. Such as `/usr/lib/python3.10/site-packages/deluge/...`

&nbsp;&nbsp;&nbsp;Example:
```
deluge:
    image: linuxserver/deluge:latest
    container_name: deluge
    volumes:
      # dark theme
      - ~/docker_config/deluge/ui/icons:/usr/lib/python3/dist-packages/deluge/ui/web/icons
      - ~/docker_config/deluge/ui/images:/usr/lib/python3/dist-packages/deluge/ui/web/images
      - ~/docker_config/deluge/ui/themes:/usr/lib/python3/dist-packages/deluge/ui/web/themes
```

&nbsp;&nbsp;&nbsp;Continue to [Step 3](#post-install)

### Install Option 2
2) Install theme directly into the container.

&nbsp;&nbsp;&nbsp;2a) Find the deluge docker install path:
```
sudo find / -type d -name 'web'
```
&nbsp;&nbsp;&nbsp;Example: `/var/lib/docker/overlay2/<NUMBER>/diff/usr/lib/python3/dist-packages/deluge/ui/web`

&nbsp;&nbsp;&nbsp;2b) Install the theme. Replace `<PATH>` in the install command with the path found previously which contains `diff` and ends with `/ui/web`
```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C <PATH>
```

#### Post Install

3) Edit web.conf to set the theme. Replace `<PATH>` with the path to your deluge config defined in `docker-compose.yml` or `docker run` command:
```
sudo nano <PATH>/web.conf
```
&nbsp;&nbsp;&nbsp;Note: You can also search for it with `sudo find / -type f -name 'web.conf'`
  
&nbsp;&nbsp;&nbsp;Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`

&nbsp;&nbsp;&nbsp;If a file called `web.conf~` exists, delete it. This will overwrite web.conf when deluge-web is restarted.

&nbsp;&nbsp;&nbsp;4a) Find the deluge docker install path:
```
sudo find / -type d -name 'web'
```
&nbsp;&nbsp;&nbsp;Example: `/var/lib/docker/overlay2/<NUMBER>/diff/usr/lib/python3/dist-packages/deluge/ui/web`

&nbsp;&nbsp;&nbsp;4b) Edit `index.html`. Replace `<PATH>` with path found in Step 4a.
```
sudo nano <PATH>/index.html
```
&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header:
```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```
&nbsp;&nbsp;&nbsp;This prevents scaling issues on mobile devices.
 
5) Restart the deluge docker container:
```
sudo docker start <Container ID>
```
&nbsp;&nbsp;&nbsp;If you are using [compose](https://docs.linuxserver.io/general/docker-compose), use this command:
```
docker-compose up -d
```

6) (optional) You can change the accent colour by editing this file. Replace `<PATH>` with the path found in step 4a:
```
sudo nano <PATH>/themes/css/xtheme-dark.css
```
&nbsp;&nbsp;&nbsp;Replace the values in the line `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

7) Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Deluge TrueNAS
Tested with TrueNAS Core TrueNAS-12.0-U6.1 Community Deluge Plugin based on 12.2-RELEASE-p11

1) Switch to root inside the deluge plugin environment:
```
iocage console deluge
```

2) Stop deluge-web:
```
service deluge_web stop
```

3) (optional) Backup old files:
```
mv /usr/local/lib/python3.8/site-packages/deluge/ui/web/icons/ /usr/local/lib/python3.8/site-packages/deluge/ui/web/icons.bak & mv /usr/local/lib/python3.8/site-packages/deluge/ui/web/images/ /usr/local/lib/python3.8/site-packages/deluge/ui/web/images.bak
```

4) Install the theme:
```
fetch https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz && tar zxvf deluge_web_dark_theme.tar.gz -C /usr/local/lib/python3.8/site-packages/deluge/ui/web/
```

5) Edit web.conf to set the theme. This command changes `"theme": "gray"` to `"theme": "dark"`
```
sed -i '' -e "s/gray/dark/" ~deluge/.config/deluge/web.conf
```

6) Edit `index.html` 
```
nano /usr/local/lib/python3.8/site-packages/deluge/ui/web/index.html
```
&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header:
```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```
&nbsp;&nbsp;&nbsp;This prevents scaling issues on mobile devices.

7) Restart deluge-web
```
service deluge_web start
```

8) (optional) You can change the accent colour by editing this file:
```
nano /usr/local/lib/python3.8/site-packages/deluge/ui/web/themes/css/xtheme-dark.css
```
&nbsp;&nbsp;&nbsp;Replace the values in the line `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

9) Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Windows

1) Quit Deluge.

2) Download [deluge_web_dark_theme.zip](https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.zip)

3) Extract the files from the zip into this folder `C:\Program Files\Deluge\deluge\ui\web` and click replace existing files when prompted.

4) Edit `web.conf` with Notepad in this folder:<br>
(Change "Text Documents (.txt)" to "All Files" in the Open dialogue).
```
C:\Users\<your user name>\AppData\Roaming\deluge
```
&nbsp;&nbsp;&nbsp;At the bottom of the file, edit `"theme": "gray"` to `"theme": "dark"`

5) Open Notepad as Admin and edit `index.html` in this folder:<br>
(Change "Text Documents (.txt)" to "All Files" in the Open dialogue).
```
C:\Program Files\Deluge\deluge\ui\web\
```
&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header:
```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```
&nbsp;&nbsp;&nbsp;This prevents scaling issues on mobile devices.

6) (optional) You can change the accent colour by editing `xtheme-dark.css` with Notepad (as Admin):<br>
(Change "Text Documents (.txt)" to "All Files" in the Open dialogue).
```
C:\Program Files\Deluge\deluge\ui\web\themes\css\
```
&nbsp;&nbsp;&nbsp;Replace the values in the line `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

7) Enjoy! :) [tip](https://ko-fi.com/joelacus)
