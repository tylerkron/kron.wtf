# Website for kron.wtf

Hugo based website, hosted on Firebase.

## How to Run

`hugo server`

or if you want to see drafts

`hugo server -D`


## Upgrade Hugo and Theme

Congo v2.14.0 requires Hugo extended v0.158.0 or newer.

```
brew upgrade hugo
go get github.com/jpanther/congo/v2@v2.14.0
hugo --gc --minify
```
