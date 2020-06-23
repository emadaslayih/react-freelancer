import React from "react";
import {Image} from "react-bootstrap";

const items =[
    {
        class:"col-lg-1 col-md-3 col-4",
        img:"tv.svg" ,
        title:"PHP"
    },
    {
        class:"col-lg-1 col-md-3 col-4",
        img:"tv.svg" ,
        title:"Website Design"
    },
    {
        class:"col-lg-1 col-md-3 col-4",
        img:"tv.svg" ,
        title:"Graphic Design"
    },
    {
        class:"col-lg-1 col-md-3 col-4",
        img:"tv.svg" ,
        title:"Mobile Apps"
    },
    {
        class:"col-lg-1 col-md-3 col-4",
        img:"tv.svg" ,
        title:"Iphone Apps"
    },
    {
        class:"col-lg-1 col-md-3 col-4",
        img:"tv.svg" ,
        title:"Phptoshop"
    },
    {
        class:"col-lg-1 col-md-3 col-4",
        img:"tv.svg" ,
        title:"Logo Design"
    },
    {
        class:"col-lg-1 col-md-3 col-4",
        img:"tv.svg" ,
        title:"Article Design"
    },
    {
        class:"d-none d-md-inline-block col-lg-1 col-md-3",
        img:"tv.svg" ,
        title:"Data Entry"
    },
    {
        class:"d-none d-md-inline-block col-lg-1 col-md-3",
        img:"tv.svg" ,
        title:"Internet Marketing"
    },
    {
        class:"d-none d-md-inline-block col-lg-1 col-md-3",
        img:"tv.svg" ,
        title:"SEO"
    },
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"3D Modelling"
    },
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Copywriting"
    },
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Ghostwriting"
    },
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Linux"
    },
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Amazon Web Services"
    },    
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Banner Design"
    },    
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Software Development"
    },
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Accounting"
    },    
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Finance"
    },    
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Legal"
    },
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Manufacturing"
    },    
    {
        class:"d-none d-lg-inline-block col-lg-1",
        img:"tv.svg" ,
        title:"Logistics"
    },
    {   class:"d-lg-none col-md-3 col-4",
        img:"ellipsis.svg" ,
        title:"More"
    }
    

]

const Cat =()=>{
    return(
        <div className="cat container text-center my-5">
            <h2>Get work done in over 1350 different categories</h2>
            <div className="row">
                {
                    items.map((item,i)=>{
                        return(
                            <div key={i} className={item.class}>
                                <Image src={item.img}/>
                                <a href="/">{item.title}</a>
                            </div>
                        );
                    })
                }
            
            </div>
        </div>
    )
}
export default Cat;