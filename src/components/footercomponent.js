import { render } from '@testing-library/react'
import React,{Component} from 'react'
class FooterComponent extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


render(){
    return(
        <div class="pt-5">
            <footer className = "footer">
                {/* <span className="text-dark">All Rights Reserved 2021 @OAS</span> */}
                <span>All Rights Reserved 2021 @OAS</span>
            </footer>
        </div>
    )

}
}

export default FooterComponent