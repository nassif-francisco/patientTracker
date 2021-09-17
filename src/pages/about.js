
const About = ()=>{

    return (
    <div> 
         <br/>
         <br/>
        <p> 
            Hi! Francisco here.

            <img src="author.png"  alt="Francisco Sanchez"
            height={300} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            align="right"
            />

        </p>
        <br/>
        <p className = "p"> A little bit about me. After graduating from Geophysical Engineering, I wrote code for a couple of E&P companies, 
            mostly in bash and Ruby. 
            <br/>
            Then, I was awarded a PhD. scholarship to write some more code, this time for an E&P big 
            player, Ecopetrol, which wanted a C++ based 
            <br/>
            simulator from scratch.
            <br/>
            By the end of the PhD., I realized that, to me, it was more important to write impactful code than intricate one. Check out this 
            <br/>
            for examples of hairy code
            ####
            <a href="https://www.sciencedirect.com/science/article/pii/S1674987120302061">check this</a>
            ####
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0895981120305617?via%3Dihub">or this!</a>
            . That is why I am so into web systems! because they give solutions to real life problems.
            <br/>
            I mean, as long as my code can make somebodys life better, easier or funnier, I really do not mind if 
        no Laplacian operators or the weak form
        <br/>
        of the heat equation are considered.
        <br/>
        <br/>
        Listening of new coding ventures makes me almost as happy as my 1-year-old daughter doing backflips on the bed. Please email me at nassif.franciscosanchez@gmail.com
        </p>
         

       

    </div>
    
    )
    
}

export default About;