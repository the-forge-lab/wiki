# Requirements

## Local Configuration

To deploy the `/forge` infrastructure, you will need:

+ [Ansible](https://ansible.com/)
+ [Terraform](https://terraform.io/)
+ [Git](https://git-scm.com/)

This three tools must be installed on your local machine.

The installation process installs the following tools on the remote machine:

+ [Docker](https://docker.com/)
+ [Docker Compose](https://docs.docker.com/compose/)
+ [Git](https://git-scm.com/)
+ [zsh](https://zsh.org/)

## Host Configuration

The configuration is tested only for `Debian`, I can't guarantee that it will work on other distributions.
There are few requirements for the remote hosts:

+ All the hosts must have the same user with root privileges.
+ All the IPs address must be written in the `ansible/hosts.yml` file.
+ All the hosts must have SSH keys and the host machine must have the public key.

## Clone repository

On the host machine, clone the repository:

```bash
git clone https://github.com/Xavier2p/infra-as-code.git && cd infra-as-code
```
