import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Service = ({ service }) => {
  const { setFilter } = useContext(AuthContext);

  const { data: products } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const navigate = useNavigate();

  const Submit = (_id) => {
    setFilter(_id);
    navigate(`/product-card`);

    // console.log(id)
  };

  const { name, description, img, button } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

        <button className="btn btn-outline" onClick={() => Submit(button)}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default Service;