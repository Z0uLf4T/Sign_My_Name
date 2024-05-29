// recuperer les valeurs entrees en input
//convertir en metre la taille entree en centimetre avant de la mettre en paramètre du calculator
// valeurs de controle

// let bMI
// let bMICategories = ""

function calculatebMI(weight,height) {
    bMI = (weight / (height * height)).toFixed(2)
    return bMI
}

function findbMIcategories(bMI) {
    let bMICategories;
    if (bMI < 16) {
        bMICategories = "Underweight (Severe thinness)"
    } else if (bMI >= 16 && bMI <= 16.9) {
        bMICategories = "Underweight (Moderate thinness)"
    } else if (bMI >= 17 && bMI <= 18.4) {
        bMICategories = "Underweight (Mild thinness)"
    } else if (bMI >= 18.5 && bMI <= 24.9) {
            bMICategories = "Normal range"
    } else if (bMI >= 25.0 && bMI <= 29.9) {
            bMICategories = "Overweight (Pre-obese)"
    } else if (bMI >= 30.0 && bMI <= 34.9) {
            bMICategories = "Obese (Class I)"
    } else if (bMI >= 35.0 && bMI <= 39.9) {
            bMICategories = "Obese (Class II)"
    } else if (bMI >= 40){
        bMICategories = "Obese (Class III)"
    }
    return bMICategories
}

document.getElementById("submitButton").addEventListener("click", () => {
    let height = document.getElementById("height").value / 100
    console.log(height)
    let weight = document.getElementById("weight").value
    console.log(weight)
    let bMI = calculatebMI(weight, height)
    console.log(bMI)
    let bMICategories = findbMIcategories(bMI)
    console.log(bMICategories)
    document.getElementById("BMI-result").innerHTML = `Your height: ${height} meters<br>Your weight: ${weight} Kg<br>You BMI is ${bMI}`
    document.getElementById("BMI-category").innerHTML = `You BMI category is ${bMICategories}`
    document.getElementById("height").innerText=""
    document.getElementById("weight").innerText=""
})



//console.log(calculatebMI(weight,height))


// function findbMIcategories(bMI) {
//     if (bMI < 16) {
//         bMICategories = "Underweight (Severe thinness)"
//     } else if (bMI >= 16 && bMI <= 16.9) {
//         bMICategories = "Underweight (Moderate thinness)"
//     } else if (bMI >= 17 && bMI <= 18.4) {
//         bMICategories = "Underweight (Mild thinness)"
//     } else if (bMI >= 18.5 && bMI <= 24.9) {
//             bMICategories = "Normal range"
//     } else if (bMI >= 25.0 && bMI <= 29.9) {
//             bMICategories = "Overweight (Pre-obese)"
//     } else if (bMI >= 30.0 && bMI <= 34.9) {
//             bMICategories = "Obese (Class I)"
//     } else if (bMI >= 35.0 && bMI <= 39.9) {
//             bMICategories = "Obese (Class II)"
//     } else if (bMI >= 40){
//         bMICategories = "Obese (Class III)"
//     }
//     return bMICategories
// }
