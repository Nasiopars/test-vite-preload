import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>ERROR 404</h1>
            <p>!صفحه پیدا نشد!</p>
            <div className="flexGrow">
                <Link to="/">مشاهده صفحه خانه</Link>
            </div>
        </article>
    )
}

export default Missing