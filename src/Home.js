import React from 'react'

function Home() {
  return (
    <div><section id="home">
    <h1>Home</h1>
    <p>There are two main temperature scales:<br/>

        °C, the Celsius Scale (part of the Metric System, used in most countries)<br/>
        °F, the Fahrenheit Scale (used in the US)<br/>
         They both measure the same thing (temperature!), but use different numbers:<br/>
        Boiling water (at normal pressure) measures 100° in Celsius, but 212° in Fahrenheit<br/>
        And as water freezes it measures 0° in Celsius, but 32° in Fahrenheit</p>
</section>
<section id="about">
    <h1>About</h1>
    <p>The formula to convert Celsius to Fahrenheit is given by: °F = °C × (9/5) + 32.<br/>
         By using this formula, we can convert any given temperature from Celsius<br/> to Fahrenheit (C to F).</p>
</section>
<section id="contact">
    <h1>Contact</h1>
    <h3>Contact Details</h3>
    <h4>Email-id:temp@gmail.com</h4>
    <h4>Phone Number:1234567890</h4>
</section>
    
</div>
)
}
export default Home