const MakeManual = () => {
    return (
        <div className="formStyle">
            <form>
                <div class="title">
                    <label className="Label">Enter your manuals title: </label>
                    <input type="text" id="title" name="title" />
                </div>
                <div class="description">
                    <label className="Label">Enter the text for your manual</label>
                    <textarea id="desc" name="desc" rows="4" cols="50"></textarea>
                </div>
            </form>
        </div>
    )
}

export default MakeManual