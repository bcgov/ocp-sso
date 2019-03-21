# Keycloak realm management scripts

*Disclaimer: These scripts have only been tested on MacOS with node v11.1.0 and npm 6.4.1.*

These keycloak management scripts are written in node.js. Install the required dependency packages by running `npm install`

## IDIR scripts

#### Retrieve IDIR user GUIDs
The `import-idir-users.js` script queries LDAP for N user's GUID given their IDIR username. To run this script first create a `users.json` file in this directory following the format in the template file. Run the script with `node import-idir-users.js` and enter your IDIR username and password in the prompts.
