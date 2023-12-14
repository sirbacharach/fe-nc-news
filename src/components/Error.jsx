const Error = (props) => {
    const {message} = props
    return (
        <div classname="error">
            <h2>An Error!</h2>
            <p>{message}</p>
        </div>
    )
};

export default Error;