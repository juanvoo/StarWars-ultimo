import React from "react";
import PropTypes from "prop-types";

const Detail = (props) => {
  
  return (
    <div className="card rounded m-4 border-0">
      <div className="row no-gutter">
        <div className="col-md-6">
          <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`}className="card-img" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <p>{props.description}</p><hr className="text-danger" />
            <ul>
              {
                Object.keys(props.properties).map((element, index) =>{
                  return <p className="text-danger h3 d-flex" key={index}>{element}: {props.properties[element]}</p>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



Detail.propTypes = {
  uid: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  properties: PropTypes.object,
  
};
export default Detail;