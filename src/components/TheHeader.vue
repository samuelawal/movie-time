<template>
  <nav class="navbar navbar-dark navbar-index navbar-expand">
    <div class="container p-2">
      <span class="navbar-brand mb-0 text-warning">Movie~Time</span>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-white mx-auto">
          <li class="nav-item">
            <a class="nav-link active mx-2 " aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white mx-2" href="#">Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white mx-2 " href="#">Tv shows</a>
          </li>
             <li class="nav-item">
            <a class="nav-link text-white mx-2" href="#">Animations</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar-index {
  z-index: 99
}
</style>
