<template>
  <div class="homebar" >
    <div v-if="showButton">
      Sheet url: <input v-model="sheetUrl" name="sheet" size="120" type='text'>
      <button v-on:click="grabData">Grab data</button>
      <explanation/>
    </div>
  </div>
</template>

<script>
import { grabData } from '../gapihandler'
import Project from '../models/Project.js'
import Section from '../models/Section.js'
import store from '../store'
import router from '../router'
import Vue from 'vue'

import * as signedInStates from '../signed-in-states.js'

let fake = false

async function _grabData (url) {
  if (fake) {
    let project = new Project()
    project.name = 'Wall of RTL'
    project.startDate = new Date('2016-08-01')
    project.endDate = new Date('2016-12-01')
    project.customerName = 'VisionsConnected'
    project.rating = 7

    let section = new Section()
    section.id = 1
    section.name = 'Commercieel'
    section.rating = 7
    section.pros.push('Goede showcase executie')
    section.pros.push('Lage acquisitie kosten')
    section.cons.push('Lage marge uren')
    section.cons.push('Risico ligt bij Sping')
    project.sections.push(section)

    section = new Section()
    section.id = 2
    section.name = 'Support'
    section.rating = 7
    section.pros.push('Bereid extra inzet te leveren')
    section.cons.push('Onduidelijkheid live uitzendingen')
    project.sections.push(section)

    section = new Section()
    section.id = 3
    section.name = 'Klanttevredenheid'
    section.rating = 7
    section.pros.push('RTL is tevreden')
    section.pros.push('Lage acquisitie kosten')
    section.cons.push('Gedoe met bookmarks in iOS')
    section.cons.push('Risico ligt bij Sping')
    project.sections.push(section)

    project.lessonsLearned.push('PO moet geen techie zijn')
    project.lessonsLearned.push('Budget krap? Conservatieve tech keuzes!')

    return project
  } else {
    // ...
    let res = await _grabExcelData(url)
    return res
  }
}

function _getIdFromUrl (url) {
  return url.match(/[-\w]{25,}/)
}

// Q: howto promise to async?
async function _grabExcelData (url) {
  let id = _getIdFromUrl(url)

  let response
  try {
    response = await grabData(id)
  } catch (error) {
    Vue.toast(`error reading data ${JSON.stringify(error.result.error.message)}`,
     {className: 'et-alert', horizontalPosition: 'center'})
    return null
  }

  let project = new Project()

  let section = null
  let lessonsLearned = false
  var range = response.result
  if (range.values.length > 0) {
    for (let i = 0; i < range.values.length; i++) {
      var row = range.values[i]
      if (row[0] === undefined) {
        continue
      }

      let key = row[0]
      let value = row[1]
      let value2 = row[2]
      if (key === 'section') {
        if (section) {
          project.sections.push(section)
        }
        section = new Section()
        section.name = value
        section.rating = value2

        continue
      }
      if (key.match(/Lessons\s*Learned/i)) {
        lessonsLearned = true
        continue
      }
      if (!section && lessonsLearned) {
        project.lessonsLearned.push(value)
        continue
      }
      if (section && key === 'plus') {
        section.pros.push(value)
        continue
      }
      if (section && key === 'min') {
        section.cons.push(value)
        continue
      }

      // parse klant data
      if (key === 'project') {
        project.name = value
        continue
      }
      if (key === 'customer') {
        project.customerName = value
        continue
      }
      if (key === 'start') {
        // convert to date?
        project.startDate = value
        continue
      }
      if (key === 'end') {
        // convert to date?
        project.endDate = value
        continue
      }
      if (key === 'rating') {
        // convert to date?
        project.rating = value
        continue
      }
    }
    if (section) {
      project.sections.push(section)
    }
  } else {
    console.log('No data found.')
  }
  console.log(JSON.stringify(project, null, '\t'))
  return project
}

export default {
  name: 'main',
  computed: {
    showButton () {
      return store.state.signedInState === signedInStates.SIGNED_IN
    },
    sheetUrl: {
      get () {
        return store.state.sheetUrl
      },
      set (value) {
        store.commit('sheetUrl', value)
      }
    }
  },
  methods: {
    async grabData () {
      store.commit('projectData', null)
      if (!this.sheetUrl) {
        Vue.toast('Please provide a sheet URL',
          {className: 'et-alert', horizontalPosition: 'center'})
      }
      let data = await _grabData(this.sheetUrl)
      console.log(`DATA is ${data}`)
      store.commit('projectData', data)
      if (data !== null) {
        console.log('redirecting to render')
        router.push({name: 'Render'})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>-->
