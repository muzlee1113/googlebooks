import React from "react";
import "./style.css";


export function Wrapper({children}){
    return (
        <div className="cardcontainer mt-4">{children}</div>
    )
}


export function BookItem(props){

    return (
        <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={props.image} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text">
                <small className="text-muted">{props.authors}</small>
              </p> 
              <a href={props.link} className="btn btn-primary">View</a>
              <a href="#" className="btn btn-primary ml-2" onClick={(e)=>props.saveBook(props.bookobj, e)}>Save</a>
            </div>
          </div>
        </div>
      </div>
      )
}


export function BookItemForSaved(props){

  return (
      <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.image} className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-muted">{props.authors}</small>
            </p> 
            <a href={props.link} className="btn btn-primary">View</a>
            <a href="#" className="btn btn-primary ml-2" onClick={(e)=>props.deleteBook(props.dataId, e)}>Delete</a>
          </div>
        </div>
      </div>
    </div>
    )
}


