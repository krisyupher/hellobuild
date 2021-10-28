import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ListFavorites = () => {
  const dispatch = useDispatch();
  const listFavorites = useSelector((state) => state.favorites);

  const removeFavorites = (item) => {
    dispatch({
      type: "SET_DELETE_FAVORITES",
      payload: item,
    });
  };
  const closeSesion = () => {
    dispatch({
      type: "SET_AUTH",
      payload: false,
    });
  };
  return (
    <div className="container-fluid mt-3">
      <div className="jumbotron jumbotron-fluid text-white">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="display-5">Github Repositories</h1>
          <Link to="listRepositories" class="btn btn-secondary">
            list Repositories
          </Link>
          <button
            onClick={(e) => {
              closeSesion();
            }}
            class="btn btn-danger"
          >
            close sesion
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr className="table-info">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">URL</th>
              <th scope="col">Language</th>
              <th scope="col">favorite</th>
            </tr>
          </thead>
          <tbody>
            {listFavorites !== null &&
              listFavorites !== undefined &&
              listFavorites.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.full_name}</td>
                  <td>{item.html_url}</td>
                  <td>{item.language}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        removeFavorites(item);
                      }}
                      class="btn btn-danger"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListFavorites;
