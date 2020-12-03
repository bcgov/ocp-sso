FROM golang:1.15.5

WORKDIR /var/opt

COPY . .
ENV GOPATH=/var/opt
RUN go get
RUN go build -o k6_exporter

CMD [ "./k6_exporter" ]