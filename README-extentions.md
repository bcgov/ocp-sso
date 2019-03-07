# Keycloak Extentions:

## Create user's information uniqueness (per IDP):


## Post Login Role Check for Client:


## Github Organization Membership to Role mapper:
#### Goal:
Provide information on Github users membership in organizations

#### Backgroud:
In the github IDP realm, user will be assigned with roles (`org:<org-name>`) based on their membership in BC Gov GitHub Organizations, including `bcgov`, `bcgov-c` and `BCDevOps`.

#### Usage:
Request for the information access in (TODO: sh)`sso` channel. This will setup a claim token mapped with the user's Github organizations. The claim token will be pass along user's ID token, access token and userinfo.

- Name of claim: `roles`
- Format of claim: `github:org:<org-name>`
- Type: String


To parse the infomration from your realm, go to `GitHub` identity provider. Create mapper as:
- Type: `two way claim to role`
- Claim (the name of claim): `roles`
- String value to search in the claim: `github:org:<org-name>`