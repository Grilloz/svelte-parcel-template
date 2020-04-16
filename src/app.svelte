<script>
  export let name;
</script>

<style lang="scss">
  $my-color: red;
  h1 {
    text-align: center;
  }
  span {
    color: $my-color;
  }
</style>

<h1>Hello <span>{name}</span>!</h1>