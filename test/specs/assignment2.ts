import {Hotel} from "../pageobjects/hotel"
import { HotelSearch } from "../pageobjects/hotelSearch"
const hotelPage: Hotel = new Hotel()
const hotelSearchPage: HotelSearch = new HotelSearch()

describe("Search Hotel",()=>{
    it("Verify Location",async ()=>{
        //hotelPage.OpenHotel()
        await hotelPage.OpenHotel()
        await browser.pause(2000)
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Mumbai")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/05/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch() 
        await hotelSearchPage.VerifyHotelLocation("Mumbai")
        await hotelSearchPage.VerifyHotelLocationInResults("Mumbai")
        await hotelSearchPage.VerifyNoOfHotelsDisplayed(6)
        
        await browser.pause(20000) 

    })

})