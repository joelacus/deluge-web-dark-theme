# Deluge Web UI Dark Theme
A modern dark theme for Deluge Web UI with custom accent colours and updated icons.

Works with Deluge 2, 1.3, and docker.

![Alt text](screenshot.png?raw=true "Optional Title")

## INSTALL

### Deluge 2

1) Stop deluge-web:
```
pkill deluge-web
```
2) (optional) Backup old files.
```
sudo mv /usr/lib/python3/dist-packages/deluge/ui/web/icons/ /usr/lib/python3/dist-packages/deluge/ui/web/icons.bak & sudo mv /usr/lib/python3/dist-packages/deluge/ui/web/css/deluge.css /usr/lib/python3/dist-packages/deluge/ui/web/css/deluge.css.bak & sudo mv /usr/lib/python3/dist-packages/deluge/ui/web/css/ext-extensions.css /usr/lib/python3/dist-packages/deluge/ui/web/css/ext-extensions.css.bak & sudo mv /usr/lib/python3/dist-packages/deluge/ui/web/images/ /usr/lib/python3/dist-packages/deluge/ui/web/images.bak
```

3) Install the theme:
```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C /usr/lib/python3/dist-packages/deluge/ui/web/
```

4) Edit web.conf to set the theme. Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`
```
nano ~/.config/deluge/web.conf
```
  If the web.conf file is not there, it might be here instead:
```
sudo nano /var/lib/deluge/.config/deluge/web.conf
```

  If a file called `web.conf~` exists, delete it. This will overwrite web.conf when deluge-web is restarted.

5) Restart deluge-web
```
deluge-web
```

6) (optional) You can change the accent colour by editing this file:
```
sudo nano /usr/lib/python3/dist-packages/deluge/ui/web/themes/css/xtheme-dark.css
```
  Replace the values in the line `--accent: 156,39,176;` with any RGB value.

7) Enjoy! :)

### Deluge 1.3

1) Stop deluge-web:
```
pkill deluge-web
```
2) (optional) Backup old files.
```
sudo mv /usr/lib/python2.7/dist-packages/deluge/ui/web/icons/ /usr/lib/python2.7/dist-packages/deluge/ui/web/icons.bak & sudo mv /usr/lib/python2.7/dist-packages/deluge/ui/web/css/deluge.css /usr/lib/python2.7/dist-packages/deluge/ui/web/css/deluge.css.bak & sudo mv /usr/lib/python2.7/dist-packages/deluge/ui/web/css/ext-extensions.css /usr/lib/python2.7/dist-packages/deluge/ui/web/css/ext-extensions.css.bak & sudo mv /usr/lib/python2.7/dist-packages/deluge/ui/web/images/ /usr/lib/python2.7/dist-packages/deluge/ui/web/images.bak
```

3) Install the theme:
```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C /usr/lib/python2.7/dist-packages/deluge/ui/web/
```

4) Edit web.conf to set the theme. Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`
```
nano ~/.config/deluge/web.conf
```
  If the web.conf file is not there, it might be here instead:
```
sudo nano /var/lib/deluge/.config/deluge/web.conf
```

  If a file called `web.conf~` exists, delete it. This will overwrite web.conf when deluge-web is restarted.

5) Restart deluge-web
```
deluge-web
```

6) (optional) You can change the accent colour by editing this file:
```
sudo nano /usr/lib/python2.7/dist-packages/deluge/ui/web/themes/css/xtheme-dark.css
```
  Replace the values in the line `--accent: 156,39,176;` with any RGB value.

7) Enjoy! :)

### Deluge Docker

1) Stop the deluge docker container. List your docker containers with this command to find the ID `sudo docker container ls`
```
sudo docker stop <Container ID>
```
  
2) Find the deluge docker install path:
```
sudo find / -type d -name 'web'
```
  Example: `/var/lib/docker/overlay2/<NUMBER>/diff/usr/lib/python3/dist-packages/deluge/ui/web`

3) Install the theme. Replace `<PATH>` in the install command with the path found previously which contains `diff` and ends with `/ui/web`
```
sudo wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C <PATH>
```

4) Edit web.conf to set the theme. Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`
```
sudo nano /path/to/deluge/config/web.conf
```
  If the web.conf file is not there, search for it with `sudo find / -type f -name 'web.conf'`

5) Restart the deluge docker container:
```
sudo docker start <Container ID>
```

6) (optional) You can change the accent colour by editing this file. Replace `<PATH>` with the path used in step 3:
```
sudo nano <PATH>/themes/css/xtheme-dark.css
```
  Replace the values in the line `--accent: 156,39,176;` with any RGB value.

7) Enjoy! :)
