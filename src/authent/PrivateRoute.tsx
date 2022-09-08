import { IndexRouteProps, LayoutRouteProps, PathRouteProps, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export const PrivateRout = (props: JSX.IntrinsicAttributes & (PathRouteProps | LayoutRouteProps | IndexRouteProps)) => {
  const user = null;
  const navigate = useNavigate();

  // if (!user) return <Redirect to="/login" />
  if (!user) navigate("/login")

  return <Route {...props} />

}