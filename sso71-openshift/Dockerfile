#based on https://access.redhat.com/containers/?tab=docker-file#/registry.access.redhat.com/redhat-sso-7/sso71-openshift/images/1.3-2

FROM registry.access.redhat.com/redhat-sso-7/sso71-openshift:1.3

# Switch to root for package installs
#USER 0
##775

#USER 185
COPY themes /opt/eap/themes/

# Restore default user
#USER 185
