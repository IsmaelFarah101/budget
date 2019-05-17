<template>
<!--This is the rows that is used to display each of the  bills and allows users to delete some-->
    <tr class='bills-row'>
        <td>{{bills.name}}</td>
        <td>{{bills.amount | dollar}}</td>
        <td>{{bills.description}}</td>
        <!--This is used to get the state of the bill being paid-->
        <td><input id='paid' type='checkbox' v-model='billpaid' v-on:change="$emit('isPaid',billid, billpaid)"></td>
        <td v-show='edit'>
            <!--This button is used to delete the row-->
        <button class='btn btn-warning' v-on:click='deleteBills(bills)'>Delete</button>

        </td>
    </tr>
</template>

<script>
export default {
    name:'BillsRow',
    props:{
        bills:Object,
        edit:Boolean
    },
    data(){
        return{
            //this is used to help me get the state of whether the bill was paid or not
            billpaid: this.bills.paid,
            billid: this.bills.id
        }
    },
    methods:{
        //this checks if the user wants to delete the bill and then emits it to the parent component
        deleteBills(bills){
            if(confirm(`Do you want to delete ${bills.name}`)){
                this.$emit('delete-bills', bills)
            }
        }    
    },
    //this filters the amount to make it presentable
    filters:{
        dollar:function(amount){
            
        return "$ " + amount.toFixed(2)
        }

    }
}
</script>

<style>

</style>
