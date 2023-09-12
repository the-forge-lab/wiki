# Pre-deploy configuration (using Ansible)

## Quick Pre Deployment

```bash
ansible-playbook -i ansible/hosts.yml -u <USER> -b ansible/playbook.yml
```

Where `<USER>` is the user you want to use to connect to the hosts.
