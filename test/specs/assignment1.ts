describe("Google home page verification",()=>{
    it("Google home page test",()=>{
        //open url
        browser.url("https://www.google.com/")
        //verify title
        expect(browser).toHaveTitleContaining("Google")
        //verify Google offered in
        expect($("div#SIvCob").getText()).toHaveTextContaining("Google offered in:")
        let languages = $$("div#SIvCob a")
        expect(languages[0].getText()).toHaveTextContaining("हिन्दी");
        expect(languages[1].getText()).toHaveTextContaining("বাংলা");
        expect(languages[2].getText()).toHaveTextContaining("తెలుగు");
        expect(languages[3].getText()).toHaveTextContaining("मराठी");
        expect(languages[4].getText()).toHaveTextContaining("தமிழ்");
        expect(languages[5].getText()).toHaveTextContaining("ગુજરાતી");
        expect(languages[6].getText()).toHaveTextContaining("ಕನ್ನಡ");
        expect(languages[7].getText()).toHaveTextContaining("മലയാളം");
        expect(languages[8].getText()).toHaveTextContaining("ਪੰਜਾਬੀ");
        //verify buttons value
        let buttons = $$("div.FPdoLc input")
        expect(buttons[0].getValue()).toHaveTextContaining("Google Search")
        expect(buttons[1].getValue()).toHaveTextContaining("I'm Feeling Lucky")

        
    })
});