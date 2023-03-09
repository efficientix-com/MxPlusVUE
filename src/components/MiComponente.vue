<template>
  <div id="mi-componente">
    <h1>Este es mi Componente</h1>
    <h2>{{ subtitulo }}</h2>
    <input v-model="message" placeholder="edit me" />
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo",
    };
  },
};
</script>