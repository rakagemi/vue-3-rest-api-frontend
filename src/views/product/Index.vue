<template>
<div class="container md-5">
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
</div>
 <div class="container my-3">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card rounded-shadow">
                    <div class="card-header">
                       <h4> Product List </h4>
                        <div class="my-3">
                            <router-link :to="{ name: 'product.create' }" class="btn btn-dark">
                        Add</router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Stock</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in products.data" :key="index">
                                    <td>{{product.name}}</td>
                                    <td>{{product.stock}}</td>
                                    <td>{{product.type_products}}</td>
                                    <td>Rp.{{product.price}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{name: 'product.edit', params:{id: product.id}}"
                                            class="btn btn-sm btn-warning">
                                                Edit
                                            </router-link>
                                            <button class="btn btn-sm btn-danger"
                                                @click.prevent="destroy(product.id, index)"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'
export default {
        setup() {
        //reactive state
        let products = ref([]);

        onMounted(() => {
            // get data from api
            axios.get('http://127.0.0.1:8000/api/product')
            .then((result) => {
                products.value = result.data
                console.log(result)
            }).catch(() => {
                console.log(err.response)
            });
        });

        function destroy(id, index) {
            axios.delete(
                `http://127.0.0.1:8000/api/product/${id}`
            )
            .then(() => {
                products.value.data.splice(index, 1)
            }).catch((err) => {
                console.log(err.response.data);
            });
        }

        return {
            products,
            destroy
        }
    }
}
</script>

<style>

</style>