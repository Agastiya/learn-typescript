describe('Array',function(){
    
    it('should Readonly Array',function(){
        const animals: ReadonlyArray<string> = ["Kucing","Kuda"]
        console.info(animals)
        // animals[0] = "Keyboard" //(tidak bisa diubah)
    })
    
})