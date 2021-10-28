import React, { useState } from "react";
import repositoriesService from "../../services/repositories";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ListRepositories = () => {
  const [list, setlist] = useState(null);
  const dispatch = useDispatch();
  const getList = async () => {
    let aux = await repositoriesService.listRepositories("krisyupher");
    setlist(aux.data);
  };
  if (list === null) {
    getList();
  }
  const addFavorites = (item) => {
    dispatch({
      type: "SET_ADD_FAVORITES",
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
          <Link to="listFavorites" class="btn btn-secondary">
            list favorites
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
            {list !== null &&
              list.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.full_name}</td>
                  <td>{item.html_url}</td>
                  <td>{item.language}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        addFavorites(item);
                      }}
                      class="btn btn-success"
                    >
                      Add
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
export default ListRepositories;
