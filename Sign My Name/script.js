const letter2Sign = {
    "A": "Alphabet videos/a_nm_1_1.mp4",
    "B": "Alphabet videos/b_alpha_1_1.mp4",
    "C": "Alphabet videos/c_alpha_1_1.mp4",
    "D": "Alphabet videos/d_nm_1_1.mp4",
    "E": "Alphabet videos/e_alpha_1_1.mp4",
    "F": "Alphabet videos/f_nm_1_1.mp4",
    "G": "Alphabet videos/g_nm_1_1.mp4",
    "H": "Alphabet videos/h_nm_1_1.mp4",
    "I": "Alphabet videos/i_nm_1_1.mp4",
    "J": "Alphabet videos/j_nm_1_1.mp4",
    "K": "Alphabet videos/k_nm_2_1.mp4",
    "L": "Alphabet videos/l_nm_1_1.mp4",
    "M": "Alphabet videos/m_alpha_1_1.mp4",
    "N": "Alphabet videos/n_nm_1_1.mp4",
    "O": "Alphabet videos/o_nm_1_1.mp4",
    "P": "Alphabet videos/p_nm_1_1.mp4",
    "Q": "Alphabet videos/q_nm_1_1.mp4",
    "R": "Alphabet videos/r_nm_1_1.mp4",
    "S": "Alphabet videos/s_nm_1_1.mp4",
    "T": "Alphabet videos/t_nm_1_1.mp4",
    "U": "Alphabet videos/u_nm_1_1.mp4",
    "V": "Alphabet videos/v_nm_1_1.mp4",
    "W": "Alphabet videos/w_nm_1_1.mp4",
    "X": "Alphabet videos/x_nm_1_1.mp4",
    "Y": "Alphabet videos/y_nm_1_1.mp4",
    "Z": "Alphabet videos/z_nm_1_1.mp4"
}

let signedName = [];
let videos = "";

function signMyName(name) {
    let spelledName = name.split("");
    signedName = spelledName.map(letter => letter2Sign[letter.toUpperCase()]);
    return signedName;
}

//console.log(signMyName("bertrand"));

function displaySign() {
    let name = document.getElementById("entered_name").value;
    console.log(name);
    signMyName(name);
    console.log("video path list :" + signedName);
    getVideos(signedName);
    console.log(videos);
    document.getElementById("LSFvideos").innerHTML = videos;
}


function getVideos(array) {
    for (let index = 0; index < array.length; index++) {
        let videopath = array[index];
        videos += `<video class="videos" src="${videopath}" controls></video>`;
    }
    return videos;
}

function mergeVideos(array){
    
}