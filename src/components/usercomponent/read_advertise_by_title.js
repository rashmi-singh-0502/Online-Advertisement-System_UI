import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ReadByAdvertiseTitleAction from '../../actions/user_actions/read_advertise_by_title_action';
import '../../css/read_advertise_by_title.css'
import {useRef} from 'react';

let dispatch;
const ReadAdvertiseByTitleComponent = (props) => {
    let advertiseList = useSelector(state => state);
    dispatch = useDispatch();

    console.log("Advertise List: ",advertiseList);

    if(!Array.isArray(advertiseList)){
        advertiseList = [];
        console.log("Set advertiseList to blank array");
    }

    const advertiseTitleRef = useRef(null);
    const readAdvertise = (event) => {

    }

    return(
        <div>
            <center>
            <form onSubmit={handleSubmit}>
                <div className="container">
                <div className="search-box">
                    <p>Enter advertise title:</p>
                    <input type="text" name="title" placeholder="Enter advertise title"></input>
                </div>
                {/* <br></br> */}
                <div>
                    <button type="submit" className="btn-sm btn-success shadow-none">View</button>
                </div>
                </div>
                <table border="2">
                    <thead class="indigo white-text">
                        <tr>
                            <th>Advertise id</th>
                            <th>Advertise Title</th>
                            <th>Category</th>
                            <th>Advertise Description</th>
                            <th>Price</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData(advertiseList)}
                    </tbody>
                </table>
                </form>
            </center>
        </div>
    );
}

function renderTableData(advertiseList){
    console.log("advertiseList: ",advertiseList);
    return advertiseList.map((advertise, index) => {
        const name = advertise.category.name;
        const ad_id = advertise.ad_id;
        const title = advertise.title;
        const description = advertise.description;
        const price = advertise.price;
        return(
            <tr key = {ad_id}>
                <td>{ad_id}</td>
                <td>{title}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
               {/*  <td>
                    <button className="btn-sm btn-info shadow-none">Edit</button>
                    <button className="btn-sm btn-danger shadow-none">Delete</button>
                </td> */}
            </tr>
        )
    })
};

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const title = data.get('title');
    console.log(title);
    if(title===''){
        alert("Title cannot be blank");
        return;
    }
    dispatch(ReadByAdvertiseTitleAction(title))
}

export default ReadAdvertiseByTitleComponent;