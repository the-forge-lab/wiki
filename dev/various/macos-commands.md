---
title: macos-commands
subject: "The 50 essential commands on macOS"
language: shell
link: ""
date: 2022-11-26
pin: false
type: part
---
[[various|Go Up]]
# Top macOS commands
Many [[linux|Linux]] commands will be running, so please see also the list of [[basic-commands|Linux Commands]].

+ `say` - Pronounce an expression
  ```shell
  say <what do you want to say>
  ```
+ `security find-generic-password` - See your wifi password
  ```shell
  security find-generic-password -wa <wifi name>
  ```
+ `pbcopy` - Copy the output of a command
  ```shell
  <command who create stdin> | pbcopy
  ```
+ `caffineate` - Keep your Mac on, until the terminal is closed
  ```shell
  caffineate # ^C to stop
  ``` 
+ `defaults write` - Change the default parameters of screenshots
  ```shell
  defaults write com.apple.screencapture name <name>
  defaults write com.apple.screencapture type <type>
  defaults write com.apple.screencapture location <path>
  ```
+ `sqlite3` - Delete the history of downloads
  ```shell
  sqlite3 ~/Library/Preferences/com.apple.LaunchServices.QuarantineEventsV* 'delete from LSQuarantineEvent'
  ``` 
+ `passwd` - Change password in CLI
  ```shell
  passwd
  ```
+ `ditto` - Newer `cp` command
  ```shell
  ditto <origin> <destination>
  ```
+ `df` - See disk storage
  ```shell
  df -h
  ``` 
+ `open` - Open file or directory in the right application
  ```shell
  open <path>
  ```
+ `ifconfig` - See IP address
  ```shell
  ifconfig [en0] # optional, but show only the right one
  ifconfig en0 | grep inet | awk '{ print $2 }'
  ```
+ `dig` - DNS of a website
  ```shell
  dig <website name>
  ```
+ `top` - Process using the most CPU ressources
  ```shell
  top 
  top -rsize # sort by ram usage
  ```
+ `which` - See which shell is using
  ```shell
  which $SHELL
  ```
+ `uptime` - How long the Mac running
  ```shell
  uptime
  ```
+ `qlmanage` - Quick Look for a file
  ```shell
  qlmanage -p <path>
  ```
+ `curl` - Download things
  ```shell
  curl <url> > <file>
  curl wttr.in/<city> # display the weather
  ```
+ `leave` - Set alarm to quit terminal
  ```shell
  leave <time> # format: hhmm
  ```
+ `spctl` - Disable gatekeeper
  ```shell
  sudo spctl --master-disable
  ```
+ `asciiquarium` - Your shell is an aquarium
  ```shell
  asciiquarium
  ```
+ `toilet` - Display ASCII Art
  ```shell
  toilet <text>
  ```
+ `http.server` - Start a web server at one place
  ```shell
  python3 -m http.server
  ```
+ `shutdown` - Shutdown the Mac
  ```shell
  shutdown -h now # for now
  shutdown -r now # for restarting now
  ```
+ `pam.d` - `sudo` with TouchID
  ```shell
  sudo vim /etc/pam.d/sudo
  # in the first line, insert this :
  auth sufficient pam_tid.so
  ``` 




### Keyboard Shortcuts
+ `CMD`+`OPT`+`SHIFT`+`V` => paste without formating