import test, { chromium, webkit } from "@playwright/test"

test ("Redbus Flipkart",async({})=>{
//Launching Redbus in Edge
const edge =await chromium.launch({headless: false, channel: 'msedge'})
const edgecontext = await edge.newContext()
const edgepage = await edgecontext.newPage()

await edgepage.goto("https://www.redbus.in/")
const redbusURL =edgepage.url()
console.log("Red Bus URL is " +redbusURL)

//Launching Flipkart in Webkit
await webkit.launch({headless: false, channel: 'webkit'})
const webkitcontext = await edge.newContext()
const webkitpage = await webkitcontext.newPage()

await webkitpage.goto("https://www.flipkart.com/")
const flipkart = webkitpage.url()
await webkitpage.waitForTimeout(5000)
console.log("Flipkart URL is " +flipkart)
})