import Carousel from 'react-bootstrap/Carousel'
const Carouselcomponent = (props) => {
    return(
        <Carousel>  
            <Carousel.Item style={{'height':"500px"}} >  
             <img style={{'height':"500px"}}  
                className="d-block w-100"  
                  src={'img4.jpg'} alt={"img4"}  />  
                 <Carousel.Caption>  
                            
                 </Carousel.Caption>  
            </Carousel.Item  >  
            <Carousel.Item style={{'height':"500px"}}>  
             <img style={{'height':"500px"}}  
              className="d-block w-100"  
              src={'img2.jpg'}  alt={"img2"}  />  
              <Carousel.Caption>  
                                   
               </Carousel.Caption>  
             </Carousel.Item>  
             <Carousel.Item style={{'height':"500px"}}>  
               <img style={{'height':"500px"}}  
                  className="d-block w-100"  
                  src={'img3.jpg'}  alt={"img3"}  />  
                 <Carousel.Caption>  
                                         
                  </Carousel.Caption>  
              </Carousel.Item>  
         </Carousel>  

    )
}


export default Carouselcomponent;