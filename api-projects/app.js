const catBtn = document.querySelector("#random-cat");
const catImg = document.querySelector("#cat-img");

let catApi = "https://cataas.com/cat";

catBtn.addEventListener("click", async () =>{
    try {
        let cat = await getCat();
        // let encoder = new JPEGEncoder(9);
        // let jpegFile = encoder.encode(cat, 9);
        // console.log(jpegFile);
    catImg.setAttribute("src", `${jpegFile}`);
    } catch (e){
        console.log(e);
    }
    
});

async function getCat(){
    try {
        let cat = await axios.get(catApi);
    return cat.data;
    } catch {
        return "Not found";
    }
};