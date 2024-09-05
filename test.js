function computers () {
    let laptop = {
        cpu : 'i9',
        ram : 16,
        brand: 'HP',

        greet : function(){
            console.log(this.cpu)
        }
    }
    return laptop
}

computers().greet()