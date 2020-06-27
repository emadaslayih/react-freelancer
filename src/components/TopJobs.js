import React from "react"

const job=[
    {
        name:"PHP"
    },
    {
        name:"Graphic Design"
    },

    {
        name:"Website Design"
    },
    {
        name:"HTML"
    },
    {
        name:"Logo Design"
    },
    {
        name:"Photoshop"
    },   
    {
        name:"WordPress"
    },    
    {
        name:"Article Writing"
    },    
    {
        name:"Javascript"
    },    
    {
        name:"Mobile App Development"
    },    
    {
        name:"Software Architecture"
    },    
    {
        name:"Data Entry"
    },    
    {
        name:"Android"
    },    
    {
        name:"Excel"
    },    
    {
        name:"CSS"
    },    
    {
        name:"HTML5"
    },    
    {
        name:"Internet Marketing"
    },    
    {
        name:"Copywriting"
    },    
    {
        name:"SEO"
    },    
    {
        name:"iPhone"
    },    
    {
        name:"Research Writing"
    },    
    {
        name:"Translation"
    },    
    {
        name:"Java"
    },    
    {
        name:"MySQL"
    },    
    {
        name:"Ghostwriting"
    },    
    {
        name:"Technical Writing"
    },    
    {
        name:"Python"
    },    
    {
        name:"Social Media Marketing"
    },    
    {
        name:"Research"
    },    
    {
        name:"Link Building"
    },    
    {
        name:"C# Programming"
    },    
    {
        name:"3D Modelling"
    },    
    {
        name:"Web Search"
    },    
    {
        name:"Web Scraping"
    },    
    {
        name:"3D Rendering"
    },    
    {
        name:"Linux"
    },    
    {
        name:"Video Services"
    },    
    {
        name:"C++ Programming"
    },    
    {
        name:"eCommerce"
    },    
    {
        name:"Banner Design"
    },    
    {
        name:"Illustration"
    },    
    {
        name:"Proofreading"
    },    
    {
        name:"3D Animation"
    },    
    {
        name:"Content Writing"
    },    
    {
        name:"See All"
    }
]

const TopJobs=()=>{
    return (
        <div className="container top-job py-5">
            <h2 className="text-center">Browse top job categories</h2>
            <div className="row mx-0">
                {
                    job.map((job,i)=>{
                        return(
                            <div key={i} className="job">
                                <i className="fas fa-caret-right"></i>
                                <a href="/">{job.name}</a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )

}

export default TopJobs