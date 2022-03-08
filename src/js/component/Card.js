import PropTypes from "prop-types";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Card = ({ item, resource }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card my-3 mx-3" style={{ minWidth: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${resource === "people" ? "characters" : resource}/${item.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex contanier justify-content-between">
                    <Link to={`/${resource}/${item.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={(e) => {
                            console.log(resource, item.uid);
                            actions.getFavorites(resource, item.uid);
                        }}>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div >
    )
}

Card.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string,
};