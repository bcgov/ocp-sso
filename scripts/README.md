# Scripts

# Get Logins

This script will return login events for a given day. To use,
first login to openshift in the terminal, and get a podname for the environment 
you need to check:

`oc project <project>`
`oc get pods`

Then run the script with the podname and date as arguments from the scripts directory, e.g

`node get-logins.js sso-dev-5-4n2n6 2021-09-14`

__Note: Format the date as yyyy-mm-dd__

The script will logout the number of logins.