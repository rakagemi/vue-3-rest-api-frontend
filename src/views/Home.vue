<template>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link" >Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'transaction.index' }" class="nav-link" >Table Transaction</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'product.index' }" class="nav-link" >Table Product</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
      <div class="jumbotron">
        <div class="my-12">
        <h1 class="display-4">Simple App!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </div>
      </div>
</div>
</template>

<script>
//import axios from "axios" ;
export default {
    name: "Home",
}
</script>

<style>

</style>