// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {};

export default function main() {
  let response;

  group(
    "page_29 - https://oidc.gov.bc.ca/auth/realms/idir/broker/idir/endpoint",
    function () {
      response = http.post(
        "https://oidc.gov.bc.ca/auth/realms/idir/broker/idir/endpoint",
        {
          SAMLResponse:
            "PFJlc3BvbnNlIHhtbG5zPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiIERl%0D%0Ac3RpbmF0aW9uPSJodHRwczovL29pZGMuZ292LmJjLmNhL2F1dGgvcmVhbG1zL2lkaXIvYnJva2Vy%0D%0AL2lkaXIvZW5kcG9pbnQiIElEPSJfOWNlMTgzYTBkOTMxYjdiMzkxOGNhZTQwMGE4MjgyZGRkNzcw%0D%0AIiBJblJlc3BvbnNlVG89IklEX2RiY2E5YmIzLTM2MmQtNDc4ZC1hZmRlLTAwMzUyNjUxMDI0NSIg%0D%0ASXNzdWVJbnN0YW50PSIyMDIwLTEwLTMwVDIyOjA5OjExWiIgVmVyc2lvbj0iMi4wIj4NCiAgICA8%0D%0AbnMxOklzc3VlciB4bWxuczpuczE9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRp%0D%0Ab24iIEZvcm1hdD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOm5hbWVpZC1mb3JtYXQ6ZW50%0D%0AaXR5Ij5vaWRjLWlkaXI8L25zMTpJc3N1ZXI%2BDQogICAgPFN0YXR1cz4NCiAgICAgICAgPFN0YXR1%0D%0Ac0NvZGUgVmFsdWU9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpzdGF0dXM6U3VjY2VzcyIv%0D%0APg0KICAgIDwvU3RhdHVzPg0KICAgIDxuczI6QXNzZXJ0aW9uIHhtbG5zOm5zMj0idXJuOm9hc2lz%0D%0AOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiIgSUQ9Il8zMDk3YjZkMzkzNDgwOTdmZGFmMTU1%0D%0AYjFkYTc3ODAwYzYyMjMiIElzc3VlSW5zdGFudD0iMjAyMC0xMC0zMFQyMjowOToxMVoiIFZlcnNp%0D%0Ab249IjIuMCI%2BDQogICAgICAgIDxuczI6SXNzdWVyIEZvcm1hdD0idXJuOm9hc2lzOm5hbWVzOnRj%0D%0AOlNBTUw6Mi4wOm5hbWVpZC1mb3JtYXQ6ZW50aXR5Ij5vaWRjLWlkaXI8L25zMjpJc3N1ZXI%2BPGRz%0D%0AOlNpZ25hdHVyZSB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI%2B%0D%0ADQo8ZHM6U2lnbmVkSW5mbz4NCjxkczpDYW5vbmljYWxpemF0aW9uTWV0aG9kIEFsZ29yaXRobT0i%0D%0AaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIi8%2BDQo8ZHM6U2lnbmF0dXJl%0D%0ATWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxkc2lnLW1vcmUj%0D%0AcnNhLXNoYTI1NiIvPg0KPGRzOlJlZmVyZW5jZSBVUkk9IiNfMzA5N2I2ZDM5MzQ4MDk3ZmRhZjE1%0D%0ANWIxZGE3NzgwMGM2MjIzIj4NCjxkczpUcmFuc2Zvcm1zPg0KPGRzOlRyYW5zZm9ybSBBbGdvcml0%0D%0AaG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNlbnZlbG9wZWQtc2lnbmF0dXJl%0D%0AIi8%2BDQo8ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94%0D%0AbWwtZXhjLWMxNG4jIi8%2BDQo8L2RzOlRyYW5zZm9ybXM%2BDQo8ZHM6RGlnZXN0TWV0aG9kIEFsZ29y%0D%0AaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjc2hhMjU2Ii8%2BDQo8ZHM6RGln%0D%0AZXN0VmFsdWU%2BdUpHR1hod1g2eEYvUnk0MlhNdGdhYnQvaEIrYzNRbCt1KzJNOStMM3Flaz08L2Rz%0D%0AOkRpZ2VzdFZhbHVlPg0KPC9kczpSZWZlcmVuY2U%2BDQo8L2RzOlNpZ25lZEluZm8%2BDQo8ZHM6U2ln%0D%0AbmF0dXJlVmFsdWU%2BDQpZWFFRby9DVVZrb3JsTGFFUWdFV0VDUEttZFA5R2hlZmZ6Y1NZVi9iUlZX%0D%0AamYzMEJyNUozaEo0S2wvZE4rQWNGd3BXRXBoU3ROWnQ4DQpLdWxONU1WcFRHcnNSYjhJWkZGZFRS%0D%0Aa05HN2QyTkJ0VHI0dnBPK251VW52Nk5CZnBkUEx3RytxNGhXRkhXMUZqbTljTWhBNFh3TmxNDQph%0D%0ANHA2SU93eWQyVEkxV2tKbkNVeDRuaTdXMnpXTHZ2aE1jSHdqYWRKSklQNnRxZmlpVE41WDZhSjJw%0D%0Aek8zbWw3dGtZY0NYMTVqOEgyDQp2cHlWNVBQREZISFpSS0c2WHA4NVV2VE8ySUNhbXY3MSswY1dp%0D%0AZ05Ic0pVNTRDRmFHYTVGRmxvWk1kMWJsckZHV05EcjRTUzB2cVdGDQpjWUxWbE9WeFFDajFCc3Fv%0D%0ATjFIcERZV2NkemlDSE5ybVZhL2FIZz09DQo8L2RzOlNpZ25hdHVyZVZhbHVlPg0KPGRzOktleUlu%0D%0AZm8%2BDQo8ZHM6WDUwOURhdGE%2BDQo8ZHM6WDUwOUNlcnRpZmljYXRlPg0KTUlJRUJ6Q0NBdThDQ1FD%0D%0AZG9XTjRYdFVJNmpBTkJna3Foa2lHOXcwQkFRc0ZBRENCeWpFTE1Ba0dBMVVFQmhNQ1EwRXhHVEFY%0D%0AQmdOVg0KQkFnVEVFSnlhWFJwYzJnZ1EyOXNkVzFpYVdFeEVUQVBCZ05WQkFjVENGWnBZM1J2Y21s%0D%0AaE1UY3dOUVlEVlFRS0V5NUhiM1psY201dA0KWlc1MElHOW1JSFJvWlNCUWNtOTJhVzVqWlNCdlpp%0D%0AQkNjbWwwYVhOb0lFTnZiSFZ0WW1saE1ROHdEUVlEVlFRTEV3WlRSbE10UTBFeA0KSWpBZ0JnTlZC%0D%0AQU1UR1ZOR1V5QkRaWEowYVdacFkyRjBaU0JCZFhSb2IzSnBkSGt4SHpBZEJna3Foa2lHOXcwQkNR%0D%0ARVdFRmRVVTFkQg0KVFVCbmIzWXVZbU11WTJFd0hoY05NVE14TVRFNU1UazBORFF3V2hjTk16TXhN%0D%0AVEU1TVRrME5EUXdXakNCdnpFTE1Ba0dBMVVFQmhNQw0KUTBFeEdUQVhCZ05WQkFnVEVFSnlhWFJw%0D%0AYzJnZ1EyOXNkVzFpYVdFeEVUQVBCZ05WQkFjVENGWnBZM1J2Y21saE1UY3dOUVlEVlFRSw0KRXk1%0D%0ASGIzWmxjbTV0Wlc1MElHOW1JSFJvWlNCUWNtOTJhVzVqWlNCdlppQkNjbWwwYVhOb0lFTnZiSFZ0%0D%0AWW1saE1Rd3dDZ1lEVlFRTA0KRXdOVFJsTXhHakFZQmdOVkJBTVRFWE5tY3kxelpuTXVaMjkyTG1K%0D%0AakxtTmhNUjh3SFFZSktvWklodmNOQVFrQkZoQlhWRk5YUVUxQQ0KWjI5MkxtSmpMbU5oTUlJQklq%0D%0AQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF3SjZxcnBncDdLS2QxeStLSHh2%0D%0Aaw0KN1V1cXlpekZ0bkxqN1dUbGxsTkpzZmRtUzBCWGdTMFBrN3FaYVZueUNZelR3RE8vVy9QbVJ3%0D%0AdzVPbFBXbTRHazBicUhQMFFaaUNCUQ0Ka3YvUU1PeEw0djh4VEhqdW5UTXZxeldtQ1BqU3ZaTmlH%0D%0AUmJnck1NN1ppSTRoNUd4RjMzQlR2Rm8xdGdpNllxVC85WkNCRWp5ZXlyMA0KMVFSaUdYSXE3UDg5%0D%0AdGcyYXI1UDUvSzNYMXIyU3FFODhKc1F5amlOUVFaa3JKWm00UlJWQTBiU0RsTW5PNGVtMlVPZzdw%0D%0ARk4rWWRpVQ0Kdkhic1gyYnJ2K3JWY0Q2YkJNRmJnT1NDejlIbTNuS05nSnFOK3JyZTE3QW9CUlBX%0D%0AdVhnYzFYUEUwUE1GbmVmWDRBUHVPZnNLcXpDUw0Kd2YvZ3RTVDhTdW9pUk5MTVJ3SURBUUFCTUEw%0D%0AR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFCcGZ3aG9JMmk5dkxwbXBoSXJsbWFOVFNaaA0Kclo4V3Nw%0D%0ANnhlcXZnc3NKWi9qUXM5SVROaGVMOGhrYXlDZmNweWI5NFN0Y2ExQXdlUmE0dVp0ZTUzR1lEQWFo%0D%0AUlJVTHFweWVZaXRiOQ0KL2Q0ZkdHcVJvSGNSbkQ1YWpaaVl0VWc5dE5Ja3BVNHZRMkRscmxMODNQ%0D%0ARmNCcXdERkdtOHd0aHFROTFEVFFURWM3OWUvQ0RUWm5wVA0KUDUvNmJvUkpicEFPVGJjTGFRWEpp%0D%0AL3M1QVZkUGdMc3dHZEVUV2ppN0tIbGdWTVJsODVuZTBoUFVxTlJmVmRMQnNVUmxJeXlHNkt4aA0K%0D%0Aa0Z6d0t0VUZZUnVDaDNHRjJqQU95a0VCMFNvZHB1WUc3MDUyc0JSNUw0ekZORHBKbnAzZmlnRkFZ%0D%0AUUdSMGlsYXpsbjhQZWowLzlBOQ0KU2R3U09lWWVBQitSDQo8L2RzOlg1MDlDZXJ0aWZpY2F0ZT4N%0D%0ACjwvZHM6WDUwOURhdGE%2BDQo8L2RzOktleUluZm8%2BDQo8L2RzOlNpZ25hdHVyZT4NCiAgICAgICAg%0D%0APG5zMjpTdWJqZWN0Pg0KICAgICAgICAgICAgPG5zMjpOYW1lSUQgRm9ybWF0PSJ1cm46b2FzaXM6%0D%0AbmFtZXM6dGM6U0FNTDoyLjA6bmFtZWlkLWZvcm1hdDpwZXJzaXN0ZW50Ij4xMzRDMjFCRjBFMzk0%0D%0AOUI4OTcxRDQ4NjZDRTE3RkIxRDwvbnMyOk5hbWVJRD4NCiAgICAgICAgICAgIDxuczI6U3ViamVj%0D%0AdENvbmZpcm1hdGlvbiBNZXRob2Q9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpjbTpiZWFy%0D%0AZXIiPg0KICAgICAgICAgICAgICAgIDxuczI6U3ViamVjdENvbmZpcm1hdGlvbkRhdGEgSW5SZXNw%0D%0Ab25zZVRvPSJJRF9kYmNhOWJiMy0zNjJkLTQ3OGQtYWZkZS0wMDM1MjY1MTAyNDUiIE5vdE9uT3JB%0D%0AZnRlcj0iMjAyMC0xMC0zMFQyMjoxMDo0MVoiIFJlY2lwaWVudD0iaHR0cHM6Ly9vaWRjLmdvdi5i%0D%0AYy5jYS9hdXRoL3JlYWxtcy9pZGlyL2Jyb2tlci9pZGlyL2VuZHBvaW50Ii8%2BDQogICAgICAgICAg%0D%0AICA8L25zMjpTdWJqZWN0Q29uZmlybWF0aW9uPg0KICAgICAgICA8L25zMjpTdWJqZWN0Pg0KICAg%0D%0AICAgICA8bnMyOkNvbmRpdGlvbnMgTm90QmVmb3JlPSIyMDIwLTEwLTMwVDIyOjA4OjQxWiIgTm90%0D%0AT25PckFmdGVyPSIyMDIwLTEwLTMwVDIyOjEwOjQxWiI%2BDQogICAgICAgICAgICA8bnMyOkF1ZGll%0D%0AbmNlUmVzdHJpY3Rpb24%2BDQogICAgICAgICAgICAgICAgPG5zMjpBdWRpZW5jZT5odHRwczovL29p%0D%0AZGMuZ292LmJjLmNhL2F1dGgvcmVhbG1zL2lkaXI8L25zMjpBdWRpZW5jZT4NCiAgICAgICAgICAg%0D%0AIDwvbnMyOkF1ZGllbmNlUmVzdHJpY3Rpb24%2BDQogICAgICAgIDwvbnMyOkNvbmRpdGlvbnM%2BDQog%0D%0AICAgICAgIDxuczI6QXV0aG5TdGF0ZW1lbnQgQXV0aG5JbnN0YW50PSIyMDIwLTEwLTMwVDIyOjA3%0D%0AOjQ3WiIgU2Vzc2lvbkluZGV4PSJOREt1UHlOMktCbU84S1NpQnozLzdsR0pXOEk9MWgyMkN3PT0i%0D%0AIFNlc3Npb25Ob3RPbk9yQWZ0ZXI9IjIwMjAtMTAtMzBUMjI6MTA6NDFaIj4NCiAgICAgICAgICAg%0D%0AIDxuczI6QXV0aG5Db250ZXh0Pg0KICAgICAgICAgICAgICAgIDxuczI6QXV0aG5Db250ZXh0Q2xh%0D%0Ac3NSZWY%2BdXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmQ8L25z%0D%0AMjpBdXRobkNvbnRleHRDbGFzc1JlZj4NCiAgICAgICAgICAgIDwvbnMyOkF1dGhuQ29udGV4dD4N%0D%0ACiAgICAgICAgPC9uczI6QXV0aG5TdGF0ZW1lbnQ%2BDQogICAgICAgIDxuczI6QXR0cmlidXRlU3Rh%0D%0AdGVtZW50Pg0KICAgICAgICAgICAgPG5zMjpBdHRyaWJ1dGUgTmFtZT0idXNlcmlkZW50aWZpZXIi%0D%0AIE5hbWVGb3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphdHRybmFtZS1mb3JtYXQ6%0D%0AdW5zcGVjaWZpZWQiPg0KICAgICAgICAgICAgICAgIDxuczI6QXR0cmlidXRlVmFsdWU%2BMTM0QzIx%0D%0AQkYwRTM5NDlCODk3MUQ0ODY2Q0UxN0ZCMUQ8L25zMjpBdHRyaWJ1dGVWYWx1ZT4NCiAgICAgICAg%0D%0AICAgIDwvbnMyOkF0dHJpYnV0ZT4NCiAgICAgICAgICAgIDxuczI6QXR0cmlidXRlIE5hbWU9ImRp%0D%0Ac3BsYXluYW1lIiBOYW1lRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXR0cm5h%0D%0AbWUtZm9ybWF0OnVuc3BlY2lmaWVkIj4NCiAgICAgICAgICAgICAgICA8bnMyOkF0dHJpYnV0ZVZh%0D%0AbHVlPlNpbW9uaWFuLCBQYXRyaWNrIENJVFo6RVg8L25zMjpBdHRyaWJ1dGVWYWx1ZT4NCiAgICAg%0D%0AICAgICAgIDwvbnMyOkF0dHJpYnV0ZT4NCiAgICAgICAgICAgIDxuczI6QXR0cmlidXRlIE5hbWU9%0D%0AImxhc3RuYW1lIiBOYW1lRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXR0cm5h%0D%0AbWUtZm9ybWF0OnVuc3BlY2lmaWVkIj4NCiAgICAgICAgICAgICAgICA8bnMyOkF0dHJpYnV0ZVZh%0D%0AbHVlPlNpbW9uaWFuPC9uczI6QXR0cmlidXRlVmFsdWU%2BDQogICAgICAgICAgICA8L25zMjpBdHRy%0D%0AaWJ1dGU%2BDQogICAgICAgICAgICA8bnMyOkF0dHJpYnV0ZSBOYW1lPSJmaXJzdG5hbWUiIE5hbWVG%0D%0Ab3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphdHRybmFtZS1mb3JtYXQ6dW5zcGVj%0D%0AaWZpZWQiPg0KICAgICAgICAgICAgICAgIDxuczI6QXR0cmlidXRlVmFsdWU%2BUGF0cmljazwvbnMy%0D%0AOkF0dHJpYnV0ZVZhbHVlPg0KICAgICAgICAgICAgPC9uczI6QXR0cmlidXRlPg0KICAgICAgICAg%0D%0AICAgPG5zMjpBdHRyaWJ1dGUgTmFtZT0idXNlcm5hbWUiIE5hbWVGb3JtYXQ9InVybjpvYXNpczpu%0D%0AYW1lczp0YzpTQU1MOjIuMDphdHRybmFtZS1mb3JtYXQ6dW5zcGVjaWZpZWQiPg0KICAgICAgICAg%0D%0AICAgICAgIDxuczI6QXR0cmlidXRlVmFsdWU%2BUFNJTU9OSUE8L25zMjpBdHRyaWJ1dGVWYWx1ZT4N%0D%0ACiAgICAgICAgICAgIDwvbnMyOkF0dHJpYnV0ZT4NCiAgICAgICAgICAgIDxuczI6QXR0cmlidXRl%0D%0AIE5hbWU9ImVtYWlsIiBOYW1lRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXR0%0D%0Acm5hbWUtZm9ybWF0OnVuc3BlY2lmaWVkIj4NCiAgICAgICAgICAgICAgICA8bnMyOkF0dHJpYnV0%0D%0AZVZhbHVlPlBhdHJpY2suU2ltb25pYW5AZ292LmJjLmNhPC9uczI6QXR0cmlidXRlVmFsdWU%2BDQog%0D%0AICAgICAgICAgICA8L25zMjpBdHRyaWJ1dGU%2BDQogICAgICAgIDwvbnMyOkF0dHJpYnV0ZVN0YXRl%0D%0AbWVudD4NCiAgICA8L25zMjpBc3NlcnRpb24%2BDQo8L1Jlc3BvbnNlPg%3D%3D",
          RelayState:
            "9Zc0QA9vgvS_Eyceq_PMTDt3OhmqRfw0kgvzeKIRMHw.FoFG_BphPik.https%3A%2F%2Foidc.gov.bc.ca%2Fauth%2Frealms%2Fdevhub",
        },
        {
          headers: {
            Host: "oidc.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            Origin: "https://sfs7.gov.bc.ca",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            Referer: "https://sfs7.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=c1d5eedd-d23a-48e9-8657-3fbc83f9db7b.sso-prod-15-78zp2; KC_RESTART=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1MjZlNmI5Ny02YzM5LTQ2MzctOGFiNy1jMmJmNWVhNWYwZWQifQ.eyJjaWQiOiJodHRwczovL29pZGMuZ292LmJjLmNhL2F1dGgvcmVhbG1zL2Rldmh1YiIsInB0eSI6Im9wZW5pZC1jb25uZWN0IiwicnVyaSI6Imh0dHBzOi8vc3NvLnBhdGhmaW5kZXIuZ292LmJjLmNhL2F1dGgvcmVhbG1zL2Rldmh1Yi9icm9rZXIvaWRpci9lbmRwb2ludCIsImFjdCI6IkFVVEhFTlRJQ0FURSIsIm5vdGVzIjp7InNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6Ly9vaWRjLmdvdi5iYy5jYS9hdXRoL3JlYWxtcy9pZGlyIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJyZWRpcmVjdF91cmkiOiJodHRwczovL3Nzby5wYXRoZmluZGVyLmdvdi5iYy5jYS9hdXRoL3JlYWxtcy9kZXZodWIvYnJva2VyL2lkaXIvZW5kcG9pbnQiLCJzdGF0ZSI6ImFtS1ZqMV9yX3RvbW51QmlfeURnZ1RGNHhRcUlPdWpMOERjNENRY0JIOTQuQXBJbkdKak5VUDguZGV2aHViLXdlYiIsIm5vbmNlIjoiUmRsY1B3ajU1YUxjSE1CcHBRX1ZydyJ9fQ.FncGoRV7puv3Lahmoms2EQcCJZRr40pBz0nCfh0lmsw; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; a2f2b327911c1e47a4663e182e584047=52d75ce43550b42d41581efba230205a; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          },
        }
      );

      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/broker/idir/endpoint?state=amKVj1_r_tomnuBi_yDggTF4xQqIOujL8Dc4CQcBH94.ApInGJjNUP8.devhub-web&session_state=c1d5eedd-d23a-48e9-8657-3fbc83f9db7b&code=62497988-229e-4046-ba73-0b52e5172e5b.c1d5eedd-d23a-48e9-8657-3fbc83f9db7b.c7305de2-4b1f-4e55-b09a-67a7ba0e97ae",
        {
          headers: {
            Host: "sso.pathfinder.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=37758690-9575-48c8-83ea-e5692fbeea64.sso-prod-15-ldbxg; KC_RESTART=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZDAzODUzNi01MWVhLTQxYjQtYjFmNC1hYTUyNGMzMGU3YTgifQ.eyJjaWQiOiJkZXZodWItd2ViIiwicHR5Ijoib3BlbmlkLWNvbm5lY3QiLCJydXJpIjoiaHR0cHM6Ly9kZXZlbG9wZXIuZ292LmJjLmNhLyIsImFjdCI6IkFVVEhFTlRJQ0FURSIsIm5vdGVzIjp7InNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6Ly9zc28ucGF0aGZpbmRlci5nb3YuYmMuY2EvYXV0aC9yZWFsbXMvZGV2aHViIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJyZWRpcmVjdF91cmkiOiJodHRwczovL2RldmVsb3Blci5nb3YuYmMuY2EvIiwic3RhdGUiOiIxOTRlZTFlZS0zM2Y0LTQxNDItOGY0Mi1hZjkwN2U4OTU1ODkiLCJub25jZSI6IjRlNDhjZGQyLWY1ZDEtNDc3Zi04YjczLWY2ZTZiZWJlYzdlOCIsInJlc3BvbnNlX21vZGUiOiJmcmFnbWVudCJ9fQ.vdFL1fc_3CQ--pndE4ibQyJR25CgG-ppUSXcs-1Xzv8; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; 5b37853b94ab0643d4f4ee6cd2f5580a=26373ceedec46f92ec8bdf63752e1afa; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          },
        }
      );

      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/login-actions/post-broker-login?client_id=devhub-web&tab_id=ApInGJjNUP8",
        {
          headers: {
            Host: "sso.pathfinder.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=37758690-9575-48c8-83ea-e5692fbeea64.sso-prod-15-ldbxg; KC_RESTART=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZDAzODUzNi01MWVhLTQxYjQtYjFmNC1hYTUyNGMzMGU3YTgifQ.eyJjaWQiOiJkZXZodWItd2ViIiwicHR5Ijoib3BlbmlkLWNvbm5lY3QiLCJydXJpIjoiaHR0cHM6Ly9kZXZlbG9wZXIuZ292LmJjLmNhLyIsImFjdCI6IkFVVEhFTlRJQ0FURSIsIm5vdGVzIjp7InNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6Ly9zc28ucGF0aGZpbmRlci5nb3YuYmMuY2EvYXV0aC9yZWFsbXMvZGV2aHViIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJyZWRpcmVjdF91cmkiOiJodHRwczovL2RldmVsb3Blci5nb3YuYmMuY2EvIiwic3RhdGUiOiIxOTRlZTFlZS0zM2Y0LTQxNDItOGY0Mi1hZjkwN2U4OTU1ODkiLCJub25jZSI6IjRlNDhjZGQyLWY1ZDEtNDc3Zi04YjczLWY2ZTZiZWJlYzdlOCIsInJlc3BvbnNlX21vZGUiOiJmcmFnbWVudCJ9fQ.vdFL1fc_3CQ--pndE4ibQyJR25CgG-ppUSXcs-1Xzv8; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; 5b37853b94ab0643d4f4ee6cd2f5580a=26373ceedec46f92ec8bdf63752e1afa; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          },
        }
      );

      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/broker/after-post-broker-login?session_code=pm-_ZqP8Z4Iyrc1jDke9FMfkhvM4DS5mlMf7IEWUce8&client_id=devhub-web&tab_id=ApInGJjNUP8",
        {
          headers: {
            Host: "sso.pathfinder.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=37758690-9575-48c8-83ea-e5692fbeea64.sso-prod-15-ldbxg; KC_RESTART=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZDAzODUzNi01MWVhLTQxYjQtYjFmNC1hYTUyNGMzMGU3YTgifQ.eyJjaWQiOiJkZXZodWItd2ViIiwicHR5Ijoib3BlbmlkLWNvbm5lY3QiLCJydXJpIjoiaHR0cHM6Ly9kZXZlbG9wZXIuZ292LmJjLmNhLyIsImFjdCI6IkFVVEhFTlRJQ0FURSIsIm5vdGVzIjp7InNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6Ly9zc28ucGF0aGZpbmRlci5nb3YuYmMuY2EvYXV0aC9yZWFsbXMvZGV2aHViIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJyZWRpcmVjdF91cmkiOiJodHRwczovL2RldmVsb3Blci5nb3YuYmMuY2EvIiwic3RhdGUiOiIxOTRlZTFlZS0zM2Y0LTQxNDItOGY0Mi1hZjkwN2U4OTU1ODkiLCJub25jZSI6IjRlNDhjZGQyLWY1ZDEtNDc3Zi04YjczLWY2ZTZiZWJlYzdlOCIsInJlc3BvbnNlX21vZGUiOiJmcmFnbWVudCJ9fQ.vdFL1fc_3CQ--pndE4ibQyJR25CgG-ppUSXcs-1Xzv8; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; 5b37853b94ab0643d4f4ee6cd2f5580a=26373ceedec46f92ec8bdf63752e1afa; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          },
        }
      );

      response = http.get("https://developer.gov.bc.ca/", {
        headers: {
          Host: "developer.gov.bc.ca",
          Connection: "keep-alive",
          "Cache-Control": "max-age=0",
          "Upgrade-Insecure-Requests": "1",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "Sec-Fetch-Site": "same-site",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Dest": "document",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
          Cookie:
            "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          "If-None-Match": '"qj0z5u1qju"',
          "If-Modified-Since": "Fri, 30 Oct 2020 17:27:30 GMT",
        },
      });

      response = http.get(
        "https://developer.gov.bc.ca/google-fonts/s/notosans/v11/o-0IIpQlx3QUlC5A4PNr5TRA.woff2",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "If-None-Match": '"qj0ywnce0"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:21:59 GMT",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "font",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/component---src-pages-index-js-cf842f241bd852f79e66.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k1e2c"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/framework-f194c10b96b6f1e00e47.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k36l7"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/app-432a4a084ccce7c7cf8a.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k6geg"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/commons-7bef18d0b4bcf7944100.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k2ems"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/f074f559a032b8264a13a7f25f874bd932a5f1eb-ddba7e1efb010bd26ca9.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k10ip"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/3e1ccbca-fa199dfbf17b70ba09f9.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k7mwk"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/390b3e25ba93e729f82a42a6f8f11a33643db815-57861048cb3844ab70c1.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3kex1"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/cb1608f2-39d0af7c1523ec725bcc.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k84r"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/styles-d3259afcef90844d6efd.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k39"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/bd0011e483472dbf6a4d34fccbbb565776b1e91b-85d77489411449ad7e7b.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k3bk"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/674bb56b0b83b427dabf095b77d275b8447af0ca-69a2c9d5fedfeb4d6e78.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3kuct"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/c657c11d211f4282c8ca55aa05332c87946460ed-48e4190d9c46a5fcf3f0.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k1vmo"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/76e9782da68f9df8a59628e6a5dd8b3e9f67231d-e9b2c7cd94d27e494942.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k13n6"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/b54b8ef1e41f3e2b0fbb590a04c1f7790ebd6944-33300b02de1ca9c6c924.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k4yv"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/webpack-runtime-df327bef74a37572fe9b.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k5me"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/index/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3qdxs9"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:14 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/sq/d/1601106418.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0yzj2tcxy"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:23:43 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/sq/d/3392183595.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0yza1cy"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:23:34 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/sq/d/4235719968.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0yz21cgl"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:23:26 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/app-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3p1e"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:13 GMT",
          },
        }
      );

      response = http.get(
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        {
          headers: {
            Origin: "https://developer.gov.bc.ca",
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get("https://cdn.polyfill.io/v2/polyfill.min.js", {
        headers: {
          Referer: "https://developer.gov.bc.ca/",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        },
      });

      response = http.get(
        "https://developer.gov.bc.ca/static/BCID_H_rgb_rev-20eebe74aef7d92e02732a18b6aa6bbb.svg",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:48 GMT",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            "If-None-Match": '"qj0z4ogp4"',
            Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "image",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/static/logo-2ed1626f54e85f76541688513b997690.svg",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:48 GMT",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            "If-None-Match": '"qj0z4osyu"',
            Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "image",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          },
        }
      );

      response = http.get("https://developer.gov.bc.ca/images/favicon.ico", {
        headers: {
          Host: "developer.gov.bc.ca",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://developer.gov.bc.ca/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
          Cookie:
            "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          "If-None-Match": '"qj0z00e6q"',
          "If-Modified-Since": "Fri, 30 Oct 2020 17:24:00 GMT",
        },
      });

      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/protocol/openid-connect/login-status-iframe.html",
        {
          headers: {
            Host: "sso.pathfinder.gov.bc.ca",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "iframe",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=37758690-9575-48c8-83ea-e5692fbeea64.sso-prod-15-ldbxg; KEYCLOAK_IDENTITY=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZDAzODUzNi01MWVhLTQxYjQtYjFmNC1hYTUyNGMzMGU3YTgifQ.eyJleHAiOjE2MDQxMzE3NTIsImlhdCI6MTYwNDA5NTc1MiwianRpIjoiN2JmNTMwNTAtNjMyZS00Mjc4LTk3OTUtZDA2YTc3NjNjZGI2IiwiaXNzIjoiaHR0cHM6Ly9zc28ucGF0aGZpbmRlci5nb3YuYmMuY2EvYXV0aC9yZWFsbXMvZGV2aHViIiwic3ViIjoiYTk4NmRmZWEtYTFmMi00ZDAxLWJlZjEtZGQxNDJhZjg3OGU4IiwidHlwIjoiU2VyaWFsaXplZC1JRCIsInNlc3Npb25fc3RhdGUiOiIzNzc1ODY5MC05NTc1LTQ4YzgtODNlYS1lNTY5MmZiZWVhNjQiLCJzdGF0ZV9jaGVja2VyIjoiWXg3cUZoc3c1TmVOd2xhZW0xMzMtMjVNZ1daYmx5LXVvb1NCMWVMbVRzNCJ9.6tPXoXQHEd0Z9SMx-aP74F21irTqyZFhWaxgYZSswqc; KEYCLOAK_IDENTITY_LEGACY=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZDAzODUzNi01MWVhLTQxYjQtYjFmNC1hYTUyNGMzMGU3YTgifQ.eyJleHAiOjE2MDQxMzE3NTIsImlhdCI6MTYwNDA5NTc1MiwianRpIjoiN2JmNTMwNTAtNjMyZS00Mjc4LTk3OTUtZDA2YTc3NjNjZGI2IiwiaXNzIjoiaHR0cHM6Ly9zc28ucGF0aGZpbmRlci5nb3YuYmMuY2EvYXV0aC9yZWFsbXMvZGV2aHViIiwic3ViIjoiYTk4NmRmZWEtYTFmMi00ZDAxLWJlZjEtZGQxNDJhZjg3OGU4IiwidHlwIjoiU2VyaWFsaXplZC1JRCIsInNlc3Npb25fc3RhdGUiOiIzNzc1ODY5MC05NTc1LTQ4YzgtODNlYS1lNTY5MmZiZWVhNjQiLCJzdGF0ZV9jaGVja2VyIjoiWXg3cUZoc3c1TmVOd2xhZW0xMzMtMjVNZ1daYmx5LXVvb1NCMWVMbVRzNCJ9.6tPXoXQHEd0Z9SMx-aP74F21irTqyZFhWaxgYZSswqc; KEYCLOAK_SESSION=devhub/a986dfea-a1f2-4d01-bef1-dd142af878e8/37758690-9575-48c8-83ea-e5692fbeea64; KEYCLOAK_SESSION_LEGACY=devhub/a986dfea-a1f2-4d01-bef1-dd142af878e8/37758690-9575-48c8-83ea-e5692fbeea64; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; 5b37853b94ab0643d4f4ee6cd2f5580a=26373ceedec46f92ec8bdf63752e1afa; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/journeys/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3q4ko"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:14 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/aboutDevhub/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3qfu2"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:14 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/topic/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3q61"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:14 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/documentation/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3p1oy2"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:13 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/self-service-tools/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3pje6"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:13 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/components/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3pl3l"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:13 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/events/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3q44ts"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:14 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/repositories/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3pa39"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:13 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/topics/page-data.json",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            Origin: "https://developer.gov.bc.ca",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0z3q24kz"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:14 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/aboutDevhub/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/topic/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.post(
        "https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/protocol/openid-connect/token",
        {
          code:
            "2da6b7c2-ae09-42a0-8161-c6890d34c358.37758690-9575-48c8-83ea-e5692fbeea64.5161504c-4a9d-4652-b3db-4ce51cf88b89",
          grant_type: "authorization_code",
          client_id: "devhub-web",
          redirect_uri: "https%3A%2F%2Fdeveloper.gov.bc.ca%2F",
        },
        {
          headers: {
            Host: "sso.pathfinder.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            "Content-type": "application/x-www-form-urlencoded",
            Accept: "*/*",
            Origin: "https://developer.gov.bc.ca",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=37758690-9575-48c8-83ea-e5692fbeea64.sso-prod-15-ldbxg; KEYCLOAK_IDENTITY=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZDAzODUzNi01MWVhLTQxYjQtYjFmNC1hYTUyNGMzMGU3YTgifQ.eyJleHAiOjE2MDQxMzE3NTIsImlhdCI6MTYwNDA5NTc1MiwianRpIjoiN2JmNTMwNTAtNjMyZS00Mjc4LTk3OTUtZDA2YTc3NjNjZGI2IiwiaXNzIjoiaHR0cHM6Ly9zc28ucGF0aGZpbmRlci5nb3YuYmMuY2EvYXV0aC9yZWFsbXMvZGV2aHViIiwic3ViIjoiYTk4NmRmZWEtYTFmMi00ZDAxLWJlZjEtZGQxNDJhZjg3OGU4IiwidHlwIjoiU2VyaWFsaXplZC1JRCIsInNlc3Npb25fc3RhdGUiOiIzNzc1ODY5MC05NTc1LTQ4YzgtODNlYS1lNTY5MmZiZWVhNjQiLCJzdGF0ZV9jaGVja2VyIjoiWXg3cUZoc3c1TmVOd2xhZW0xMzMtMjVNZ1daYmx5LXVvb1NCMWVMbVRzNCJ9.6tPXoXQHEd0Z9SMx-aP74F21irTqyZFhWaxgYZSswqc; KEYCLOAK_IDENTITY_LEGACY=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZDAzODUzNi01MWVhLTQxYjQtYjFmNC1hYTUyNGMzMGU3YTgifQ.eyJleHAiOjE2MDQxMzE3NTIsImlhdCI6MTYwNDA5NTc1MiwianRpIjoiN2JmNTMwNTAtNjMyZS00Mjc4LTk3OTUtZDA2YTc3NjNjZGI2IiwiaXNzIjoiaHR0cHM6Ly9zc28ucGF0aGZpbmRlci5nb3YuYmMuY2EvYXV0aC9yZWFsbXMvZGV2aHViIiwic3ViIjoiYTk4NmRmZWEtYTFmMi00ZDAxLWJlZjEtZGQxNDJhZjg3OGU4IiwidHlwIjoiU2VyaWFsaXplZC1JRCIsInNlc3Npb25fc3RhdGUiOiIzNzc1ODY5MC05NTc1LTQ4YzgtODNlYS1lNTY5MmZiZWVhNjQiLCJzdGF0ZV9jaGVja2VyIjoiWXg3cUZoc3c1TmVOd2xhZW0xMzMtMjVNZ1daYmx5LXVvb1NCMWVMbVRzNCJ9.6tPXoXQHEd0Z9SMx-aP74F21irTqyZFhWaxgYZSswqc; KEYCLOAK_SESSION=devhub/a986dfea-a1f2-4d01-bef1-dd142af878e8/37758690-9575-48c8-83ea-e5692fbeea64; KEYCLOAK_SESSION_LEGACY=devhub/a986dfea-a1f2-4d01-bef1-dd142af878e8/37758690-9575-48c8-83ea-e5692fbeea64; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; 5b37853b94ab0643d4f4ee6cd2f5580a=26373ceedec46f92ec8bdf63752e1afa; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/self-service-tools/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/journeys/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/documentation/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/repositories/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/events/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/component---src-pages-about-devhub-js-d1743d6760fda2daa00b.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k149"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/topics/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/component---src-pages-topic-js-0cd712e4addbf5bac9a8.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k768"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get("https://developer.gov.bc.ca/manifest.webmanifest", {
        headers: {
          Host: "developer.gov.bc.ca",
          Connection: "keep-alive",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://developer.gov.bc.ca/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
          "If-None-Match": '"qj0yz1qr"',
          "If-Modified-Since": "Fri, 30 Oct 2020 17:23:25 GMT",
        },
      });

      response = http.get(
        "https://developer.gov.bc.ca/component---src-templates-resource-type-js-deb07694132b22d9cdc9.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k33x"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/component---src-pages-journeys-js-83a78b8051f044287821.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3kdqk"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/component---src-pages-topics-js-a697363a076d63657420.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k8ue"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/component---src-templates-events-js-789e18d5bed6a3cd9976.js",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "application/signed-exchange;v=b3;q=0.9,*/*;q=0.8",
            Purpose: "prefetch",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": 'W/"qj0z3k3q4"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:26:08 GMT",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/page-data/components/page-data.json",
        {
          headers: {
            Referer: "https://developer.gov.bc.ca/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://developer.gov.bc.ca/icons/icon-144x144.png?v=5adb8dd48777325050a7a8ff57eb69cd",
        {
          headers: {
            Host: "developer.gov.bc.ca",
            Connection: "keep-alive",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "image",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD",
            "If-None-Match": '"qj0yz0e6y"',
            "If-Modified-Since": "Fri, 30 Oct 2020 17:23:24 GMT",
          },
        }
      );
    }
  );

  group(
    "page_28 - https://sfs7.gov.bc.ca/affwebservices/redirectjsp/pathfinder/redirect.jsp?SAMLTRANSACTIONID=12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92&SMPORTALURL=https%3A%2F%2Fsfs7.gov.bc.ca%2Faffwebservices%2Fpublic%2Fsaml2sso",
    function () {
      response = http.get(
        "https://sfs7.gov.bc.ca/affwebservices/redirectjsp/pathfinder/redirect.jsp?SAMLTRANSACTIONID=12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92&SMPORTALURL=https%3A%2F%2Fsfs7.gov.bc.ca%2Faffwebservices%2Fpublic%2Fsaml2sso&SMPORTALURL=https%253A%252F%252Fsfs7.gov.bc.ca%252Faffwebservices%252Fpublic%252Fsaml2sso",
        {
          headers: {
            Host: "sfs7.gov.bc.ca",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            Referer: "https://logon7.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              'PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMFED_OLD_SESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD; GUID="1:521528e1-df205fbc-dfa2d191-c0f80525-0605086d-ddf"; SMSESSION=L2Xa6W0gtt+AKi6dCQFer9vZI1Q8VXUPC1IQ7AenKPMU4N3MWAh1PE9xT6eF74UiO0M4IG1WQ34X6Doz6G9ghYhMvLHYI8ltf3R0YQ7X8EyNDSmq6sr3TAKJxnnEPFF27vENDENjJimIn9OV1Q218a7YBWXpIgRsPlJQd9/QRyiyr+EPSJl84pq5BdDfBKPtL+YN7JxuTcxXuN5XV4LS0EGQwKqFeL/P3sPf7zm+vjfMS311CbgJkvvAwD78GoazuYwU2KDNyV6IMjvTrvscqMeGca7PnUKrfMC+ySCe2RurYD7Omt0Dc/fDzt8CDEWCjl/+4ifCrHAUzOIqsASKEswCnvMkzLNayyLjxbYngfdLQMyO5Geif6/1Ud5j98ZBNmrQyP4eq5pJtnauWuzbCGW9IqNL8zX41st10Tdte4uv6ObXHJU+ExZU7Okz9EyI3GOyFvVdb7TjkNKKh6Xtv23Y4N7TQ1MsIETi04vR+U1jr4jlDBEGcm3vbBbxCy9V2XHsrHibSmr4itrMaewtJ9vhfO3KY+/O9O697UgK+UrddIN8Yh/Lww1aa5NU/0X6ZqVXYemGI6+/DUjZ/q1iUpKA9Z9CC2rCXLWPFhzJ5+1JyY1kVf+FrMtsqTs7kJKuNYoHuAWlVMNrGp5r8EUcEQvwm92uA1vqKt5AQssj7q4gbu5C5XJnzeAhn2UrzWDivfSfpX8CdKVLQYElGOHaiVugz7+7PO9Pz5aErhtixJZHrcW22p4hopNbcGaHINuOC7zKpM9rerANIAZKW1qt9Kf08iwM4fRD2Ctgce2Y2zXZ6PrxqHi13l9eFE8PK5P/LbdIHyiNOWaIET5FqgLdw6KkrtDd6DwuYL+owYB8KaAU5/hIoTA4TvL90odMJjtRsBOOP0jOBZZlsHivqlO2cJ3zwsYxw2M6dbrknc8BhMc5UrUNtQ8nbin9SxyvIXz1O+C+3TEgRkUAqfsqqeRxCTPiTlFyAZs/xrJpfBbh7DqFbnZAWMh174sTZrtUq3yv5FI3dNfTIyGxJmEp3lfxP79KhRBo1K+6G++lG9fcYDjXu8m6MM2vAMspZyd1S31kVeNhwRahzP+4K74VtW7bWAXveF6A5j+DjCAyQV3q9D2TefYvRgFp0HuT7KlVNWUtnVgiFCx7L0+OLXDHWa4pTZXYQSCP4Cf1Hbvw3hRy5MSUm/kCOnULiWY2BcyanDvnRXTQxgp1Qu1pdPTZeGE5WUAjjd5raGaw',
          },
        }
      );
      response = http.get(
        "https://sfs7.gov.bc.ca/affwebservices/public/saml2sso?SMASSERTIONREF=QUERY&SAMLTRANSACTIONID=12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
        {
          headers: {
            Host: "sfs7.gov.bc.ca",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            Referer: "https://logon7.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              'PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMFED_OLD_SESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD; GUID="1:521528e1-df205fbc-dfa2d191-c0f80525-0605086d-ddf"; SMSESSION=9DRQwWgAQWKw3TNItR3jujdhBCqR4JXBE4pwfxTD5uTpsOq6PRzAO3krNJdk6LBFcDuRDTUsSzbm/ta5TKuTjatudv24go2m7slatNLkGwhNw/ZZnkGG/hyqUVQgeJ2/3BzQRDiQ/B7e02gBAnALQ9cH2KZEJHtJA2/gIObnanDlW602F/odPQXSScJW/usb8pcr7rlF8EuKRkOkZnDP5qz0VoEZIHwPvS/5qa9KGdVe1mcXL5C4x3m5PIuNbFc9+Xbpia28FvBEDmJ30lNHx5lUrlCfviRNGFaGB6tNnrSOvjhT3Us4rlm4d0XYbHaxoYQuU7QtTHITcdIHRkwT87o7WSzWERfLWgkR/YMrc4x27KtHAFDQ0hVAdgYQtWZ2C/PWaVpFbg0/pcskwuuSFbvD8lu7mrDCyY/uScf8wAQyiS2c/RoysS+xJpPtQtBswfxl1xCzRnSJk1pOg1fyPz5+aWeO0j6G7Frr1XMqpBmFaksAShnmhK9xgaqWq8dQEvFnIkHR/2HvRGLKCgzAt/yey8u8iqVJUlA+4KIcfKHO1gpsW+4EFvtTtoFZORzRNPLGz0Cl+XvvYcX9m4YZmbDoA9wKjzBE04jK8fe9mA8vTmnAasekeffSB/MvQV3+rV9JLyPz3xVUHSVii470quvzRc0ck20qI9rjKTUPZ+r+u2/VQ/Ml9Oe2B3Vk/l0UFyaNdJ95qd0/6FYluqxeSIh7GRni7wM0ahi8IqDF/7slDLOB6qYLlkPzk95UYsgYAvuEeFb5yBK02+Ed26bIS7zK9ZRPaa7goPxLuR9RTwzQuRjCKcWQAIYg2qb+FrrgyfrEe+Z9lZerf+yup56Ay/dRUpH16JJMAbXfhpYgPMVTMHsOZ1D09bNPd/Iz5xRUCLKfMGsaBeUAyI0wmSJvG4H02vGIrvzx8BLAztZVLMaat/4gB9zlCYPCdx32QR3dNQ6yLYRsQhglxtYuqD23IlaWZq/CHvUjFkF+AEueZc1LRJG86a73W9HG0TZZrkqBw9YUH6/stWBh+ZVpob0zcLhuAugwUw7W8d2Qhnj+YiC17jGEFGa1NKiGSU1h9i2fmevoMVVY45SBysb5xxAZaghpImKUYBYgjpNQsFwtsvfBFPX3XbidmZBILMmVCY6AIdYyn8AwcP4KWJVYZexnZoKBrX4YWhl/6SAXcRW4JUd8KV/a6OVl6z4VkCLn/scEG/Rx6osu3Y2f7YRIPtKNppADJZNGAoz5Rr75u9N8zdM4fH03YvrP9rYtB8/dTVzF',
          },
        }
      );
    }
  );

  group(
    "page_27 - https://logon7.gov.bc.ca/clp-cgi/int01/logon.fcc",
    function () {
      response = http.post(
        "https://logon7.gov.bc.ca/clp-cgi/int01/logon.fcc",
        {
          SMENC: "ISO-8859-1",
          SMLOCALE: "US-EN",
          target: "%2Fclp-cgi%2Fint01%2Fprivate%2FpostLogon.cgi",
          smauthreason: "0",
          smagentname: "",
          user: "PSIMONIA",
          password: "Js30rrjackson4%24",
        },
        {
          headers: {
            Host: "logon7.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            Origin: "https://logon7.gov.bc.ca",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            Referer: "https://logon7.gov.bc.ca/clp-cgi/preLogon.cgi",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              'PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; Dummy1=DummyVal1; BCGOVFlags=1000%3A1%2C0; BCGOVCustom=NULL; BCGOVBrand=NULL; BCGOVBehavior=NULL; Dummy2=DummyVal2; preDummy1=DummyVal1; preDummy2=DummyVal2; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; BCGOVPartner=NULL; BCGOVReferer=https%3A%2F%2Flogon7.gov.bc.ca%2Fclp-mp%2Fntlm.cgi%3Fflags%3D1000%3A1%2C0%26TYPE%3D33554433%26REALMOID%3D06-9b8910a9-f61f-470c-ac19-2ea8de557e18%26GUID%3D%26SMAUTHREASON%3D0%26METHOD%3DGET%26SMAGENTNAME%3D%24SM%24yYBy2798t2EmGcW4R3oM1T3cmXAFL22bzdcjaL6YhrmVxv%252b9bGdXsCzZmU1EJLzX%252fZSRCb45%252fO%252bFy5cg%252bG7LpCy%252bV7aR4E8s%26TARGET%3D%24SM%24https%253a%252f%252ftimepayhome%252egov%252ebc%252eca%252f; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMFED_OLD_SESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD; SMSESSION=LOGGEDOFF; GUID="1:521528e1-df205fbc-dfa2d191-c0f80525-0605086d-ddf"; BCGOVTarget=HTTPS%3A%2F%2Fsfs7.gov.bc.ca%2Faffwebservices%2Fredirectjsp%2Fpathfinder%2Fredirect.jsp%3FSMPORTALURL%3Dhttps%253A%252F%252Fsfs7.gov.bc.ca%252Faffwebservices%252Fpublic%252Fsaml2sso%26SAMLTRANSACTIONID%3D12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92; BCGOVclptryno=1; clp001=Salted__%F5%F2%00%DBn%AD%F3D%86%C1%A1%24%AE%84%E0%B9%01%DF%AD%13sJ%90090p4%F8%BD%F1%C9%2A%2BbycY4y%20%2F%9A%F6_yk%40',
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp-cgi/int01/private/postLogon.cgi",
        {
          headers: {
            Host: "logon7.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            Referer: "https://logon7.gov.bc.ca/clp-cgi/preLogon.cgi",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              'PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; Dummy1=DummyVal1; BCGOVFlags=1000%3A1%2C0; BCGOVCustom=NULL; BCGOVBrand=NULL; BCGOVBehavior=NULL; Dummy2=DummyVal2; preDummy1=DummyVal1; preDummy2=DummyVal2; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; BCGOVPartner=NULL; BCGOVReferer=https%3A%2F%2Flogon7.gov.bc.ca%2Fclp-mp%2Fntlm.cgi%3Fflags%3D1000%3A1%2C0%26TYPE%3D33554433%26REALMOID%3D06-9b8910a9-f61f-470c-ac19-2ea8de557e18%26GUID%3D%26SMAUTHREASON%3D0%26METHOD%3DGET%26SMAGENTNAME%3D%24SM%24yYBy2798t2EmGcW4R3oM1T3cmXAFL22bzdcjaL6YhrmVxv%252b9bGdXsCzZmU1EJLzX%252fZSRCb45%252fO%252bFy5cg%252bG7LpCy%252bV7aR4E8s%26TARGET%3D%24SM%24https%253a%252f%252ftimepayhome%252egov%252ebc%252eca%252f; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMFED_OLD_SESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD; SMSESSION=LOGGEDOFF; GUID="1:521528e1-df205fbc-dfa2d191-c0f80525-0605086d-ddf"; BCGOVTarget=HTTPS%3A%2F%2Fsfs7.gov.bc.ca%2Faffwebservices%2Fredirectjsp%2Fpathfinder%2Fredirect.jsp%3FSMPORTALURL%3Dhttps%253A%252F%252Fsfs7.gov.bc.ca%252Faffwebservices%252Fpublic%252Fsaml2sso%26SAMLTRANSACTIONID%3D12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92; BCGOVclptryno=1; clp001=Salted__%F5%F2%00%DBn%AD%F3D%86%C1%A1%24%AE%84%E0%B9%01%DF%AD%13sJ%90090p4%F8%BD%F1%C9%2A%2BbycY4y%20%2F%9A%F6_yk%40; FORMCRED=sLZPJsa9wFaCYQdoiZL2uRoo9DAZf6Nx9QOiurkTcCpqIrDKLkX98v7TwN8HmXnzme2ccjJx1ZzfKxLiRj7XskYhh30rBCLbpmWBjy9lrpEZdEbHsniRkFF2cxRKT7p2DLgMAQDU06xVwBwgg6xBW/48jAkFXZKTwbTucDHkNzXI7UPioiQnSHqaNnCKX4l5',
          },
        }
      );
    }
  );

  group("page_26 - https://logon7.gov.bc.ca/clp-cgi/preLogon.cgi", function () {
    response = http.post(
      "https://logon7.gov.bc.ca/clp-cgi/preLogon.cgi",
      {
        instance: "instance_int",
        user: "PSIMONIA",
        password: "Js30rrjackson4%24",
      },
      {
        headers: {
          Host: "logon7.gov.bc.ca",
          Connection: "keep-alive",
          "Cache-Control": "max-age=0",
          "Upgrade-Insecure-Requests": "1",
          Origin: "https://logon7.gov.bc.ca",
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-User": "?1",
          "Sec-Fetch-Dest": "document",
          Referer:
            "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
          Cookie:
            'PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; Dummy1=DummyVal1; BCGOVFlags=1000%3A1%2C0; BCGOVCustom=NULL; BCGOVBrand=NULL; BCGOVBehavior=NULL; Dummy2=DummyVal2; preDummy1=DummyVal1; preDummy2=DummyVal2; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; BCGOVPartner=NULL; BCGOVReferer=https%3A%2F%2Flogon7.gov.bc.ca%2Fclp-mp%2Fntlm.cgi%3Fflags%3D1000%3A1%2C0%26TYPE%3D33554433%26REALMOID%3D06-9b8910a9-f61f-470c-ac19-2ea8de557e18%26GUID%3D%26SMAUTHREASON%3D0%26METHOD%3DGET%26SMAGENTNAME%3D%24SM%24yYBy2798t2EmGcW4R3oM1T3cmXAFL22bzdcjaL6YhrmVxv%252b9bGdXsCzZmU1EJLzX%252fZSRCb45%252fO%252bFy5cg%252bG7LpCy%252bV7aR4E8s%26TARGET%3D%24SM%24https%253a%252f%252ftimepayhome%252egov%252ebc%252eca%252f; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; clp001=0; SMFED_OLD_SESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD; SMSESSION=LOGGEDOFF; GUID="1:521528e1-df205fbc-dfa2d191-c0f80525-0605086d-ddf"; BCGOVTarget=HTTPS%3A%2F%2Fsfs7.gov.bc.ca%2Faffwebservices%2Fredirectjsp%2Fpathfinder%2Fredirect.jsp%3FSMPORTALURL%3Dhttps%253A%252F%252Fsfs7.gov.bc.ca%252Faffwebservices%252Fpublic%252Fsaml2sso%26SAMLTRANSACTIONID%3D12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92; BCGOVclptryno=1',
        },
      }
    );
  });

  group(
    "page_25 - https://sfs7.gov.bc.ca/affwebservices/public/saml2sso",
    function () {
      response = http.post(
        "https://sfs7.gov.bc.ca/affwebservices/public/saml2sso",
        {
          SAMLRequest:
            "PHNhbWxwOkF1dGhuUmVxdWVzdCB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIiB4bWxucz0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiIgQXNzZXJ0aW9uQ29uc3VtZXJTZXJ2aWNlVVJMPSJodHRwczovL29pZGMuZ292LmJjLmNhL2F1dGgvcmVhbG1zL2lkaXIvYnJva2VyL2lkaXIvZW5kcG9pbnQiIERlc3RpbmF0aW9uPSJodHRwczovL3NmczcuZ292LmJjLmNhL2FmZndlYnNlcnZpY2VzL3B1YmxpYy9zYW1sMnNzbyIgRm9yY2VBdXRobj0idHJ1ZSIgSUQ9IklEX2RiY2E5YmIzLTM2MmQtNDc4ZC1hZmRlLTAwMzUyNjUxMDI0NSIgSXNQYXNzaXZlPSJmYWxzZSIgSXNzdWVJbnN0YW50PSIyMDIwLTEwLTMwVDIyOjA5OjA2LjMyMFoiIFByb3RvY29sQmluZGluZz0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmJpbmRpbmdzOkhUVFAtUE9TVCIgVmVyc2lvbj0iMi4wIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI%2BaHR0cHM6Ly9vaWRjLmdvdi5iYy5jYS9hdXRoL3JlYWxtcy9pZGlyPC9zYW1sOklzc3Vlcj48c2FtbHA6TmFtZUlEUG9saWN5IEFsbG93Q3JlYXRlPSJ0cnVlIiBGb3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpuYW1laWQtZm9ybWF0OnBlcnNpc3RlbnQiLz48L3NhbWxwOkF1dGhuUmVxdWVzdD4%3D",
          RelayState:
            "9Zc0QA9vgvS_Eyceq_PMTDt3OhmqRfw0kgvzeKIRMHw.FoFG_BphPik.https%3A%2F%2Foidc.gov.bc.ca%2Fauth%2Frealms%2Fdevhub",
        },
        {
          headers: {
            Host: "sfs7.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            Origin: "null",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=tfuSC3EoiDBHgOyw9xHAkPct+PfOpmFjwrohQbl3Dvqpka09ttCF3GVVmLQRXBMXeW6woQ9K5fHSLm6UhlLxq3nb3TKGRz74Kr/7sijgYrjWDx4pqjbM5RRcrY55FzE6Ps8TAp+GaiInqxQ9QQQ/JksC9UevEK0B81nat/Tb+soidcGI6IyVuc126xU0IQsHS+YBRPW0fbxnJnbJHqJWIJOh6KPx0iNfqQ7A6wrX7aHncK29qkqMZM1HwAeS53baRlzj1v8XljKydIoZ1C2nVhZ+GVGBr3dQOnRbCcCCYgUlxcVfKSC7/H7jbi9d1mm8mWW0J0CL/oGirxM+gxbUHT9Hphoox2TO2XxZnyWbsN/IA8GFZtOyHqWj1sAMTY2ZW3vUNPnSIla/jJMpa+9YvIScWsbPzmN65KcNNn+Y+MMIfOv3rgSwD6HvdoObRrV5We107zrfoQHXY0BF2xKAOjunV9gF4On93DFbJz8VtSiK1MqGPDZ1BmgNhp9npUZg8YRiMDl/J/L5CmSnNdmWBmcQ6oYOLcBlZd5ATTdJIjXYPql+gbqn1ccXlXOAt9SO2zyn1fF8nXtcjkDbqUa0Gj96LxFcsMiEOZ+tA2WFkD/ue763QBZrYyGdPuKEwVUq1BiCHG29IiHIApn07y/94W7CHavQGv38u5nBjpGfKsSFeeGGX6rsX/0IhdNvpq2fTrKBHQWMetvakf1hQzUPgvT9tRJJqYvj5wRDUj/Dj9KPtC9Mv3sarxl7AIs9tRYu6K+hFK098xnjL+XrJs5hH83fR4R001ABG2Gx/9bFUBTW/FmStc4HnkN2gDnpEGEftkJX7YAJYbco5bE2GNl7JT3TsGfzeWnhcpeUT7Bj3irF5KUNGHIrcYL4Z9i6ky0iOz+sKmzc4umQqzbU8w36uZtI+6kgvFQdsMrpMKN4te0jorfg51J/HkVSbhn41KLnaNAvI+uojbRv60nW/j5qFgxSD1jD+m7zVQyzOqknIIuFxGS0SOw8JGhL+DqCP3sprZ8Ok4EQ0qhNoIQI+EsN5zVe5/DNwB7OsmMkYPy5pIwhpXyCKQiXctxQSr+UV9INaGT6OqJxVW0epGtFEEAc9mRiCEaNI3HCNFiA5QB4jU8y5u6Wv0AJa1b3+D5Rv7CgFUHdmWbZOwjI9aEZiyahixF4wCNWPqf/tqv7z4QvP4lBOuWEMyviQG2bRZDpkfHJl0qiQ+2yeP8sy007+uvD2KTADIlLWT+2",
          },
        }
      );

      response = http.get(
        "https://sfs7.gov.bc.ca/affwebservices/redirectjsp/pathfinder/redirect.jsp?SMPORTALURL=https%3A%2F%2Fsfs7.gov.bc.ca%2Faffwebservices%2Fpublic%2Fsaml2sso&SMPORTALURL=https%253A%252F%252Fsfs7.gov.bc.ca%252Faffwebservices%252Fpublic%252Fsaml2sso&SAMLTRANSACTIONID=12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
        {
          headers: {
            Host: "sfs7.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              'PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMFED_OLD_SESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD; SMSESSION=LOGGEDOFF; GUID="1:521528e1-df205fbc-dfa2d191-c0f80525-0605086d-ddf"',
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000%3A1%2C0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&GUID&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=%24SM%24uf%2BzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2FQJY%2BgGkrIRkwOH9JfjYi5&SMAGENTNAME=%24SM%24uf%252bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%252fQJY%252bgGkrIRkwOH9JfjYi5&TARGET=%24SM%24HTTPS%3A%2F%2Fsfs7.gov.bc.ca%2Faffwebservices%2Fredirectjsp%2Fpathfinder%2Fredirect.jsp%3FSMPORTALURL%3Dhttps%24%3A%24%2F%24%2Fsfs7.gov.bc.ca%24%2Faffwebservices%24%2Fpublic%24%2Fsaml2sso%26SAMLTRANSACTIONID%3D12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92&TARGET=%24SM%24HTTPS%253a%252f%252fsfs7%252egov%252ebc%252eca%252faffwebservices%252fredirectjsp%252fpathfinder%252fredirect%252ejsp%253fSMPORTALURL%253dhttps%24%253A%24%252F%24%252Fsfs7%252egov%252ebc%252eca%24%252Faffwebservices%24%252Fpublic%24%252Fsaml2sso%2526SAMLTRANSACTIONID%253d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
        {
          headers: {
            Host: "logon7.gov.bc.ca",
            Connection: "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              'PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; Dummy1=DummyVal1; BCGOVFlags=1000%3A1%2C0; BCGOVCustom=NULL; BCGOVBrand=NULL; BCGOVBehavior=NULL; Dummy2=DummyVal2; preDummy1=DummyVal1; preDummy2=DummyVal2; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; BCGOVPartner=NULL; BCGOVReferer=https%3A%2F%2Flogon7.gov.bc.ca%2Fclp-mp%2Fntlm.cgi%3Fflags%3D1000%3A1%2C0%26TYPE%3D33554433%26REALMOID%3D06-9b8910a9-f61f-470c-ac19-2ea8de557e18%26GUID%3D%26SMAUTHREASON%3D0%26METHOD%3DGET%26SMAGENTNAME%3D%24SM%24yYBy2798t2EmGcW4R3oM1T3cmXAFL22bzdcjaL6YhrmVxv%252b9bGdXsCzZmU1EJLzX%252fZSRCb45%252fO%252bFy5cg%252bG7LpCy%252bV7aR4E8s%26TARGET%3D%24SM%24https%253a%252f%252ftimepayhome%252egov%252ebc%252eca%252f; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; BCGOVTarget=HTTPS%3A%2F%2Fsfs7.gov.bc.ca%2Faffwebservices%2Fredirectjsp%2Fpathfinder%2Fredirect.jsp%3FSMPORTALURL%3Dhttps%253A%252F%252Fsfs7.gov.bc.ca%252Faffwebservices%252Fpublic%252Fsaml2sso%26SAMLTRANSACTIONID%3D569f8a5b-41c7c3da-9ecf763d-903b85cf-044485fe-66; BCGOVclptryno=0; clp001=0; SMFED_OLD_SESSION=zVPbUwHrrE4+goGr3+KXXEz/ZAV+B3KXEk1RZWUkOVlZdQrECt0sHNG6yDrtTZRjEIyFbxKG2DfXE0estqKW9f79lVK0nUQSfbBn/Og8mz6LUN4vM5gqWOTB2GxQIz05DH/G8bEKgE80phYTlI/7uq03SKdp+Qbxr4UNzeXbBs8mv4SKyWYOhQ8SLdjsMRuYLwAv4y7eauKMb1U6wZ1Xxrix624XmaZ94D3NSzB5RhRB8fbbL6HJ2RxfeZBn4mYQSd8nUgw7EtrQcVJphqO0OOo0YQ0gOo80ROM48G0duEcicjmC/kP7ZJsn+9yQSg4fvXpaPxZlHjpxYMqokekrhBhwKKSsMRTNkjb0ZgbNnfEWN+0Zvqyq3+ms2QxYy7knE729RRocNzLISXpyt4dV2Ecc9T0floEsySZLuTmFH/v0m+VZ6uc15bTDFfYS2oxTSKmnsUk0yb1RdhqOPsmaGnb65VpWdxNf8Hu9DN1eNMGq0C2L5GQB/SxBE0M/U4tvUtPWXK/3Uo/QYxoh0AWd4wZ8OHBk+RfQ9sevmkBvgXHsPBPJcZKpEaD865EI7Xx01NdxieXcMZybMXH4HrCUHuJDogSnUU9pJyNdnnDItenMUP1aKyks+x2bm6qYmU+mviGczmP5v59ecQ0jK12vWH/1IQCFzQV0XITZKpiVcjhUDJ/tKytJBnDT5EECHM7ySLgW68jzS+rlepPG0eBPm7IaJgMbe+elSt6Lgac86E8pFtTSj3LB24Vq+Sr9ibubIR/LJRv1gGQmQFF6s/IiOxRWSVejlz5yjQ41mXJt/OEe/n64HR9/bcUiHMgrsTRQwn3+NprMw6zB+Sg7MbJfvU5xgYHeB50W+siqP7yHPE2EQ+YPIxwkpkfy6mcpHmIQFT7O3cJTUfU6Qv/kl+GXsyLz5Ct/y7WAfm5CY+/nyFmtAwiEjGi3COAhw96/CBmAXtfPQcrnw9TwKwpUOEFJAuYKW1yw0e5fF3485vMhTX/aHGX0GN1EV3scSclaIvva/JAGvF1/bc2mw0Ky5wx9ZV5rYyI/RrwG26n6ueK4DFabCNcw3AkThoP2KXPyfiGraQwmqlI/ckdBpHQkt4tj3Y3qJmLFXFukM2yzhjDc57N99bUwbtFoQPty3YIOWA3GPWJpOOZgae4vWBhzRzhBzfCocSZzPdlBwXIRtFAvCpaQLiW5xt/E6tCZvJ2MusZSDdXpCgB77DGwA/An+KJHTg5pfzvlrgTD; SMSESSION=LOGGEDOFF; GUID="1:521528e1-df205fbc-dfa2d191-c0f80525-0605086d-ddf"',
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp/plugins/jquery-2.1.4.min.js",
        {
          headers: {
            Referer:
              "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp/plugins/bootstrap/js/bootstrap.min.js",
        {
          headers: {
            Referer:
              "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp/plugins/datepicker/js/bootstrap-datepicker.min.js",
        {
          headers: {
            Referer:
              "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get("https://logon7.gov.bc.ca/clp/js/common.js", {
        headers: {
          Referer:
            "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        },
      });

      response = http.get("https://logon7.gov.bc.ca/clp/js/brandexample.js", {
        headers: {
          Referer:
            "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        },
      });

      response = http.get(
        "https://logon7.gov.bc.ca/clp/js/form-validation.js",
        {
          headers: {
            Referer:
              "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get("https://logon7.gov.bc.ca/clp/js/footer.js", {
        headers: {
          Referer:
            "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        },
      });

      response = http.get(
        "https://logon7.gov.bc.ca/clp/plugins/bootstrap/css/bootstrap.min.css",
        {
          headers: {
            Referer:
              "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get("https://logon7.gov.bc.ca/clp/css/font-awesome.css", {
        headers: {
          Referer:
            "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        },
      });

      response = http.get("https://logon7.gov.bc.ca/clp/css/main.css", {
        headers: {
          Referer:
            "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        },
      });

      response = http.get(
        "https://logon7.gov.bc.ca/clp/plugins/datepicker/css/bootstrap-datepicker3.min.css",
        {
          headers: {
            Referer:
              "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp/plugins/modernizr.min.js",
        {
          headers: {
            Referer:
              "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp/fonts/MyriadWebPro.ttf",
        {
          headers: {
            Origin: "https://logon7.gov.bc.ca",
            Referer: "https://logon7.gov.bc.ca/clp/css/main.css",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp/images/BCID_H_rgb_rev.png",
        {
          headers: {
            Referer: "https://logon7.gov.bc.ca/clp/css/main.css",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get(
        "https://logon7.gov.bc.ca/clp/images/environment_logos_sprite.png",
        {
          headers: {
            Referer: "https://logon7.gov.bc.ca/clp/css/main.css",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );

      response = http.get("https://logon7.gov.bc.ca/clp/images/favicon.ico", {
        headers: {
          Referer:
            "https://logon7.gov.bc.ca/clp-cgi/int/logon.cgi?flags=1000:1,0&TYPE=33554433&REALMOID=06-fb0eaeef-4838-47c5-9181-09e15ecf282e&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$uf%2bzUAKb1uzEJ8LH6tuAK9htvmdDn2PYWGJwPALEcR%2fQJY%2bgGkrIRkwOH9JfjYi5&TARGET=$SM$HTTPS%3a%2f%2fsfs7%2egov%2ebc%2eca%2faffwebservices%2fredirectjsp%2fpathfinder%2fredirect%2ejsp%3fSMPORTALURL%3dhttps$%3A$%2F$%2Fsfs7%2egov%2ebc%2eca$%2Faffwebservices$%2Fpublic$%2Fsaml2sso%26SAMLTRANSACTIONID%3d12b613cc-5c982f18-038a62c2-4c7e5cab-450b2d1b-92",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        },
      });
    }
  );

  group(
    "page_24 - https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/broker/idir/login?client_id=devhub-web&tab_id=ApInGJjNUP8&session_code=ek_AsVbKAhfY-Fjpy93JiqgqqzKORfPpoA3dQUuxcyI",
    function () {
      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/broker/idir/login?client_id=devhub-web&tab_id=ApInGJjNUP8&session_code=ek_AsVbKAhfY-Fjpy93JiqgqqzKORfPpoA3dQUuxcyI",
        {
          headers: {
            Host: "sso.pathfinder.gov.bc.ca",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=37758690-9575-48c8-83ea-e5692fbeea64.sso-prod-15-ldbxg; KC_RESTART=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZDAzODUzNi01MWVhLTQxYjQtYjFmNC1hYTUyNGMzMGU3YTgifQ.eyJjaWQiOiJkZXZodWItd2ViIiwicHR5Ijoib3BlbmlkLWNvbm5lY3QiLCJydXJpIjoiaHR0cHM6Ly9kZXZlbG9wZXIuZ292LmJjLmNhLyIsImFjdCI6IkFVVEhFTlRJQ0FURSIsIm5vdGVzIjp7InNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6Ly9zc28ucGF0aGZpbmRlci5nb3YuYmMuY2EvYXV0aC9yZWFsbXMvZGV2aHViIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJyZWRpcmVjdF91cmkiOiJodHRwczovL2RldmVsb3Blci5nb3YuYmMuY2EvIiwic3RhdGUiOiIxOTRlZTFlZS0zM2Y0LTQxNDItOGY0Mi1hZjkwN2U4OTU1ODkiLCJub25jZSI6IjRlNDhjZGQyLWY1ZDEtNDc3Zi04YjczLWY2ZTZiZWJlYzdlOCIsInJlc3BvbnNlX21vZGUiOiJmcmFnbWVudCJ9fQ.vdFL1fc_3CQ--pndE4ibQyJR25CgG-ppUSXcs-1Xzv8; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; 5b37853b94ab0643d4f4ee6cd2f5580a=26373ceedec46f92ec8bdf63752e1afa; SMSESSION=tfuSC3EoiDBHgOyw9xHAkPct+PfOpmFjwrohQbl3Dvqpka09ttCF3GVVmLQRXBMXeW6woQ9K5fHSLm6UhlLxq3nb3TKGRz74Kr/7sijgYrjWDx4pqjbM5RRcrY55FzE6Ps8TAp+GaiInqxQ9QQQ/JksC9UevEK0B81nat/Tb+soidcGI6IyVuc126xU0IQsHS+YBRPW0fbxnJnbJHqJWIJOh6KPx0iNfqQ7A6wrX7aHncK29qkqMZM1HwAeS53baRlzj1v8XljKydIoZ1C2nVhZ+GVGBr3dQOnRbCcCCYgUlxcVfKSC7/H7jbi9d1mm8mWW0J0CL/oGirxM+gxbUHT9Hphoox2TO2XxZnyWbsN/IA8GFZtOyHqWj1sAMTY2ZW3vUNPnSIla/jJMpa+9YvIScWsbPzmN65KcNNn+Y+MMIfOv3rgSwD6HvdoObRrV5We107zrfoQHXY0BF2xKAOjunV9gF4On93DFbJz8VtSiK1MqGPDZ1BmgNhp9npUZg8YRiMDl/J/L5CmSnNdmWBmcQ6oYOLcBlZd5ATTdJIjXYPql+gbqn1ccXlXOAt9SO2zyn1fF8nXtcjkDbqUa0Gj96LxFcsMiEOZ+tA2WFkD/ue763QBZrYyGdPuKEwVUq1BiCHG29IiHIApn07y/94W7CHavQGv38u5nBjpGfKsSFeeGGX6rsX/0IhdNvpq2fTrKBHQWMetvakf1hQzUPgvT9tRJJqYvj5wRDUj/Dj9KPtC9Mv3sarxl7AIs9tRYu6K+hFK098xnjL+XrJs5hH83fR4R001ABG2Gx/9bFUBTW/FmStc4HnkN2gDnpEGEftkJX7YAJYbco5bE2GNl7JT3TsGfzeWnhcpeUT7Bj3irF5KUNGHIrcYL4Z9i6ky0iOz+sKmzc4umQqzbU8w36uZtI+6kgvFQdsMrpMKN4te0jorfg51J/HkVSbhn41KLnaNAvI+uojbRv60nW/j5qFgxSD1jD+m7zVQyzOqknIIuFxGS0SOw8JGhL+DqCP3sprZ8Ok4EQ0qhNoIQI+EsN5zVe5/DNwB7OsmMkYPy5pIwhpXyCKQiXctxQSr+UV9INaGT6OqJxVW0epGtFEEAc9mRiCEaNI3HCNFiA5QB4jU8y5u6Wv0AJa1b3+D5Rv7CgFUHdmWbZOwjI9aEZiyahixF4wCNWPqf/tqv7z4QvP4lBOuWEMyviQG2bRZDpkfHJl0qiQ+2yeP8sy007+uvD2KTADIlLWT+2",
          },
        }
      );
      response = http.get(
        "https://oidc.gov.bc.ca/auth/realms/idir/protocol/openid-connect/auth?scope=openid&state=amKVj1_r_tomnuBi_yDggTF4xQqIOujL8Dc4CQcBH94.ApInGJjNUP8.devhub-web&response_type=code&client_id=https%3A%2F%2Foidc.gov.bc.ca%2Fauth%2Frealms%2Fdevhub&client_id=https%253A%252F%252Foidc.gov.bc.ca%252Fauth%252Frealms%252Fdevhub&redirect_uri=https%3A%2F%2Fsso.pathfinder.gov.bc.ca%2Fauth%2Frealms%2Fdevhub%2Fbroker%2Fidir%2Fendpoint&redirect_uri=https%253A%252F%252Fsso.pathfinder.gov.bc.ca%252Fauth%252Frealms%252Fdevhub%252Fbroker%252Fidir%252Fendpoint&nonce=RdlcPwj55aLcHMBppQ_Vrw",
        {
          headers: {
            Host: "oidc.gov.bc.ca",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=4817b988-47ac-4d3c-a3f9-75ba9f98e715.sso-prod-15-ldbxg; KEYCLOAK_IDENTITY=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1MjZlNmI5Ny02YzM5LTQ2MzctOGFiNy1jMmJmNWVhNWYwZWQifQ.eyJleHAiOjE2MDQxMzE3MjAsImlhdCI6MTYwNDA5NTcyMCwianRpIjoiZGRiZDhjM2EtNzZhNS00YzU0LTgwZTYtYWI4OTgwOWYzYzg4IiwiaXNzIjoiaHR0cHM6Ly9vaWRjLmdvdi5iYy5jYS9hdXRoL3JlYWxtcy9pZGlyIiwic3ViIjoiMDQ1NGI5MDItYjU3Zi00MTRiLTkzNGYtYjE4ZmM1MjBhODU3IiwidHlwIjoiU2VyaWFsaXplZC1JRCIsInNlc3Npb25fc3RhdGUiOiI0ODE3Yjk4OC00N2FjLTRkM2MtYTNmOS03NWJhOWY5OGU3MTUiLCJzdGF0ZV9jaGVja2VyIjoiUVVHMjhtSXNHek82ZVZhVHRKZFV3U1JIMEE1X1RBX0E1TUJHeVg3ZTAzZyJ9.bqZP9yFrtMpQD2cE3aM4-HTu1FeJWSvoeDU5HnSglKw; KEYCLOAK_IDENTITY_LEGACY=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1MjZlNmI5Ny02YzM5LTQ2MzctOGFiNy1jMmJmNWVhNWYwZWQifQ.eyJleHAiOjE2MDQxMzE3MjAsImlhdCI6MTYwNDA5NTcyMCwianRpIjoiZGRiZDhjM2EtNzZhNS00YzU0LTgwZTYtYWI4OTgwOWYzYzg4IiwiaXNzIjoiaHR0cHM6Ly9vaWRjLmdvdi5iYy5jYS9hdXRoL3JlYWxtcy9pZGlyIiwic3ViIjoiMDQ1NGI5MDItYjU3Zi00MTRiLTkzNGYtYjE4ZmM1MjBhODU3IiwidHlwIjoiU2VyaWFsaXplZC1JRCIsInNlc3Npb25fc3RhdGUiOiI0ODE3Yjk4OC00N2FjLTRkM2MtYTNmOS03NWJhOWY5OGU3MTUiLCJzdGF0ZV9jaGVja2VyIjoiUVVHMjhtSXNHek82ZVZhVHRKZFV3U1JIMEE1X1RBX0E1TUJHeVg3ZTAzZyJ9.bqZP9yFrtMpQD2cE3aM4-HTu1FeJWSvoeDU5HnSglKw; KEYCLOAK_SESSION=idir/0454b902-b57f-414b-934f-b18fc520a857/4817b988-47ac-4d3c-a3f9-75ba9f98e715; KEYCLOAK_SESSION_LEGACY=idir/0454b902-b57f-414b-934f-b18fc520a857/4817b988-47ac-4d3c-a3f9-75ba9f98e715; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; a2f2b327911c1e47a4663e182e584047=52d75ce43550b42d41581efba230205a; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=tfuSC3EoiDBHgOyw9xHAkPct+PfOpmFjwrohQbl3Dvqpka09ttCF3GVVmLQRXBMXeW6woQ9K5fHSLm6UhlLxq3nb3TKGRz74Kr/7sijgYrjWDx4pqjbM5RRcrY55FzE6Ps8TAp+GaiInqxQ9QQQ/JksC9UevEK0B81nat/Tb+soidcGI6IyVuc126xU0IQsHS+YBRPW0fbxnJnbJHqJWIJOh6KPx0iNfqQ7A6wrX7aHncK29qkqMZM1HwAeS53baRlzj1v8XljKydIoZ1C2nVhZ+GVGBr3dQOnRbCcCCYgUlxcVfKSC7/H7jbi9d1mm8mWW0J0CL/oGirxM+gxbUHT9Hphoox2TO2XxZnyWbsN/IA8GFZtOyHqWj1sAMTY2ZW3vUNPnSIla/jJMpa+9YvIScWsbPzmN65KcNNn+Y+MMIfOv3rgSwD6HvdoObRrV5We107zrfoQHXY0BF2xKAOjunV9gF4On93DFbJz8VtSiK1MqGPDZ1BmgNhp9npUZg8YRiMDl/J/L5CmSnNdmWBmcQ6oYOLcBlZd5ATTdJIjXYPql+gbqn1ccXlXOAt9SO2zyn1fF8nXtcjkDbqUa0Gj96LxFcsMiEOZ+tA2WFkD/ue763QBZrYyGdPuKEwVUq1BiCHG29IiHIApn07y/94W7CHavQGv38u5nBjpGfKsSFeeGGX6rsX/0IhdNvpq2fTrKBHQWMetvakf1hQzUPgvT9tRJJqYvj5wRDUj/Dj9KPtC9Mv3sarxl7AIs9tRYu6K+hFK098xnjL+XrJs5hH83fR4R001ABG2Gx/9bFUBTW/FmStc4HnkN2gDnpEGEftkJX7YAJYbco5bE2GNl7JT3TsGfzeWnhcpeUT7Bj3irF5KUNGHIrcYL4Z9i6ky0iOz+sKmzc4umQqzbU8w36uZtI+6kgvFQdsMrpMKN4te0jorfg51J/HkVSbhn41KLnaNAvI+uojbRv60nW/j5qFgxSD1jD+m7zVQyzOqknIIuFxGS0SOw8JGhL+DqCP3sprZ8Ok4EQ0qhNoIQI+EsN5zVe5/DNwB7OsmMkYPy5pIwhpXyCKQiXctxQSr+UV9INaGT6OqJxVW0epGtFEEAc9mRiCEaNI3HCNFiA5QB4jU8y5u6Wv0AJa1b3+D5Rv7CgFUHdmWbZOwjI9aEZiyahixF4wCNWPqf/tqv7z4QvP4lBOuWEMyviQG2bRZDpkfHJl0qiQ+2yeP8sy007+uvD2KTADIlLWT+2",
          },
        }
      );
      response = http.get(
        "https://oidc.gov.bc.ca/auth/realms/idir/broker/idir/login?session_code=EN0J9jHuft1iZ6t00nKmC_9WQiTe-Tq1stCnA1ECjHE&client_id=https%3A%2F%2Foidc.gov.bc.ca%2Fauth%2Frealms%2Fdevhub&client_id=https%253A%252F%252Foidc.gov.bc.ca%252Fauth%252Frealms%252Fdevhub&tab_id=FoFG_BphPik",
        {
          headers: {
            Host: "oidc.gov.bc.ca",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=c1d5eedd-d23a-48e9-8657-3fbc83f9db7b.sso-prod-15-78zp2; KC_RESTART=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1MjZlNmI5Ny02YzM5LTQ2MzctOGFiNy1jMmJmNWVhNWYwZWQifQ.eyJjaWQiOiJodHRwczovL29pZGMuZ292LmJjLmNhL2F1dGgvcmVhbG1zL2Rldmh1YiIsInB0eSI6Im9wZW5pZC1jb25uZWN0IiwicnVyaSI6Imh0dHBzOi8vc3NvLnBhdGhmaW5kZXIuZ292LmJjLmNhL2F1dGgvcmVhbG1zL2Rldmh1Yi9icm9rZXIvaWRpci9lbmRwb2ludCIsImFjdCI6IkFVVEhFTlRJQ0FURSIsIm5vdGVzIjp7InNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6Ly9vaWRjLmdvdi5iYy5jYS9hdXRoL3JlYWxtcy9pZGlyIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJyZWRpcmVjdF91cmkiOiJodHRwczovL3Nzby5wYXRoZmluZGVyLmdvdi5iYy5jYS9hdXRoL3JlYWxtcy9kZXZodWIvYnJva2VyL2lkaXIvZW5kcG9pbnQiLCJzdGF0ZSI6ImFtS1ZqMV9yX3RvbW51QmlfeURnZ1RGNHhRcUlPdWpMOERjNENRY0JIOTQuQXBJbkdKak5VUDguZGV2aHViLXdlYiIsIm5vbmNlIjoiUmRsY1B3ajU1YUxjSE1CcHBRX1ZydyJ9fQ.FncGoRV7puv3Lahmoms2EQcCJZRr40pBz0nCfh0lmsw; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; a2f2b327911c1e47a4663e182e584047=52d75ce43550b42d41581efba230205a; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; SMSESSION=tfuSC3EoiDBHgOyw9xHAkPct+PfOpmFjwrohQbl3Dvqpka09ttCF3GVVmLQRXBMXeW6woQ9K5fHSLm6UhlLxq3nb3TKGRz74Kr/7sijgYrjWDx4pqjbM5RRcrY55FzE6Ps8TAp+GaiInqxQ9QQQ/JksC9UevEK0B81nat/Tb+soidcGI6IyVuc126xU0IQsHS+YBRPW0fbxnJnbJHqJWIJOh6KPx0iNfqQ7A6wrX7aHncK29qkqMZM1HwAeS53baRlzj1v8XljKydIoZ1C2nVhZ+GVGBr3dQOnRbCcCCYgUlxcVfKSC7/H7jbi9d1mm8mWW0J0CL/oGirxM+gxbUHT9Hphoox2TO2XxZnyWbsN/IA8GFZtOyHqWj1sAMTY2ZW3vUNPnSIla/jJMpa+9YvIScWsbPzmN65KcNNn+Y+MMIfOv3rgSwD6HvdoObRrV5We107zrfoQHXY0BF2xKAOjunV9gF4On93DFbJz8VtSiK1MqGPDZ1BmgNhp9npUZg8YRiMDl/J/L5CmSnNdmWBmcQ6oYOLcBlZd5ATTdJIjXYPql+gbqn1ccXlXOAt9SO2zyn1fF8nXtcjkDbqUa0Gj96LxFcsMiEOZ+tA2WFkD/ue763QBZrYyGdPuKEwVUq1BiCHG29IiHIApn07y/94W7CHavQGv38u5nBjpGfKsSFeeGGX6rsX/0IhdNvpq2fTrKBHQWMetvakf1hQzUPgvT9tRJJqYvj5wRDUj/Dj9KPtC9Mv3sarxl7AIs9tRYu6K+hFK098xnjL+XrJs5hH83fR4R001ABG2Gx/9bFUBTW/FmStc4HnkN2gDnpEGEftkJX7YAJYbco5bE2GNl7JT3TsGfzeWnhcpeUT7Bj3irF5KUNGHIrcYL4Z9i6ky0iOz+sKmzc4umQqzbU8w36uZtI+6kgvFQdsMrpMKN4te0jorfg51J/HkVSbhn41KLnaNAvI+uojbRv60nW/j5qFgxSD1jD+m7zVQyzOqknIIuFxGS0SOw8JGhL+DqCP3sprZ8Ok4EQ0qhNoIQI+EsN5zVe5/DNwB7OsmMkYPy5pIwhpXyCKQiXctxQSr+UV9INaGT6OqJxVW0epGtFEEAc9mRiCEaNI3HCNFiA5QB4jU8y5u6Wv0AJa1b3+D5Rv7CgFUHdmWbZOwjI9aEZiyahixF4wCNWPqf/tqv7z4QvP4lBOuWEMyviQG2bRZDpkfHJl0qiQ+2yeP8sy007+uvD2KTADIlLWT+2",
          },
        }
      );
      response = http.get(
        "https://oidc.gov.bc.ca/auth/resources/v5a76/login/bcgov/node_modules/patternfly/dist/css/patternfly.min.css",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://oidc.gov.bc.ca/auth/resources/v5a76/login/bcgov/lib/zocial/zocial.css",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://oidc.gov.bc.ca/auth/resources/v5a76/login/bcgov/css/login.css",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://oidc.gov.bc.ca/auth/resources/v5a76/login/bcgov/css/styles.css",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://oidc.gov.bc.ca/auth/resources/v5a76/login/bcgov/js/script.js",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://portal.nrs.gov.bc.ca/nrs-portal-theme/images/favicon.ico",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://oidc.gov.bc.ca/auth/resources/v5a76/login/bcgov/img/logo.svg",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
    }
  );

  group(
    "page_23 - https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/protocol/openid-connect/auth?client_id=devhub-web&redirect_uri=https%3A%2F%2Fdeveloper.gov.bc.ca%2F&state=194ee1ee-33f4-4142-8f42-af907e895589&response_mode=fragment&response_type=code&scope=openid&nonce=4e48cdd2-f5d1-477f-8b73-f6e6bebec7e8",
    function () {
      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/realms/devhub/protocol/openid-connect/auth?client_id=devhub-web&redirect_uri=https%3A%2F%2Fdeveloper.gov.bc.ca%2F&redirect_uri=https%253A%252F%252Fdeveloper.gov.bc.ca%252F&state=194ee1ee-33f4-4142-8f42-af907e895589&response_mode=fragment&response_type=code&scope=openid&nonce=4e48cdd2-f5d1-477f-8b73-f6e6bebec7e8",
        {
          headers: {
            Host: "sso.pathfinder.gov.bc.ca",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            Referer: "https://developer.gov.bc.ca/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7,de;q=0.6",
            Cookie:
              "AUTH_SESSION_ID=5a30e492-2f50-4c2a-9130-253d7088f6cd.sso-prod-15-8zq68; PS_DEVICEFEATURES=width:1792 height:1120 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; FAILREASON=0; gbclmpweb4-elm92prd.gov.bc.ca-PORTAL-PSJSESSIONID=8Rt6O7esD3qtHk5h_ZVXHc3HldjHOApD!-946719611; ExpirePage=https://learning.gov.bc.ca/psc/CHIPSPLM/; SignOnDefault=; lcsrftoken=ecciiNeWX3o3LD+s28ctTTcdLnH+nEQgdOoWSp//CDU=; gbchress-7017-PORTAL-PSJSESSIONID=aeV6z-Kp3i7TB7yd0Y4GNV0x40gYkrMx!-92248933; PS_LOGINLIST=https://timepayhome-ps.gov.bc.ca/CHIPSBC https://learning.gov.bc.ca/CHIPSPLM; PS_TOKEN=oQAAAAQDAgEBAAAAvAIAAAAAAAAsAAAABABTaGRyAk4Acwg4AC4AMQAwABTzb+88FIAbcYLVpDu1SKiE+TgEmmEAAAAFAFNkYXRhVXicHYZLEkAwFAQ7oaxzESqJsPersECKo7iew3kyU90zD1AWWinZV5NjEjcbOyeH7EC1yImYyMjEykUSZoLH8lPjsttsS6ARbHYvdnTynNTDB8XmDBY=; PS_TokenSite=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/?gbchress-7017-PORTAL-PSJSESSIONID; PS_LASTSITE=https://timepayhome-ps.gov.bc.ca/psp/CHIPSBC/; ps_theme=node:HRMS portal:EMPLOYEE theme_id:DEFAULT_THEME_FLUID css:DEFAULT_THEME_FLUID accessibility:N formfactor:3 piamode:2; PS_TOKENEXPIRE=30_Oct_2020_18:46:41_GMT; psback=%22%22url%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsp%2FCHIPSBC%2FEMPLOYEE%2FHRMS%2Fc%2FTGB_ESS.TGB_ESS_WC.GBL%3FEMPLID%3D169896%26EMPL_RCD%3D0%26page%3DTGB_ABS_SS_REQHIST%22%20%22label%22%3A%22Tgb%20Abs%20Ss%20Reqhist%22%20%22origin%22%3A%22PIA%22%20%22layout%22%3A%221%22%20%22refurl%22%3A%22https%3A%2F%2Ftimepayhome-ps.gov.bc.ca%2Fpsc%2FCHIPSBC%2FEMPLOYEE%2FHRMS%22%22; 5b37853b94ab0643d4f4ee6cd2f5580a=26373ceedec46f92ec8bdf63752e1afa; SMSESSION=tfuSC3EoiDBHgOyw9xHAkPct+PfOpmFjwrohQbl3Dvqpka09ttCF3GVVmLQRXBMXeW6woQ9K5fHSLm6UhlLxq3nb3TKGRz74Kr/7sijgYrjWDx4pqjbM5RRcrY55FzE6Ps8TAp+GaiInqxQ9QQQ/JksC9UevEK0B81nat/Tb+soidcGI6IyVuc126xU0IQsHS+YBRPW0fbxnJnbJHqJWIJOh6KPx0iNfqQ7A6wrX7aHncK29qkqMZM1HwAeS53baRlzj1v8XljKydIoZ1C2nVhZ+GVGBr3dQOnRbCcCCYgUlxcVfKSC7/H7jbi9d1mm8mWW0J0CL/oGirxM+gxbUHT9Hphoox2TO2XxZnyWbsN/IA8GFZtOyHqWj1sAMTY2ZW3vUNPnSIla/jJMpa+9YvIScWsbPzmN65KcNNn+Y+MMIfOv3rgSwD6HvdoObRrV5We107zrfoQHXY0BF2xKAOjunV9gF4On93DFbJz8VtSiK1MqGPDZ1BmgNhp9npUZg8YRiMDl/J/L5CmSnNdmWBmcQ6oYOLcBlZd5ATTdJIjXYPql+gbqn1ccXlXOAt9SO2zyn1fF8nXtcjkDbqUa0Gj96LxFcsMiEOZ+tA2WFkD/ue763QBZrYyGdPuKEwVUq1BiCHG29IiHIApn07y/94W7CHavQGv38u5nBjpGfKsSFeeGGX6rsX/0IhdNvpq2fTrKBHQWMetvakf1hQzUPgvT9tRJJqYvj5wRDUj/Dj9KPtC9Mv3sarxl7AIs9tRYu6K+hFK098xnjL+XrJs5hH83fR4R001ABG2Gx/9bFUBTW/FmStc4HnkN2gDnpEGEftkJX7YAJYbco5bE2GNl7JT3TsGfzeWnhcpeUT7Bj3irF5KUNGHIrcYL4Z9i6ky0iOz+sKmzc4umQqzbU8w36uZtI+6kgvFQdsMrpMKN4te0jorfg51J/HkVSbhn41KLnaNAvI+uojbRv60nW/j5qFgxSD1jD+m7zVQyzOqknIIuFxGS0SOw8JGhL+DqCP3sprZ8Ok4EQ0qhNoIQI+EsN5zVe5/DNwB7OsmMkYPy5pIwhpXyCKQiXctxQSr+UV9INaGT6OqJxVW0epGtFEEAc9mRiCEaNI3HCNFiA5QB4jU8y5u6Wv0AJa1b3+D5Rv7CgFUHdmWbZOwjI9aEZiyahixF4wCNWPqf/tqv7z4QvP4lBOuWEMyviQG2bRZDpkfHJl0qiQ+2yeP8sy007+uvD2KTADIlLWT+2",
          },
        }
      );
      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/resources/v5a76/login/bcgov/node_modules/patternfly/dist/css/patternfly.min.css",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/resources/v5a76/login/bcgov/lib/zocial/zocial.css",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/resources/v5a76/login/bcgov/css/login.css",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/resources/v5a76/login/bcgov/css/styles.css",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/resources/v5a76/login/bcgov/js/script.js",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://portal.nrs.gov.bc.ca/nrs-portal-theme/images/favicon.ico",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
      response = http.get(
        "https://sso.pathfinder.gov.bc.ca/auth/resources/v5a76/login/bcgov/img/logo.svg",
        {
          headers: {
            Referer: "",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
          },
        }
      );
    }
  );

  // Automatically added sleep
  sleep(1);
}
