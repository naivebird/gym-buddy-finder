import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ViewUser.css";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

export default function ViewUser() {
  const { id } = useParams();

  let navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    email: "",
    role: "",
    lastLogin: "",
    updatedAt: "",
  });

  const loadUser = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [id]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const deleteUser = async (id) => {
    const result = await axios.delete(
      `http://localhost:8080/api/v1/user/delete?id=${id}`
    );
    alert(result.data + " : " + id);
    navigate("/");
  };
  const suspendUser = async (id) => {
    const result = await axios.put(
      `http://localhost:8080/api/v1/user/suspend?id=${id}`
    );
    alert(result.data + " : " + id);
    // navigate("/")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 boarder rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> User Details </h2>
          <div className="card ">
            <div className="card-header mx-3">
              Details of user
              <ul className="list-group list-group-flush mx-3">
                <li className="list-group-item d-flex">
                  <span className="label">
                    <b>ID</b>
                  </span>
                  <span className="value">: {user.id}</span>
                </li>
                <li className="list-group-item d-flex">
                  <span className="label">
                    <b>E-mail</b>
                  </span>
                  <span className="value">: {user.email}</span>
                </li>
                <li className="list-group-item d-flex">
                  <span className="label">
                    <b>Role</b>
                  </span>
                  <span className="value">: {user.role}</span>
                </li>
                <li className="list-group-item d-flex">
                  <span className="label">
                    <b>Last Login </b>
                  </span>
                  <span className="value">: {user.lastLogin}</span>
                </li>
                <li className="list-group-item d-flex">
                  <span className="label">
                    <b>Created at</b>
                  </span>
                  <span className="value">: {user.createdAt}</span>
                </li>
                <li className="list-group-item d-flex">
                  <span className="label">
                    <b>Updated at</b>
                  </span>
                  <span className="value">: {user.updatedAt}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-set">
            <Link className="btn btn-primary my-2" to={"/"}>
              Go Back
            </Link>
            <button
              className="btn btn-primary mx-2"
              onClick={() => suspendUser(user.id)}
            >
              Suspend User
            </button>

            <button
              className="btn btn-danger mx-4"
              onClick={() => deleteUser(user.id)}
            >
              <DeleteIcon sx={{ fontSize: 20 }} /> Delete User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
