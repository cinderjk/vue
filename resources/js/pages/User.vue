<template>
  <div>
    <section v-if="name">
      <router-link :to="{ name: 'User' }">Kembali ke daftar</router-link>
      <h1>Hello {{ name }}.</h1>
    </section>
    <section v-else>
      <h1>Daftar Orang Hilang</h1>
      <ul>
        <li vf></li>
      </ul>
      <ul>
        <li v-for="(user, u) in users" :key="u">
          <router-link :to="profile_uri(u.name)">{{ u.name }}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      users: [
        { id: 1, name: "Fahri" },
        { id: 2, name: "Pano" },
        { id: 3, name: "Osas" },
        { id: 4, name: "Joko" },
        { id: 5, name: "Widodi" },
      ],
    };
  },
  methods: {
    profile_uri(name) {
      return "/user/" + name;
    },
  },
};
</script>