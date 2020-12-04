FROM golang:1.15.5

WORKDIR /var/opt
COPY . .
RUN go get -d -v ./...
RUN go install -v
RUN go build -o k6_exporter

CMD [ "./k6_exporter" ]