import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom"

function BreadCrumbs() {
    const location = useLocation();

    const pathSnippets = location.pathname.split("/").filter((i) => i);

    const items = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return {
            title: <Link to={url}>{pathSnippets[index]}</Link>,
        };
    });
    return (
        <Breadcrumb items={items} />
    )
}

export default BreadCrumbs