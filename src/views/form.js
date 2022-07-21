import { useState } from "react"

const MakeManual = () => {

    const [user, setName] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [chapter1, setChapter1] = useState('')
    const [err, setErr] = useState('')
    //const [chapter2, setChapter2] = useState('')
    //const [chapter3, setChapter3] = useState('')
    const test = 1

    const onSubmit = async (e) => {
        e.preventDefault()
        if (user.length > 0 && title.length > 0 && chapter1.length > 0) {
            const manual = {user,category,title,chapter1}
            const sendData = await fetch('https://guarded-bayou-85189.herokuapp.com/make', {
            method: 'POST',
            body: JSON.stringify(manual),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            setErr('')
        } else {
            setErr('-> please supply data to fields <-')
        }
    }

    return (
        <div className="formStyle">
            <form onSubmit={onSubmit}>
                <div class="title">
                    <label className="LabelErr"> { err } </label>
                    <label className="Label">Enter your name </label>
                    <input className="input" type="text" id="title" name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={user}
                    />
                    <label className="Label">Enter your manuals title </label>
                    <input className="input" type="text" id="title" name="title" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <h4 className="Label"> choose category</h4>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                    > 
                        <option value="games"> games </option>
                        <option value="film"> movies </option>
                        <option value="websites"> websites </option>
                        <option value="software"> software </option>
                        <option value="computers"> computers </option>
                        <option value="internet"> internet </option>
                    </select>
                </div>
                <div class="description">
                    <label className="Label">chapter 1 data</label>
                    <textarea id="desc" name="desc" rows="4" cols="50"
                        onChange={(e) => setChapter1(e.target.value)}
                        value={chapter1}
                    ></textarea>
                </div>
                <button className="btn" >make</button>
            </form>
        </div>
    )
}

export default MakeManual