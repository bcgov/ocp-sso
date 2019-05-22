                <staticMaxAge>-1</staticMaxAge>
                <cacheThemes>false</cacheThemes>
                <cacheTemplates>false</cacheTemplates>

# get a copy of /xml from pod
oc cp sso-sbox-22-9-tmlw6:/opt/eap/standalone/configuration/standalone-openshift.xml ./standalone-openshift.xml

# put the modified .xml back to pod
oc cp docker/contrib/opt/eap/standalone/configuration/standalone-openshift.xml sso-sbox-22-9-tmlw6:/opt/eap/standalone/configuration/standalone-openshift.xml

# Connect to the running pod
# run
/opt/eap/bin/jboss-cli.sh -c
# and then:
/:reload
# exit jboss cli:
exit

oc cp extensions/themes/src/main/resources/theme/bcgov-v2 sso-sbox-22-9-tmlw6:/opt/eap/themes/
