export async function uploadImage(imgObj) {
    await fetch("http://localhost:3000/upload", {
        method: 'POST',
        body: imgObj
    })
    return window.location.reload()
    // .catch((err) => ("Error occured", err))
}