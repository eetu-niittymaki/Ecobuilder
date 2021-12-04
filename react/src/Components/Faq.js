import React from "react";
import Header from "./Header"
import "./Faq.css"

export default function Faq() {
    return (
        <div >
            <Header />
            <div className="containerFaq" >
            <img src="./faq.png" width="100%"/>
            <h1 className="subTitle">CUSTOMER FAQ </h1>
            <h1>1. What is this Webtool about?</h1>
                <p>This website describes 19 optimization approaches for affordable and energy-efficient construction. 
                    It explains practical examples of how energy-efficient buildings can also be constructed cost-effectively. 
                    The goal is to provide you with the relevant information in a time-saving way.</p>

            <h1>2.  Who can use this Webtool?</h1>
                <p>Target groups are primarily architects, engineers, and planners in the construction sector, 
                    as well as interested laypersons such as future building owners. 
                    However, this website is also tailored for municipalities, companies, and citizens.</p>

            <h1>3. Where is the information from?</h1>
                <p>This information is provided by the Bavarian Environment Agency. 
                    A unit within this Agency, the LfU (Ökoenergie-Institut Bayern), 
                    develops tools and information to support the energy transition in an environmentally friendly way. 
                    Together with experienced planners of efficient buildings, 
                    the LfU has complied practical examples of how energy-efficient buildings can also be constructed cost-effectively.</p>

            <h1>4. What is the difference to the already existing PDF document?</h1>
                <p>In addition to the already existing PDF document, 
                    this Webtool provides you with an additional interactive, 
                    descriptive and easier way to research.</p>

            <h1>5. How does the Webtool work?</h1>
                <p>The Webtool starts with an overview of a house. By clicking on a specific part of the house, 
                    you get the relevant information in a compact manner.

                    You will learn in which cases the solution is applicable and what benefits and cost-saving opportunities exist. 
                    You also get tips and understand possible challenges as well as who needs to be involved. 
                    In the end, there are always examples that have already proven themselves in practice. 

                    If you want to come back to certain information, you have the opportunity to save it in a "basket".</p>

            <h1>6. Why is information missing for certain topics?</h1>
                <p>This project is still a work in process. Currently, 19 optimization approaches have been developed and the journey continues. 
                We are still collecting solutions for cost-effective and efficient construction together with planners and adding them to the existing brochure. 
                We also invite everyone to submit their idea solutions.</p>

            <h1>7. Can I submit my own solution?</h1>
                <p>We are always looking forward to new ideas. Both on the website and in the PDF document, you can see which topics have not been covered yet. 
                    Especially on these topics, we need your ideas.  

                    On our website, you find a short form where you can describe your idea. 
                    Please fill in all relevant information. We will then get in contact with you.</p>

            <h1>8. What types of solutions are described in the Webtool?</h1>
                <p>Technical, planning, and organizational solutions are presented.</p>

            <h1>9. Who is the contact person for this project?</h1>
                <p>The contact persons are Tobias Unger and Stephan Leitschuh. 
                    They are both employees in LfU with a focus on the field of energy-efficient and sustainable construction</p>
            
            <h1>10. Where can I find more information about these topics?</h1>
            <p>All texts, maps, and research results from the LfU are published in the Energy Atlas of Bavaria. 
                The Energy Atlas can be found on the following link: <a href ="https://www.energieatlas.bayern.de">https://www.energieatlas.bayern.de/</a></p>

            <h1 className="subTitle">CLIENT FAQ </h1>
            <h1>1. Can I add more information on the Webtool later on?</h1>
                <p>Yes, that is the goal. As of right now, the solutions are not complete. 
                    There will be the option to add information later on.</p>

            <h1>2. How can solutions be submitted?</h1>
                <p>On our website there is a short form where people can describe their idea. 
                    These have to be filled out. Afterwards we get in contact with them.  </p>

            <h1>3. Can this Webtool be integrated in the already existing website?</h1>
                <p>As of right now, we are providing a prototype. After the development of a successful prototype, 
                    the tool would have to be integrated into the Energy Atlas of Bavaria.</p>

            <h1>4. In what language will the webtool be?</h1>
                <p>The PDF document is available only in German. The applications on the Webtool will be in English, 
                    but the informational texts will remain in German. </p>
        </div>
        </div>
    )
}