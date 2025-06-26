
const InputArea = (props) => {
    return (
        <textarea onChange={props.handleChange} className="h-72 w-5/6 border-2 border-black outline-0 rounded-xl p-4 text-3xl">
        </textarea>
    )
}

export default InputArea;