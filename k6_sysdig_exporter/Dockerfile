FROM golang:1.15.5


COPY . .
RUN go get
RUN go build -o k6_exporter

CMD [ "./k6_exporter" ]