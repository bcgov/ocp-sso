@echo off
@setlocal
IF EXIST https.jks ( del https.jks )
IF EXIST https.cer ( del https.cer )
IF EXIST jgroups.jcek ( del jgroups.jcek )

keytool -genkey -keyalg RSA -alias https -keystore https.jks -storepass changeit -keypass changeit -validity 360 -keysize 2048 -dname "CN=dev-sso.pathfinder.gov.bc.ca, OU=FLNRO, O=Government of the Province of British Columbia, L=Victoria, S=BC, C=CA"
keytool -export -keystore https.jks  -storepass changeit -alias https -file https.der.cer
keytool -exportcert -keystore https.jks  -storepass changeit -alias https -keypass changeit -rfc -file https.pem.crt
keytool -genseckey -alias jgroups -keysize 2048 -storetype JCEKS -keystore jgroups.jcek -storepass changeit -keypass changeit

@endlocal
