# Deployment

## #1 Clone repository

```bash
git clone https://github.com/Xavier2p/infra-as-code.git && cd infra-as-code
```

## #2 Pre-deploy configuration (using Ansible)

```bash
ansible-playbook -i ansible/hosts.yml -u <USER> -b ansible/playbook.yml
```

## #3 Deploy infrastructure (using Terraform)

```bash
terraform init
terraform apply
```

You can use the `-target=module.<module_name>` option to deploy only a specific module or a specific host.
