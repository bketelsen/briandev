# Go Modules

[twitter]: # '@bketelsen'
[event]: # 'Stuttgart Go Meetup'
[eventurl]: # 'https://www.meetup.com/Stuttgart-Gophers/'
[title]: # 'Go Modules'
[image]: # '/images/logo.png'
[imagealt]: # 'Stuttgart Go Meetup'
[date]: # 'September 20, 2018'
[videourl]: # 'https://www.youtube.com/watch?v=V8FQNen4WAA'

### Simplify Go Development

Slides: [cda.ms/FV](https://cda.ms/FV)

<!-- .slide: data-transition="zoom" -->

---

## The Basics

- [Go Modules Wiki Page](https://cda.ms/FN)
- Proposal [https://research.swtch.com/vgo](https://research.swtch.com/vgo)
- Requires Go 1.11

---

## Two Ways To Use Modules

- Invoke the `go` command outside your $GOPATH
- Set `GO111MODULE=on`

---

## Definitions & New Terms

- Module
- go.mod
- Version Selection
- Semantic Import Versioning

--

## Module

`A module is a collection of related Go packages that are versioned together as a single unit. Most often, a single version-control repository corresponds exactly to a single module, but alternatively, a single version-control repository can hold multiple modules.`

--

## go.mod

A module is a tree (directory) of Go source files with a `go.mod` file in the root directory.

--

## Example go.mod File

```
module github.com/my/module/v3

require (
    github.com/some/dependency v1.2.3
    github.com/another/dependency v0.1.0
    github.com/additional/dependency/v4 v4.0.0
)
```

--

## Creating a Module

```
mkdir thing
cd thing
git init
git remote add origin git@github.com:bketelsen/thing
go mod init
```

- New go.mod file infers module path from VCS

--

## Creating a Module

```
mkdir thing
cd thing
go mod init github.com/bketelsen/thing
```

- Manually specify module name

--

## Version Selection

```
require (
    github.com/some/dependency v1.2.3
    github.com/another/dependency v0.1.0
    github.com/additional/dependency/v4 v4.0.0
)
```

- Semantic Version Numbers
- Version is part of module path!
- v1 is implied

--

## Semantic Import Versioning

```
require (
    github.com/additional/dependency/v4 v4.0.0
)
```

- /v4 is package name
- Allows other versions to be used in the same build
- Controversial, but makes good sense

---

## DEMO

---

## Replace

```
module github.com/my/module/v3

require (
    github.com/some/dependency v1.2.3
    github.com/another/dependency v0.1.0
    github.com/additional/dependency/v4 v4.0.0
)
replace github.com/foo/bar github.com/fork/bar
```

Specify a fork or local development package to use

---

## Replace

```
replace github.com/foo/bar ../../bar
```

Supports relative paths too

---

## gohack

[github.com/rogpeppe/gohack](https://github.com/rogpeppe/gohack)

```
gohack github.com/broken/thing
```

- Clones editable version of package in $HOME/gohack/...
- Modifies go.mod file for you

---

## Big Change

Download Protocol

Old:

```
go get github.com/bketelsen/thing -->
  git clone https://github.com/bketelsen/thing
```

New:

```
go get github.com/bketelsen/thing -->
  GET github.com/bketelsen/thing/@v/list
  GET github.com/bketelsen/thing/@v/v1.0.0.mod
  GET github.com/bketelsen/thing/@v/v1.0.0.zip
```

---

## Module@Version is Immutable

Published modules are immutable.

> Does that mean we could use a CDN?

---

## GOPROXY Environment Variable

```
export GOPROXY=my.proxy.com
go get github.com/bketelsen/thing
```

Fetches `.mod`, `.info`, `.zip` from proxy server

---

## REPEATABLE BUILDS

Now you can build even when Github is down!

- Athens [github.com/gomods/athens](https://github.com/gomods/athens)
- Documentation[docs.gomods.io](https://docs.gomods.io)
- export GOPROXY=https://microsoftgoproxy.azurewebsites.net

---

## DEMO

---

## Use Modules Today

- GO111MODULE=on
- Work outside GOPATH
- Use a Public Proxy Server
- Run Your OWN Proxy Server

---

### Questions?

<br>

- [@bketelsen](https://twitter.com/bketelsen)
- [github.com/bketelsen](https://github.com/bketelsen)
- [github.com/gomods](https://github.com/gomods)

---

<!-- .slide: data-background-image="/images/gitpitch-audience.jpg" -->

## Thank You
