<template>
            <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'product.index' }" class="btn btn-dark">
                Back</router-link>
                <hr>
                <div class="card rounded-shadow">
                    <div class="card-header">
                        Create Product
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
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
                                <div v-if="validation.Price" class="text-danger">
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
        setup() {
        //data binding
        const product = reactive({
            name: '',
            stock: '',
            type_products: '',
            price: '',
        });

        const validation =  ref([]);

        const router = useRouter();

        function store() {
            axios.post(
                'http://127.0.0.1:8000/api/product',
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
            store
        };
    }
}
</script>

<style>

</style>