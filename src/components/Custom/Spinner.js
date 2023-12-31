
export default function Spinner({ className }) {

    return (
        <div className={"spinner " + (className ? className : "")}>
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
    )
}