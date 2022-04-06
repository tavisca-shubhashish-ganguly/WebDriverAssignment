import {Hotel} from "../pageobjects/hotel"
const hotelPage: Hotel = new Hotel()


export class HotelDsl{

    async OpenHotelHome(){
        await hotelPage.OpenHotel()

    }
    async SearchHotel(destination: string, checkin : string, checkout: string){
        
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination(destination)
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate(checkin)
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate(checkout)
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
    }
}


