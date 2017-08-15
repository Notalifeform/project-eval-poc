# Sping Project Evaluation Report Creator

Quick hack to create a report from a Google Sheet using Vue


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# publish
./node_modules/gh-pages/bin/gh-pages -d dist

# all
rm -rf dist && npm run build && ./node_modules/gh-pages/bin/gh-pages -d dist


# TODO

- [X] handle errors (sheet, auth etc)
- [ ] note: could not get vue-toastr (imort of less gave error)

- [ ] create template sheets
- [ ] open sheet (see codelab)
- [ ] list sheets https://www.googleapis.com/auth/drive.readonly
- [ ] delete sheet

- [ ] html2canvas to export image ?

- [ ] replace api by node google API (googleapis, google-auth-library)
- [ ] move reading sheets out of main.Vue
- [ ] move css to less
