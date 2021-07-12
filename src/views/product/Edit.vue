<template>
  <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'product.index' }" class="btn btn-dark">
                Back</router-link>
                <hr>
                <div class="card rounded-shadow">
                    <div class="card-header">
                        Edit Product
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="update()">
                            <div class="mb-3">
                                <label for="" class="form-label">Name</label>
                                <input type="text" class="form-control" v-model="product.name">
                                <div v-if="validation.name" class="text-danger">
                                    {{validation.name[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Stock</label>
                                <input type="text" class="form-control" v-model="product.stock">
                                <div v-if="validation.stock" class="text-danger">
                                    {{validation.stock[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Type Product</label>
                                <select id="" class="form-select" v-model="product.type_products">
                                    <option value="konsumsi">konsumsi</option>
                                    <option value="pembersih">pembersih</option>
                                </select>
                                <div v-if="validation.type_products" class="text-danger">
                                    {{validation.type_products[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Price</label>
                                <input type="text" class="form-control" v-model="product.price">   
                                <div v-if="validation.price" class="text-danger">
                                    {{validation.price[0]}}
                                </div>
                            </div>
                            <button class="btn btn-outline-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
      setup() {
        //data binding
        let product = reactive({
            name: '',
            stock: '',
            type_products: '',
            price: '',
        });

        const validation =  ref([]);

        const router = useRouter();

        const route = useRoute();

        onMounted(() => {
            axios.get(`http://127.0.0.1:8000/api/product/${route.params.id}`)
            .then((result) => {
                product.name = result.data.data.name
                product.stock = result.data.data.stock
                product.type_products = result.data.data.type_products
                product.price = result.data.data.price
            }).catch((err) => {
                console.log(err.response.data)
            });
        });

        function update() {
            axios.put(
                `http://127.0.0.1:8000/api/product/${route.params.id}`,
                product
            )
            .then(() => {
                router.push({
                    name: 'product.index'
                });
            }).catch((err) => {
                validation.value = err.response.data
            });
        }

        return {
            product,
            validation,
            router,
            update
        };
    }
}
</script>

<style>

</style>