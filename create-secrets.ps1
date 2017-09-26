Remove-Item -Recurse -Force ".tmp"
New-Item -ItemType directory -Path ".tmp"  | Out-Null
if (!(Test-Path ".secrets")) {
  New-Item -ItemType directory -Path ".secrets"  | Out-Null
}

$randomSecretFiles = @(".\.secrets\keystore.password", ".\.secrets\jgroups.password", ".\.secrets\sso.admin.user.txt", ".\.secrets\sso.admin.password.txt", ".\.secrets\postgresql.user.txt", ".\.secrets\postgresql.password.txt", ".\.secrets\jgroups.cluster.password.txt")

#Generate 12 characters-long secrets
foreach ($randomSecretFile in $randomSecretFiles) {
  if (!(Test-Path $randomSecretFile)) {
    write-host "Generating $($randomSecretFile)"
    -join ((1..12) | %{(65..90) + (97..122) | Get-Random} | % {[char]$_}) | out-file $randomSecretFile -encoding utf8
  }
}

$KEYSTORE_PASS=[IO.File]::ReadAllText(".\.secrets\keystore.password")
$JGROUPS_PASS=[IO.File]::ReadAllText(".\.secrets\jgroups.password")


if (!(Test-Path ".secrets\keystore.jks")) {
  &keytool -genkey -keyalg RSA -alias https -keystore .secrets\keystore.jks -storepass $KEYSTORE_PASS -keypass $KEYSTORE_PASS -validity 360 -keysize 2048 -dname "CN=dev-sso.pathfinder.gov.bc.ca, OU=FLNRO, O=Government of the Province of British Columbia, L=Victoria, S=BC, C=CA"
}

&keytool -export -keystore .secrets\keystore.jks  -storepass $KEYSTORE_PASS -alias https -file .tmp\https.der.cer
&keytool -exportcert -keystore .secrets\keystore.jks  -storepass $KEYSTORE_PASS -alias https -keypass $KEYSTORE_PASS -rfc -file .tmp\https.pem.crt

if (!(Test-Path ".secrets\jgroups.jcek")) {
  &keytool -genseckey -alias jgroups -storetype JCEKS -keystore .secrets\jgroups.jcek -storepass $JGROUPS_PASS -keypass $JGROUPS_PASS
}

&oc secret new sso-app-secret `
keystore.password=.secrets\keystore.password `
jgroups.password=.secrets\jgroups.password `
sso.admin.user=.secrets\sso.admin.user.txt `
sso.admin.password=.secrets\sso.admin.password.txt `
keystore.jks=.secrets\keystore.jks `
jgroups.jceks=.secrets\jgroups.jcek `
jgroups.cluster.password=.secrets\jgroups.cluster.password.txt `
postgresql.user=.secrets\postgresql.user.txt `
postgresql.password=.secrets\postgresql.password.txt `
-o json | out-file "sso-app-secret.json" -encoding utf8

&oc create -f sso-app-secret.json -n devops-sso-sandbox
&oc secrets add serviceaccount/sso-service-account secret/sso-app-secret
&jq -c "{data:.data}" sso-app-secret.json  | out-file ".tmp\sso-app-secret.patch.json" -encoding utf8
&oc patch secret sso-app-secret @("-p",[IO.File]::ReadAllText(".tmp\sso-app-secret.patch.json").replace("`"", "\`""))
