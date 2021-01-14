import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import getAdvertiseListAction from '../../actions/user_actions/read_advertise_list_action';
import '../../css/read_advertise_list.css';

const GetAdvertiseListComponent = (props) => {
    let advertiseList = useSelector(state => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        AdvertiseList()
    },[]);

    const AdvertiseList = () => {
        dispatch(getAdvertiseListAction())
    }
    console.log("Advertise List: ",advertiseList);
    if(!Array.isArray(advertiseList))
    {
        advertiseList = [];
        console.log("Set advertiseList to blank array");
    }
    return(
        <div>
            <center>
                {/* <form action="/"> */}
                <h2>Advertise List</h2>
                <table border="2">
                    <thead class="indigo white-text">
                        <tr>
                            <th>Advertise id</th>
                            <th>Advertise Title</th>
                            <th>Category</th>
                            <th>Advertise Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData(advertiseList)}
                    </tbody>
                </table>
                {/* </form> */}
            </center>
        </div>
    );
};

function renderTableData(advertiseList){
    console.log("advertiseList: ",advertiseList);
    return advertiseList.map((advertise, index) => {
        const name = advertise.category.name;
        const{ad_id,title,description,price} = advertise
        return(
            <tr key = {ad_id}>
                <td>{ad_id}</td>
                <td>{title}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                    <button className="btn btn-info shadow-none"><span className="glyphicon glyphicon-edit" aria-hidden="true" title="Edit advertise"></span></button>
                    <button className="btn btn-danger shadow-none"><span className="glyphicon glyphicon-remove" aria-hidden="true" title="Delete advertise"></span></button>
                </td>
            </tr>
        )
    })
};

export default GetAdvertiseListComponent;