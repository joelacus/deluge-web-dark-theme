# deluge-web-dark-theme
A modern dark theme for Deluge Web UI with custom accent colours and updated icons.

![Alt text](screenshot.png?raw=true "Optional Title")

INSTALL

1) Stop deluge-web:
```
pkill deluge-web
```

2) Install the theme:
```
wget -c https://github.com/joelacus/deluge-web-dark-theme/raw/main/deluge_web_dark_theme.tar.gz -O - | sudo tar -xz -C /usr/lib/python3/dist-packages/deluge/ui/web/
```

3) Edit web.conf to set the theme. Scroll to the bottom and change `"theme": "gray"` to `"theme": "dark"`
```
nano ~/.config/deluge/web.conf
```

4) Restart deluge-web
```
deluge-web
```

5) (optional) You can change the accent colour by editing this file:
```
sudo nano /usr/lib/python3/dist-packages/deluge/ui/web/themes/css/xtheme-dark.css
```
Replace the values in the line `--accent: 156,39,176;` with any RGB value.

6) Enjoy! :)
