import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Details = (props) => {
    // const context = useContext(Context);
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        if (params.resource && params.uid) {
            actions.getDetails(params.resource, params.uid)
        }
        return () => {
            actions.removeCurrentItem();
        }
    }, [])
    return (
        <div className="container d-flex justify-content-center">
            {store.currentItem && (
                <React.Fragment>
                    <div className="card mb-3 border-0" style={{ maxWidth: "700px", maxHeight: "700px" }}>
                        <div className="row g-0 d-flex align-item-center">
                            <div className="col-md-6 align-self-center">
                                <img src={`https://starwars-visualguide.com/assets/img/${params.resource === "people" ? "characters" : params.resource}/${params.uid}.jpg`} className="card-img-top" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1 className="card-title text-center"><strong>{store.currentItem.properties.name}</strong></h1>
                                    <p className="card-text text-center fs-5"><strong>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <hr size="5" className="mt-4" style={{ color: "red" }} />
                        </div>
                        <div className="row g-0 justify-content-around">
                            {params.resource === "people" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#dc3545" }}>
                                    <div className="col-md-2"><strong>Name<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2"><strong>Birth<br></br>Year<br></br></strong>{store.currentItem.properties.birth_year}</div>
                                    <div className="col-md-2"><strong>Gender<br></br></strong>{store.currentItem.properties.gender}</div>
                                    <div className="col-md-2"><strong>Height<br></br></strong>{store.currentItem.properties.height}</div>
                                    <div className="col-md-2"><strong>Skin<br></br>Color<br></br></strong>{store.currentItem.properties.skin_color}</div>
                                    <div className="col-md-2"><strong>Eye<br></br>Color<br></br></strong>{store.currentItem.properties.eye_color}</div>
                                </div>
                            )}
                            {params.resource === "planets" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#dc3545" }}>
                                    <div className="col-md-2"><strong>Name<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2"><strong>Climate<br></br></strong>{store.currentItem.properties.climate}</div>
                                    <div className="col-md-2"><strong>Population<br></br></strong>{store.currentItem.properties.population}</div>
                                    <div className="col-md-2"><strong>Orbital<br></br>Period<br></br></strong>{store.currentItem.properties.orbital_period}</div>
                                    <div className="col-md-2"><strong>Rotation<br></br>Period<br></br></strong>{store.currentItem.properties.rotation_period}</div>
                                    <div className="col-md-2"><strong>Diameter <br></br></strong>{store.currentItem.properties.diameter}</div>
                                </div>
                            )}
                            {params.resource === "vehicles" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#dc3545" }}>
                                    <div className="col-md-2"><strong>Name<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2"><strong>Model<br></br></strong>{store.currentItem.properties.model}</div>
                                    <div className="col-md-2"><strong>Passengers<br></br></strong>{store.currentItem.properties.passengers}</div>
                                    <div className="col-md-2"><strong>Lenght<br></br></strong>{store.currentItem.properties.length}</div>
                                    <div className="col-md-2"><strong>Cargo<br></br>Capacity<br></br></strong>{store.currentItem.properties.cargo_capacity}</div>
                                    <div className="col-md-2"><strong>Consumables<br></br></strong>{store.currentItem.properties.consumables}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}