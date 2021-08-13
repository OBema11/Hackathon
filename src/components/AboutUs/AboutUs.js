import React from 'react'
import we from './we/we.jpg'
import we2 from './we/we2.jpeg'
import './Aboutus.css'
const  AboutUs =()=> {

    return (
        <div>
              <>
                <div className="container emp-profile">
                    
                                   <h2 style={{display:'flex',justifyContent:'center' }}>About Us</h2>
                        {/* <div className="row">
                        <div className=" col-md-4"> */}
                                <img width="50%" height="400" src={we} alt="we" />
                                <img width="50%" height="400" src={we2} alt="we"/>
                            </div>

                                   <p>Fashion is our expression and we have a passion for it. But it doesn’t stop there. We want to make a difference.  We want to empower women to empower the world.
Violet first came to life because there was no Violet. And since that day our mission has been to empower young women across the globe to salute sisterhood. Whether we address social sustainability, body rights, mental health, periods – or simply new fashion trends, we want to inspire everyone to express their own unique style and feel worthy just the way they are. Our aim is to offer an alternative, when it comes to our store experience, in our signatures style and in our mission to empower.​

As a purpose-driven brand we not only want to be recognised for our on-trend collections and sisterhood values, but also for our brave sustainability efforts and conscious initiatives. We’re in this for the long-haul and we’d love for you to join us on this journey.

Violet aims to be part of driving global change by putting its purpose, to empower women to empower the world, at the forefront of everything we do. Monki.com delivers to 31 markets, and via International shipping to an additional 64 destinations worldwide. Monki.tmall.com offers Monki fashion in China and wholesale ensures global shipping. Over 100 concept stores offer the Monki IRL experience across 20 markets. Founded 2006 in Sweden, Monki is a brand within the H&M group.​

2020 and beyond
2020 has us reflecting on how we're living up to our aim. How we can take a clear position on being kind and being empowering. Because we want to make a real difference in the real world. Which is why we're aligning how we can 'be kind to the world' and 'be empowering' with two of the United Nation's Sustainability Development Goals (SDGs):
 
SDG 5 — Gender equality
SDG 12 — Sustainable consumption and production

SDGs in a nutshell
Curious about what the United Nations' Sustainable Development Goals are? Think of the SDGs as a global action plan. 17 goals that focus on ending poverty, protecting the planet and improving the lives of everyone. In 2015, all UN Member states adopted these goals and set out a 15-year plan to achieve them by 2030. And 2020 sees a decade of countries, companies and people ramping up action to make sure we can achieve these, together, by 2030. Read more about the UN SDGs.

So, who's in charge?
While our mission is Violet wide, we have a core group in place to ensure we stay on track. This team is comprised of individuals from each department within Violet. There are so many people behind the scenes and many amazing co-labs and partnerships that go into making this happen. </p>
                           
                            <div>

                            {/* </div>
                        

                        </div> */}
                
                </div>
              </>  
            </div>
        )
    
}


export default  AboutUs;