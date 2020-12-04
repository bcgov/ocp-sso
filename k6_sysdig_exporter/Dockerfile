FROM golang:1.15.5

WORKDIR $GOPATH
COPY . .
RUN go get -d -v ./...

RUN go build -o k6_exporter

CMD [ "./k6_exporter" ]