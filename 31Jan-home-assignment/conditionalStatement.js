let browserName="chromee"
console.log("===Browser Name===")
if(browserName=='Chrome')
{
    console.log("The launched browser is "+browserName)
}
else
{
    console.log("The launched browser is "+browserName+ " NOT CHROME")
}

let testType= 'Regression'
console.log("===TEST TO PERFORM ===")
switch(testType)
{
    case 'smoke':
        {
            console.log("SMOKE TESTING")
            break
        }
        case 'sanity':
            {
                console.log("SANITY TESTING")
                break
            } 
        case 'regression':
            {
                console.log("REGRESSION TESTING")
                break
            }  
        default:
                console.log("Default case - SMOKE")
}