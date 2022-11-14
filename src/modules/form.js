const form = () => {
    return `
    <div class="form-group mb-2 offset-4 col-4">
    <input type="text" placeholder="Enter movie name" class="form-control term">
</div>
<button type="submit" class="btn btn-primary mt-2 mb-4 col-2"> Find my movie</button>
<div class="form-group mb-2">
    Title
    <input type="text" class="form-control resultTitle" readonly>
</div>
<div class ="row">
<div class="col-3">
    <div class="">
        Release date
        <input type="box" class="form-control resultRelease" readonly>
    </div>
    <div class="">
        Runtime
        <input type="box" class="form-control resultRuntime" readonly>
    </div>
    <div class="">
        Genre
        <input type="box" class="form-control resultGenre" readonly>
    
    </div>
    </div>

<div class="col">
<img id="poster" class="img-thumbnail resultPoster" src="">
</div>
</div>
<div class="mt-4"><h3>Full details:</h3></div>
<div class="row resultFull"></div>

    `
}

export default form