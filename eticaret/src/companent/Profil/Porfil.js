import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {/* useDispatch,*/ useSelector } from "react-redux";
import * as cartAction from "../../redux/action/cartAction";
import { bindActionCreators } from 'redux'
function Cart(props) {
    
 
    
    return (
        <div>
       
    <div class="container">



<div class="row">
    <div class="col-md-12">
        <h2>Profil Sayfası</h2>
        <hr />
    </div>
</div>

<div class="row">
    <div class="col-md-3">
        <center><img src="http://placehold.it/150x150" class="img-circle img-responsive img-thumbnail" /></center>
    </div>
    <div class="col-md-8 well">

        <div class="form-group">

        </div>

        <div class="form-group">
            <label class="col-md-2 text-danger">Name : </label>
            <label class="col-md-10">Murat</label>
        </div>

        <div class="form-group">
            <label class="col-md-2 text-danger">Surname : </label>
            <label class="col-md-10">Başeren</label>
        </div>

        <div class="form-group">
            <label class="col-md-2 text-danger">E-Mail : </label>
            <label class="col-md-10">kadirmuratbaseren@gmail.com</label>
        </div>

        <div class="form-group">
            <label class="col-md-2 text-danger">Bio : </label>
            <label class="col-md-10">
                Ipsum gravida vel pretium tellus tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut.
            </label>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-10 col-md-offset-1 text-right">
        <a href="#" class="btn btn-warning">
            <span class="glyphicon glyphicon-edit"></span> Edit
        </a>

        <a href="#" class="btn btn-danger">
            <span class="glyphicon glyphicon-trash"></span> Delete
        </a>
    </div>
    <div class="col-md-12">
        &nbsp;
    </div>
</div>
</div>
         
        </div>

    )
}
