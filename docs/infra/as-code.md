# Infra as Code

My Infrastructure as Code is based on [`Terraform`](https://terraform.io/).
All the files are publicly available on [GitHub](https://github.com/Xavier2p/infra-as-code).

## Structure

```bash
./forge
├── ansible             # Ansible configuration, pre-deployment
├── hosts               # Hosts configuration
│   ├── common          # Common configuration for all hosts
│   ├── exegol
│   ├── eadu
│   └── scariff
├── stacks              # Stacks of services
│   ├── admin
│   ├── cloud
│   ├── monitoring
│   ├── media
│   └── services
├── hosts.tf            # Hosts configuration
├── main.tf             # Entry point
├── modules             # Terraform modules
├── providers.tf
├── outputs.tf
├── variables.tf
└── forge.tfvars        # Private variables
```
