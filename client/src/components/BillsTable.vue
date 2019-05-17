<template>
<div class='container'>
<div class='shadow-lg p-3 mb-5 bg-white rounded'>
    <table class='table'>
        <div class='form-check'>
            <input class='form-check-input' type='checkbox' v-model='editTable' id='deletecheck'>
            <label class='form-check-label' for='deletecheck'>
                Delete
            </label>
        </div>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Paid</th>
            <th v-show='editTable'>Delete</th>
        </tr>
        <!--THis table duisplays the data from the model and any data the users add-->
        <BillsRow v-for='bill in bills'
        v-bind:key='bill.id'
        v-bind:bills='bill'
        v-bind:edit='editTable'
        v-on:delete-bills='billsDeleted'
        v-on:isPaid='updateBillPaid'
        >

        </BillsRow>
    </table>
</div>
</div>
    
</template>

<script>
import BillsRow from '../components/BillsRow'
export default {
    name:'BillsTable',
    components:{
        BillsRow
    },
    data(){
        return{
            editTable:false
        }
    },
    props:{
        bills:Array
    },
    methods:{
        //this emits the bill being deleted to the parent component
        billsDeleted(bills){
            this.$emit('delete-bills', bills)
        },
        //this updates the bill without emiting it to the parent component
          updateBillPaid(billid, billpaid){
        this.$finance_api.updateBill(billid, billpaid).then(data => {
            
        })
    }
    },
  

}
</script>

<style>

</style>
