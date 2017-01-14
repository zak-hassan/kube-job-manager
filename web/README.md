
To run the ui using s2i then run:

```

 oc new-build openshift/nodejs-010-centos7~https://github.com/zmhassan/metadata-registry-web-ui.git

 ```


Required Environment Variables:

```
OPENSHIFT_APP_REST
OPENSHIFT_APP_REST_PORT
OPENSHIFT_APP_WEB_DEBUG

Note: In kubernetes environment you would get this env variable set: 'METAREGISTRY_SERVICE_HOST'

```
