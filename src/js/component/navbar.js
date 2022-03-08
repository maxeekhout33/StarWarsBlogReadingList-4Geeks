import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card } from "./Card";


export const Navbar = (item, resource) => {
	const context = useContext(Context);
    const params = useParams();
	
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/">
				<div className="logo-image" style={{ width: "100px" }}>
					<img src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-Transparent-Images.png" className="img-fluid" />
				</div>
			</Link>

			<div className="dropdown mx-5">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="badge badge-pill badge-light">
						{context.store.list.length}
					</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{context.store.favorite && (
						context.store.list.map((favorite, index) => {
							return (
								<li className="dropdown-item" key={favorite.uid}>
									<Link to={`${params.resource}/${favorite.uid}`}>
										{favorite.properties.name}
									</Link>
									<span
										className="close"
										onClick={(e) => {
											console.log("Borra Fav");
											const deleteFavorite = context.store.list.filter(
												(nonFavorite, i) => {
													if (index == i) {
														return false;
													} else {
														return true;
													}
												}
											);
											console.log(deleteFavorite);
											context.actions.deleteFav(deleteFavorite);
										}}>
										<i className="fa-solid fa-trash-can"></i>
									</span>
								</li>
							);
						})
					)}
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string,
};