# Deluge Web UI Dark Theme + Responsive Mobile UI

A modern dark theme for Deluge Web UI with custom accent colours and updated icons.

Different coloured rows depending on the torrent state. (Colours can be customised or disabled).

Automatically uses an optimised view for mobile devices with small screens.

<br />

Proxy install (easy install and automatic updates): [All](#all), [Nginx](#nginx-proxy-manager).

Local install (manual updates): [Deluge 2](#deluge-2), [Deluge 1.3](#deluge-1), [Docker](#deluge-docker), [TrueNAS](#deluge-truenas), and [Windows](#windows).

Optional, add a toolbar button to simulate a right click for touch devices [Scroll to guide](#simulate-right-click).

<br />

![Alt text](screenshot.png?raw=true 'Optional Title')

## INSTALL (Proxy)

&nbsp;&nbsp;&nbsp;Link to remotely hosted stylesheets and icons.<br />

## All

1. Edit `index.html`

```
sudo nano /usr/lib/python3/dist-packages/deluge/ui/web/index.html
```

&nbsp;&nbsp;&nbsp;Possible alternative location (python version may differ):

```
sudo nano /usr/lib/python3.13/site-packages/deluge/ui/web/index.html
```

&nbsp;&nbsp;&nbsp;Note: To get the location for Docker, check [Step 3 and 4](#post-install) of the Docker guide.<br />
&nbsp;&nbsp;&nbsp;To get the location for Windows, check [Step 5](#windows) of the Windows guide.

&nbsp;&nbsp;&nbsp;Add the following line at the bottom of the "Stylesheets" section in the \<head\> of the HTML file:

```
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/joelacus/deluge-web-dark-theme/refs/heads/main/deluge-dark-theme-proxy.css">
```

2. Add the following meta tag inside \<head\> (This prevents scaling issues on mobile devices):

```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

3. (optional) Add this stylesheet inside \<head\> to change the colours.

```
<style>
   :root {
      --accent: 156, 39, 176 !important;
      --downloading: 76, 175, 80, 0.5 !important;
      --seeding: 33, 150, 243, 0.5 !important;
      --paused: 255, 152, 0, 0.5 !important;
      --queued: 255, 235, 59, 0.5 !important;
      --error: 244, 67, 54, 0.5 !important;
      --font: ubuntu, verdana, arial, tahoma, helvetica, sans-serif !important;
      --text: #fff !important;
      --bg: #1c1c1c !important;
      --shade1: #222 !important;
      --shade2: #333 !important;
   }
</style>
```

4. (optional) Add a toolbar button to simulate a right click for touch devices.<br />
   [Scroll to guide](#simulate-right-click)

5. Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Nginx Proxy Manager

&nbsp;&nbsp;&nbsp;Nginx config:

```
proxy_set_header Accept-Encoding "";
sub_filter
'</head>'
'<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/joelacus/deluge-web-dark-theme/refs/heads/main/deluge-dark-theme-proxy.css">
</head>';
sub_filter_once on;
```

<br />
<br />

## INSTALL (Local)

&nbsp;&nbsp;&nbsp;Install all the theme files locally on your system.<br />

## Deluge 2

1. Stop deluge-web:

```
pkill deluge-web
```

2. (optional) Backup old files:

```
sudo mv /usr/lib/python3/dist-packages/deluge/ui/web/icons/ /usr/lib/python3/dist-packages/deluge/ui/web/icons.bak & sudo mv /usr/lib/python3/dist-packages/deluge/ui/web/images/ /usr/lib/python3/dist-packages/deluge/ui/web/images.bak
```

&nbsp;&nbsp;&nbsp;Possible alternative location (python version may differ):

```
sudo mv /usr/lib/python3.13/site-packages/deluge/ui/web/icons/ /usr/lib/python3.13/site-packages/deluge/ui/web/icons.bak & sudo mv /usr/lib/python3.13/site-packages/deluge/ui/web/images/ /usr/lib/python3.13/site-packages/deluge/ui/web/images.bak
```

3. Install the theme:

```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C /usr/lib/python3/dist-packages/deluge/ui/web/
```

&nbsp;&nbsp;&nbsp;Possible alternative location (python version may differ):

```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C /usr/lib/python3.13/site-packages/deluge/ui/web/
```

4. Edit web.conf to set the theme. Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`

```
nano ~/.config/deluge/web.conf
```

&nbsp;&nbsp;&nbsp;If the web.conf file is not there, it might be here instead:

```
sudo nano /var/lib/deluge/.config/deluge/web.conf
```

&nbsp;&nbsp;&nbsp;If a file called `web.conf~` exists, delete, or edit it as well. Otherwise this will overwrite web.conf when deluge-web is restarted.

5. Edit `index.html`

```
sudo nano /usr/lib/python3/dist-packages/deluge/ui/web/index.html
```

&nbsp;&nbsp;&nbsp;Possible alternative location (python version may differ):

```
sudo nano /usr/lib/python3.13/site-packages/deluge/ui/web/index.html
```

&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header (This prevents scaling issues on mobile devices):

```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

6. Restart deluge-web

```
deluge-web
```

7. (optional) You can change the accent colour and row colours by editing this file:

```
sudo nano /usr/lib/python3/dist-packages/deluge/ui/web/themes/css/xtheme-dark.css
```

&nbsp;&nbsp;&nbsp;Possible alternative location (python version may differ):

```
sudo nano /usr/lib/python3.13/site-packages/deluge/ui/web/themes/css/xtheme-dark.css
```

&nbsp;&nbsp;&nbsp;Replace the variable values `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

8. (optional) Add a toolbar button to simulate a right click for touch devices.<br />
   [Scroll to guide](#simulate-right-click)

9. Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Deluge 1

1. Stop deluge-web:

```
pkill deluge-web
```

2. (optional) Backup old files:

```
sudo mv /usr/lib/python2.7/dist-packages/deluge/ui/web/icons/ /usr/lib/python2.7/dist-packages/deluge/ui/web/icons.bak & sudo mv /usr/lib/python2.7/dist-packages/deluge/ui/web/images/ /usr/lib/python2.7/dist-packages/deluge/ui/web/images.bak
```

3. Install the theme:

```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C /usr/lib/python2.7/dist-packages/deluge/ui/web/
```

4. Edit web.conf to set the theme. Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`

```
nano ~/.config/deluge/web.conf
```

&nbsp;&nbsp;&nbsp;If the web.conf file is not there, it might be here instead:

```
sudo nano /var/lib/deluge/.config/deluge/web.conf
```

&nbsp;&nbsp;&nbsp;If a file called `web.conf~` exists, delete, or edit it as well. Otherwise this will overwrite web.conf when deluge-web is restarted.

5. Edit `index.html`

```
sudo nano /usr/lib/python2.7/dist-packages/deluge/ui/web/index.html
```

&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header (This prevents scaling issues on mobile devices):

```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

6. Restart deluge-web

```
deluge-web
```

7. (optional) You can change the accent colour and row colours by editing this file:

```
sudo nano /usr/lib/python2.7/dist-packages/deluge/ui/web/themes/css/xtheme-dark.css
```

&nbsp;&nbsp;&nbsp;Replace the variable values `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

8. (optional) Add a toolbar button to simulate a right click for touch devices.<br />
   [Scroll to guide](#simulate-right-click)

9. Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Deluge Docker

1. Stop the deluge docker container. List your docker containers with this command to find the ID `sudo docker container ls`

```
sudo docker stop <Container ID>
```

&nbsp;&nbsp;&nbsp;If you are using [compose](https://docs.linuxserver.io/general/docker-compose), use this command:

```
docker-compose down
```

### Install Option 1

2. Mount the theme as a volume with [compose](https://docs.linuxserver.io/general/docker-compose).

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

&nbsp;&nbsp;&nbsp;Note: Your path may differ slightly. For example, for Unraid and some other systems:

```
- ~/docker_config/deluge/ui/icons:/usr/lib/python3.13/site-packages/deluge/ui/web/icons
- ~/docker_config/deluge/ui/images:/usr/lib/python3.13/site-packages/deluge/ui/web/images
- ~/docker_config/deluge/ui/themes:/usr/lib/python3.13/site-packages/deluge/ui/web/themes
```

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

&nbsp;&nbsp;&nbsp;See `compose-example.yml` for a full file example.

&nbsp;&nbsp;&nbsp;Continue to [Step 3](#post-install)

### Install Option 2

2. Install theme directly into the container.

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

3. Edit web.conf to set the theme. Replace `<PATH>` with the path to your deluge config defined in `docker-compose.yml` or `docker run` command:

```
sudo nano <PATH>/web.conf
```

&nbsp;&nbsp;&nbsp;Note: You can also search for it with `sudo find / -type f -name 'web.conf'`

&nbsp;&nbsp;&nbsp;Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`

&nbsp;&nbsp;&nbsp;If a file called `web.conf~` exists, delete, or edit it as well. Otherwise this will overwrite web.conf when deluge-web is restarted.

&nbsp;&nbsp;&nbsp;4a) Find the deluge docker install path:

```
sudo find / -type d -name 'web'
```

&nbsp;&nbsp;&nbsp;Example: `/var/lib/docker/overlay2/<NUMBER>/diff/usr/lib/python3/dist-packages/deluge/ui/web`

&nbsp;&nbsp;&nbsp;4b) Edit `index.html`. Replace `<PATH>` with path found in Step 4a.

```
sudo nano <PATH>/index.html
```

&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header (This prevents scaling issues on mobile devices):

```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

5. Restart the deluge docker container:

```
sudo docker start <Container ID>
```

&nbsp;&nbsp;&nbsp;If you are using [compose](https://docs.linuxserver.io/general/docker-compose), use this command:

```
docker-compose up -d
```

6. (optional) You can change the accent colour and row colours by editing this file. Replace `<PATH>` with the path found in step 4a:

```
sudo nano <PATH>/themes/css/xtheme-dark.css
```

&nbsp;&nbsp;&nbsp;Replace the variable values `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

7. (optional) Add a toolbar button to simulate a right click for touch devices.<br />
   [Scroll to guide](#simulate-right-click)

8. Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Deluge TrueNAS

Tested with TrueNAS Core TrueNAS-12.0-U6.1 Community Deluge Plugin based on 12.2-RELEASE-p11

1. Switch to root inside the deluge plugin environment:

```
iocage console deluge
```

2. Stop deluge-web:

```
service deluge_web stop
```

3. (optional) Backup old files:

```
mv /usr/local/lib/python3.8/site-packages/deluge/ui/web/icons/ /usr/local/lib/python3.8/site-packages/deluge/ui/web/icons.bak & mv /usr/local/lib/python3.8/site-packages/deluge/ui/web/images/ /usr/local/lib/python3.8/site-packages/deluge/ui/web/images.bak
```

4. Install the theme:

```
fetch https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz && tar zxvf deluge_web_dark_theme.tar.gz -C /usr/local/lib/python3.8/site-packages/deluge/ui/web/
```

5. Edit web.conf to set the theme. This command changes `"theme": "gray"` to `"theme": "dark"`

```
sed -i '' -e "s/gray/dark/" ~deluge/.config/deluge/web.conf
```

6. Edit `index.html`

```
nano /usr/local/lib/python3.8/site-packages/deluge/ui/web/index.html
```

&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header (This prevents scaling issues on mobile devices):

```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

7. Restart deluge-web

```
service deluge_web start
```

8. (optional) You can change the accent colour and row colours by editing this file:

```
nano /usr/local/lib/python3.8/site-packages/deluge/ui/web/themes/css/xtheme-dark.css
```

&nbsp;&nbsp;&nbsp;Replace the variable values `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

9. (optional) Add a toolbar button to simulate a right click for touch devices.<br />
   [Scroll to guide](#simulate-right-click)

10. Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Windows

1. Quit Deluge.

2. Download [deluge_web_dark_theme.zip](https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.zip)

3. Extract the files from the zip into this folder `C:\Program Files\Deluge\deluge\ui\web` and click replace existing files when prompted.

4. Edit `web.conf` with Notepad in this folder:<br>
   (Change "Text Documents (.txt)" to "All Files" in the Open dialogue).

```
C:\Users\<your user name>\AppData\Roaming\deluge
```

&nbsp;&nbsp;&nbsp;At the bottom of the file, edit `"theme": "gray"` to `"theme": "dark"`

&nbsp;&nbsp;&nbsp;If you run the [deluge daemon via nssm](https://deluge.readthedocs.io/en/latest/how-to/nssm-service.html), you will also need to edit an additional web.conf file here:

```
C:\config_location
```

&nbsp;&nbsp;&nbsp;If a file called `web.conf.bak` exists in either location, delete, or edit it as well. Otherwise this will overwrite web.conf when deluge-web is restarted.

5. Open Notepad as Admin and edit `index.html` in this folder:<br>
   (Change "Text Documents (.txt)" to "All Files" in the Open dialogue).

```
C:\Program Files\Deluge\deluge\ui\web\
```

&nbsp;&nbsp;&nbsp;and add the following meta tag on the empty line 19 in the header (This prevents scaling issues on mobile devices):

```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

6. (optional) You can change the accent colour and row colours by editing `xtheme-dark.css` with Notepad (as Admin):<br>
   (Change "Text Documents (.txt)" to "All Files" in the Open dialogue).

```
C:\Program Files\Deluge\deluge\ui\web\themes\css\
```

&nbsp;&nbsp;&nbsp;Replace the variable values `--accent: 156,39,176;` with any RGB value.<br>
&nbsp;&nbsp;&nbsp;Note: If you don't see the updated accent colour, force reload the deluge web-ui page with `Ctrl+Shift+R`.

7. (optional) Add a toolbar button to simulate a right click for touch devices.<br />
   [Scroll to guide](#simulate-right-click)

8. Enjoy! :) [tip](https://ko-fi.com/joelacus)

<br />
<br />

## Simulate Right Click

&nbsp;&nbsp;&nbsp;Add a toolbar button to simulate a right click on a selected row for touch devices.

1. Edit `index.html`

```
sudo nano /usr/lib/python3/dist-packages/deluge/ui/web/index.html
```

&nbsp;&nbsp;&nbsp;Possible alternative location (python version may differ):

```
sudo nano /usr/lib/python3.13/site-packages/deluge/ui/web/index.html
```

&nbsp;&nbsp;&nbsp;Note: To get the location for Docker, check [Step 3 and 4](#post-install) of the Docker guide.<br />
&nbsp;&nbsp;&nbsp;To get the location for Windows, check [Step 5](#windows) of the Windows guide.

2. Add this line to the bottom of the "Javascript" section in the \<head\> of the HTML file:

```
<script type="text/javascript" src="https://cdn.rawgit.com/joelacus/deluge-web-dark-theme/refs/heads/main/deluge_simulate_right_click.js" defer></script>
```
