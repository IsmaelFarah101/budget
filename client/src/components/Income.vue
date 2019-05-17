<template>
<div class='container'>
    <!--This contains the component relating to the income it displays the table and total-->
    <b-button v-b-modal.income-modal variant="primary">Add Income</b-button>

<div class='row'>
    <div class='col-8'>
        <IncomeTable v-bind:incomes='incomes' v-on:delete-income="incomeDeleted"></IncomeTable>
    </div>
   <div class='col-4'> 
       <Total v-bind:data='incomes' v-bind:name="name"></Total>
    </div>
</div>
<b-modal id="income-modal" size="lg" title="Add Income">
    <IncomeAdd v-on:income-added='newIncomeAdded'></IncomeAdd>
    </b-modal>

</div>
</template>

<script>
import IncomeTable from '@/components/IncomeTable'
import Total from '@/components/Total'
import IncomeAdd from '@/components/IncomeAdd'
export default {
    name:'Income',
    components:{
        IncomeTable,
        Total,
        IncomeAdd
    },
    data(){
        return{
            
            incomes:[],
            name:'Total Income',
        }
    },
    mounted(){        
        //this initially fetches the data when the componenent is rendered

        this.updateIncome()
        
    },
    methods:{
        //this function interacted with the api to add a new income to the model
        newIncomeAdded(income){
            this.$finance_api.addIncome(income).then(() => {
                this.updateIncome()
            }).catch(err => {
                let errormsg = err.response.data.join(',')
                alert('Error adding income.\n ' + errormsg)
            })
        },
    //this function interacted with the api to delete a income from the model
        incomeDeleted(income){
            this.$finance_api.deleteIncome(income.id).then(() => {
                this.updateIncome()
            })
        },
        //this function gets the income data
        updateIncome(){
            this.$finance_api.getAllIncome().then(data => {
                this.incomes = data
            })
        },
    
        }


}
</script>

<style>

</style>
