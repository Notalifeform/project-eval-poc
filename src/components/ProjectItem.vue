<template>
  <div class="container" v-if="showProject">
    <div class="titlebar">
        <div class="left">
            <p>Projectevaluatie</p>
            <p class="project-title">{{projectData.name}}</p>
        </div>
        <div class="right">
            <p>Klant: {{projectData.customerName}}</p>
            <p>Start: {{projectData.startDate | formatDateMonthYear}}</p>
            <p>Eind: {{projectData.endDate | formatDateMonthYear}}</p>
        </div>
    </div>
    <ul class="flex-container">
      <li
      is="section-item"
      v-for="(section, index) in projectData.sections"
      v-bind:key="section.id"
      v-bind:section="section"
      ></li>
      <li class="block">
        <div class="header" id="conclusion">
            <p class="title">Leerpunten  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>eindcijfer</i></p>
            <div class="grade">7</div>
        </div>
        <div class="content">
            <ul id="lessons">
               <li v-for="item in projectData.lessonsLearned">
               {{ item }}
               </li>
            </ul>
        </div>
      </li>
    </ul>
    <div class="footer">
        <p>Dit is bedrijfsgevoelige informatie en is strikt voor intern gebruik bedoeld.</p>
        <img class="logo" src="/static/css/images/sping-logo.svg">
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your About'
    }
  },
  computed: {
    showProject () {
      return store.state.projectData !== null
    },
    projectData () {
      return store.state.projectData
    }
  }
}
</script>

