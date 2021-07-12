<template>
        <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name: 'transaction.index' }" class="btn btn-dark">
                Back</router-link>
                <hr>
                <div class="card rounded-shadow">
                    <div class="card-header">
                        Create Transacion
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="form-label">Title</label>
                                <input type="text" class="form-control" v-model="transaction.title">
                                <div v-if="validation.title" class="text-danger">
                                    {{validation.title[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Amount</label>
                                <input type="text" class="form-control" v-model="transaction.amount">
                                <div v-if="validation.amount" class="text-danger">
                                    {{validation.amount[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Amount Sold</label>
                                <input type="text" class="form-control" v-model="transaction.amount_sold">
                                <div v-if="validation.amount_sold" class="text-danger">
                                    {{validation.amount_sold[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Time Stampe</label>
                                <input type="text" class="form-control" placeholder="yyyy-mm-dd:mm:ss"
                                v-model="transaction.time">
                                <div v-if="validation.time" class="text-danger">
                                    {{validation.time[0]}}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Type</label>
                                <select id="" class="form-select" v-model="transaction.type">
                                    <option value="expense">Expense</option>
                                    <option value="revenue">Revenue</option>
                                </select>
                                <div v-if="validation.type" class="text-danger">
                                    {{validation.type[0]}}
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
        const transaction = reactive({
            title: '',
            amount: '',
            amount_sold: '',
            time: '',
            type: '',
        });

        const validation =  ref([]);

        const router = useRouter();

        function store() {
            axios.post(
                'http://127.0.0.1:8000/api/transaction',
                transaction
            )
            .then(() => {
                router.push({
                    name: 'transaction.index'
                });
            }).catch((err) => {
                validation.value = err.response.data
            });
        }

        return {
            transaction,
            validation,
            router,
            store
        };
    }
}
</script>

<style>

</style>