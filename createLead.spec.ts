import test from '@playwright/test'

test ("Create Lead",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator(".inputLogin").last().fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
await page.locator(`text='Leads'`).click()
await page.waitForTimeout(2000)
await page.locator(`text='Create Lead'`).click()
await page.waitForTimeout(2000)
await page.locator("#createLeadForm_companyName").fill("TestLeaf2026")
await page.locator("#createLeadForm_firstName").fill("Jaiganesh")
await page.locator("#createLeadForm_lastName").fill("Periyasamy")
await page.locator("#createLeadForm_personalTitle").fill("Mr")
await page.locator("#createLeadForm_generalProfTitle").fill("Test Lead")
await page.locator("#createLeadForm_annualRevenue").fill("1200000")
await page.locator("#createLeadForm_departmentName").fill("Testing")
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9094048266")
await page.locator(".smallSubmit").click()

})