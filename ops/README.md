## Operations Directory

This folder is an intermediary step for the common operational work that we do on the sso service. Currently we have a Jenkins pipeline that can handle promoting our SSO Deployment but it has a few pitfalls:

- no control of order of deployment (this is important to prevent data corruption)
- the pipeline cli is a bit too magical and adds labels that are not reflective of our infra code templates


## Structure

This will be a standard playbook structure with common items separated as __tasks__ and playbooks
describing the automation process. All of this is meant to run on a local machine. Eventually the pipeline could handle these steps using the playbooks. 


## Usage
- Ensure you or your service account is logged into your cluster of choice
- Make sure to `cp group_vars/all/vars.example.yml group_vars/all/vars.yml` and fill in your values before starting
- currently available playbook:
  - scale down SSO dc
  - add hpa for SSO dc
  - take a DB backup
