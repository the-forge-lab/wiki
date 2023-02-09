---
title: basic-commands
subject: "Basic Commands on Linux"
language: shell
link: ""
date: 2022-11-17
pin: false
type: part
---
[Go Up](linux.md)
# Useful Commands
| command      | usage                                 | options                  | signification                      |
| ------------ | ------------------------------------- | ------------------------ | ---------------------------------- |
| `ssh`        | connect to a distant pc               |                          |                                    |
| `ls`         | list all files in directory           | `[alhA]`                 | **l**i**s**t                       |
| `pwd`        | see where we are on filesystem        |                          | **p**rint **w**orking **d**rectory |
| `cd`         | change directory                      |                          | **c**hange **d**irectory           |
| `touch`      | create file                           | `-d` (date)              |                                    |
| `echo`       | print in `stdout`                     |                          |                                    |
| `nano`       | minimal text editor                   |                          |                                    |
| `vim`        | the blood of the vein                 |                          |                                    |
| `cat`        | display a file in `stdout`            |                          |                                    |
| `shred`      | crypt a file                          |                          |                                    |
| `mkdir`      | create a new directory                |                          | **m**a**k**e **dir**ectory         |
| `cp`         | copy file                             |                          | **c**o**p**y                       |
| `mv`         | move file                             |                          | **m**o**v**e                       |
| `rm`         | remove file                           | `-fr` (dir)              | **r**e**m**ove                     |
| `rmdir`      | remove empty directory                |                          | **r**e**m**ove **dir**ectory       |
| `ln`         | link to a file                        | `-s`                     | **l**i**n**k                       |
| `clear`      | clear the terminal                    |                          |                                    |
| `whoami`     | who am I                              |                          |                                    |
| `useradd`    | create new user                       |                          |                                    |
| `sudo`       | root mode                             |                          |                                    |
| `adduser`    | create new user with parameters       |                          |                                    |
| `su`         | change the user                       |                          | **s**witch **u**ser                |
| `exit`       | exit the command                      |                          |                                    |
| `passwd`     | change password                       |                          |                                    |
| `apt`        | debian package manager                |                          |                                    |
| `finger`     | inspect user (install needed)         |                          |                                    |
| `man`        | open manpage                          |                          |                                    |
| `whatis`     | what is this command                  |                          |                                    |
| `which`      | what is the path of the command       |                          |                                    |
| `whereis`    | extended `which`                      |                          |                                    |
| `wget`       | download things from Internet         |                          |                                    |
| `curl`       | other downloader                      |                          |                                    |
| `zip`        | compress file                         |                          |                                    |
| `unzip`      | decompress file compressed            |                          |                                    |
| `less`       | display file one page at the time     |                          |                                    |
| `head`       | display the beginning of a file       |                          |                                    |
| `tail`       | display the end of a file             |                          |                                    |
| `cmp`        | compare two files                     |                          |                                    |
| `diff`       | see the differences between two files |                          |                                    |
| `sort`       | sort alphabetically                   |                          |                                    |
| `find`       | find a file                           | `-name`                  |                                    |
| `chmod`      | change attributes of a file           | `+x` to exec             | **ch**ange **mod**ule              |
| `chown`      | change the ownership of a file        |                          | **ch**ange **own**ership           |
| `ifconfig`   | ip address (in `net-tools` package)   |                          |                                    |
| `ip address` | ip address (can't work)               |                          |                                    |
| `grep`       | extract content of a file             |                          |                                    |
| `awk`        | `grep` ++                             |                          |                                    |
| `resolvectl` | DNS configured                        | `status`                 |                                    |
| `ping`       | test the status of a server           | `-c [n]` only n requests |                                    |
| `traceroute` | see the path to a website             |                          |                                    |
| `netstat`    | see the open ports in the machine     | `-tulpn`                 |                                    |
| `ss`         | see the open ports, but in modern     | `-tulpn`                 |                                    |
| `iptables`   | config of firewall                    |                          |                                    |
| `upw`        | open ports                            |                          |                                    |
| `uname`      | see the system name                   | `-a` to see more         |                                    |
| `neofetch`   | pretty system infos display           |                          |                                    |
| `cal`        | display a calendar                    |                          |                                    |
| `bc`         | calculator in terminal                |                          |                                    |
| `free`       | show the free memory in the system    |                          |                                    |
| `df`         | state of disks                        | `-H`                     |                                    |
| `ps`         | show the process running              | `-aux` to see more       | **p**roces**s**                    |
| `top`        | show the process, and more infos      |                          |                                    |
| `htop`       | pretty `top`                          |                          |                                    |
| `kill`       | force stop process                    | `-9`                     |                                    |
| `pkill`      | kill without process id               | `-f`                     |                                    |
| `systemctl`  | manage services in system             |                          |                                    |
| `history`    | see the history of the typed commands |                          |                                    |
| `reboot`     | reboot the pc                         |                          |                                    |
| `shutdown`   | shutdown the pc                       | `-h now`                 |                                    |
