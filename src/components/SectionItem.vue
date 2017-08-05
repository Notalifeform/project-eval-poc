<template>
  <li class="block">
    <div class="header">
        <p class="title">{{section.name}}</p>
        <div class="grade">{{section.rating}}</div>
    </div>
    <div class="content">
        <ul>
          <li class="pos" v-for="item in section.pros">
          {{ item }}
           </li>
          <li class="neg" v-for="item in section.cons">
          {{ item }}
           </li>
        </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'sectionItem',
  props: ['section']
}

</script>

