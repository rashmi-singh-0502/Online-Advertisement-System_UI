import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchAction from '../../actions/user_actions/searchaction'
import '../../css/read_advertise_by_title.css'
import LogOutComponent from '../user_logout_header';
import FooterComponent from '../../components/footercomponent';

let dispatch;
let validTitle = false;
let set;

const SearchAdvertise = (props) => {
    let advertiseList = useSelector(state => state);
    dispatch = useDispatch();

    console.log("Advertise List: ", advertiseList);

    if (!Array.isArray(advertiseList)) {
        advertiseList = [];
        console.log("Set advertiseList to blank array");
    }

    return (
        <div>
            <LogOutComponent></LogOutComponent>
            <center>
                <form onSubmit={handleSubmit}  onMouseMove={EnableDisable} className="shadow-none">
                    <div className="container_search">
                        <div className="search-box">
                        <label for="title">Search advertise</label>
                            <input type="text" name="title" placeholder="Enter advertise title" required="required" aria-required="true" onBlur={validateTitle}></input>
                            <small id="titlevalid" class="form-text text-danger invalid-feedback">
                                Advertise title is blank
                            </small>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-sm btn-success shadow-none" disabled="disabled" id="btnsubmit">Search</button>
                        </div>
                    </div>
                    <table border="2" className="table_view">
                        <thead>
                            <tr>
                                <th>Advertise id</th>
                                <th>Advertise Title</th>
                                <th>Category</th>
                                <th>Advertise Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(advertiseList)}
                        </tbody>
                    </table>
                </form>
            </center>
            <FooterComponent></FooterComponent>
        </div>
    );
}

function renderTableData(advertiseList) {
    console.log("advertiseList: ", advertiseList);
    return advertiseList.map((advertise, index) => {
        const name = advertise.category.name;
        const ad_id = advertise.ad_id;
        const title = advertise.title;
        const description = advertise.description;
        const price = advertise.price;
        return (
            <tr key={ad_id}>
                <td>{ad_id}</td>
                <td>{title}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
            </tr>
        )
    })
};

function EnableDisable(event)
{
  event.preventDefault();
  var btnsubmit=document.getElementById("btnsubmit");
  console.log("handle disabled called");
  console.log("validTitle",validTitle);
  
  if(validTitle)
  {  
    set=false;
    console.log("set",set);
    btnsubmit.disabled=false;
  }
  else
  {
    btnsubmit.disabled=true;
  }
}

function validateTitle(event) {
  const data = event.target.value;
  console.log("target", data);

  if (data != "") {
    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');

    validTitle = true;

  } else {
    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');

    validTitle = true;
  }
};

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const title = data.get('title');
    console.log(title);
    if (title === '') {
        alert("Title cannot be blank");
        return;
    }
    dispatch(SearchAction(title))
}

export default SearchAdvertise;