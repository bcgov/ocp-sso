FROM loadimpact/k6:latest

RUN mkdir /opt/tests

WORKDIR /opt/tests

COPY . . 

CMD [ "k6", "run", "--vus", $VIRTUAL_USERS, "--duration", $DURATION, "index.js" ]