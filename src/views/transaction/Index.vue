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
                       <h4> Transaction List </h4>
                        <div class="my-3">
                            <router-link :to="{ name: 'transaction.create' }" class="btn btn-dark">
                        Add</router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Amoun Sold</th>
                                    <th>Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(transaction, index) in transactions.data" :key="index">
                                    <td>{{transaction.title}}</td>
                                    <td>Rp.{{transaction.amount}}</td>
                                    <td>{{transaction.amount_sold}}</td>
                                    <td>{{transaction.time}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{name: 'transaction.edit', params:{id: transaction.id}}"
                                            class="btn btn-sm btn-warning">
                                                Edit
                                            </router-link>
                                            <button class="btn btn-sm btn-danger"
                                                @click.prevent="destroy(transaction.id, index)"
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
        let transactions = ref([]);

        onMounted(() => {
            // get data from api
            axios.get('http://127.0.0.1:8000/api/transaction')
            .then((result) => {
                transactions.value = result.data
            }).catch(() => {
                console.log(err.response)
            });
        });

        function destroy(id, index) {
            axios.delete(
                `http://127.0.0.1:8000/api/transaction/${id}`
            )
            .then(() => {
                transactions.value.data.splice(index, 1)
            }).catch((err) => {
                console.log(err.response.data);
            });
        }

        return {
            transactions,
            destroy
        }
    }
};
</script>

<style></style>
