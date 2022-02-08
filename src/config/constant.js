export const endPoints ={
baseURL:'https://mycards.free.beeceptor.com/',
cardDetails:'cardinfo',
amounts:'amounts'
}


export const home_list = [
    {
        title:'Top-up account',
        subTitle:'Deposit money to your account to use with card',
        showToggle:false,
        image:require('../assets/insight.png')
    },
    {
        title:'Weekly spending limit',
        subTitle:'Your weekly spending limit is S$',
        showToggle:true,
        image:require('../assets/Transfer.png')
    },
    {
        title:'Freeze card',
        subTitle:'Your debit card is currently active',
        showToggle:true,
        image:require('../assets/nature.png')

    },
    {
        title:'Get a new card',
        subTitle:'This deactivates your current debit card',
        showToggle:false,
        image:require('../assets/add.png')

    },
    {
        title:'Deactivated cards',
        subTitle:'Your previously deactivated cards',
        showToggle:false,
        image:require('../assets/block.png')

    }
]