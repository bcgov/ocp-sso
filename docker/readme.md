## Custom standalone-openshift.xml
1. Get the new original standalone-openshift.xml file from imported RHSSO base image

2. Save the custom changes
```
diff standalone-openshift-<current_version>.xml standalone-openshift.xml > changes.patch
```

3. Update with the new version
```
cp standalone-openshift-<new_version>.xml standalone-openshift.xml
```

4. Introduce custom changes to new version
```
patch -u -i changes.patch
```

5. commit the new configuration files and the changes.patch for record tracking
