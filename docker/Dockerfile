FROM registry.access.redhat.com/redhat-openjdk-18/openjdk18-openshift:1.6
USER 0
COPY ./contrib/opt/eap/standalone/configuration/standalone-openshift.xml /opt/eap/standalone/configuration/
RUN chgrp -R 0 /opt/eap/standalone/configuration && chmod -R g=u /opt/eap/standalone/configuration
USER 185
