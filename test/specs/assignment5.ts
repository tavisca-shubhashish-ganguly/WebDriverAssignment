import {Hotel} from "../pageobjects/hotel"
import { HotelSearch } from "../pageobjects/hotelSearch"
import {HotelDsl} from "../dsl/hoteldsl"
const hotelPage: Hotel = new Hotel()
const hotelSearchPage: HotelSearch = new HotelSearch()
const hoteldsl: HotelDsl = new HotelDsl()

describe("Verify Hotel Room ",()=>{
    it("Verify Room Availability",async ()=>{
        await hotelPage.OpenHotel()
        await expect(hotelPage.hotelTab).toBeDisplayed()
        await hotelPage.ClickHotelTag()
        await expect(hotelPage.destinationField).toBeDisplayed()
        
        await hotelPage.SelectInputDestination("Brussels")
        await browser.pause(2000) 
        await hotelPage.SelectCheckinDate("04/05/22")
        await browser.pause(2000) 
        await hotelPage.SelectGuests()
        await browser.pause(2000) 
        await hotelPage.SelectCheckOutDate("04/07/22")
        await browser.pause(2000) 
        await hotelPage.ClickOnSearch()
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.ClickOnPageAtIndex(2)
        await browser.pause(2000)
        await hotelSearchPage.VerifyPaginationText()
        await hotelSearchPage.VerifyTextOnPageAtIndex("Next", 7)
        await browser.pause(10000) 

    })

})