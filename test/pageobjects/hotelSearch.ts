export class HotelSearch{
    get hotelLocation(){

        return $("div.wayfinder-info")

    }

    get hotelNameFilter(){

        return $("button#HotelName")

    }

    get hotelNamesList(){

        return $$("a.hotel-name")

    }

    get chooseFromButtonsList(){
         return $$("div.hotel-result-pricing-section-container button")
    }

    async hotelStarRating(i: number){
        var hotels = await $$("dd.fi-star-rating")
        var star = await hotels[i-1].$$("svg.hotel-results-star-rating-selected").length
        return star

    }

    async noOfhotelRoomsAvailable(){
        return await $$("li.result h3").length
    }

    get hotelStarRatingFilter(){

        return $("button#StarRating")

    }

    get paginationText(){
         return $("h4.hotel-results-footer-pagination-count strong")
    }

    get pageButtons(){
        return $("ul.pagination-lg")
    }

    get addressLines(){

        return $$("dd.address-line")

    }

    VerifyHotelLocation(location: string){
        expect(this.hotelLocation).toHaveTextContaining(location)
    }

    async VerifyNoOfHotelsDisplayed(noOfhotels: number){
    
        await expect(await this.addressLines.length).toBeLessThanOrEqual(noOfhotels)

    }

    VerifyHotelLocationInResults(location: string){
        
        this.addressLines.forEach(function (value) {
            expect(value).toHaveTextContaining(location)
          })
        
    }

    async VerifyStarFilter(){
        var hotels = $$("dd.fi-star-rating")
        var prevStar: number
        
        prevStar = await this.hotelStarRating(1)
        hotels.forEach(async hotel =>{
            expect(hotel.$$("svg.hotel-results-star-rating-selected").length).toBeLessThanOrEqual(prevStar)
            prevStar = await hotel.$$("svg.hotel-results-star-rating-selected").length
        })
        

    }

    async VerifyNameFilter(){ 
        var actualNames = this.hotelNamesList.map((hotelName)=>{hotelName.getText()})
        var copiedNames = (await actualNames).slice()
        expect(copiedNames).toEqual((await actualNames).sort())       

    }

    VerifyPaginationText(){
        this.paginationText.scrollIntoView()
        expect(this.paginationText.getText).toHaveTextContaining("Showing")
    }

    ClickOnPageAtIndex(index: number){
        this.pageButtons.$(`li:nth-child(${index}) button`).scrollIntoView()
        this.pageButtons.$(`li:nth-child(${index}) button`).waitForDisplayed()
        this.pageButtons.$(`li:nth-child(${index}) button`).click()
        
    }

    VerifyTextOnPageAtIndex(text: string,index: number){
        this.pageButtons.$(`li:nth-child(${index}) button`).scrollIntoView()
        expect(this.pageButtons.$(`li:nth-child(${index}) button`).getText()).toHaveTextContaining(text)
        
    }


    

}