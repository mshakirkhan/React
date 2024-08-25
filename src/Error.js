import { useRouteError } from "react-router-dom"

const Error = () => {
    const errors = useRouteError();
  return (
    <>
        <div>Error Code: { errors.status }</div>
        <div>Error Code: { errors.statusText }</div>
    </>
  )
}

export default Error