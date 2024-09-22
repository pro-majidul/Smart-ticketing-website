const selectSeatEL = document.getElementById('select-seat');
const totalSeat = document.getElementById('total-seat');
const seatBooking = document.getElementById('seat-booking');
const totalPrize = document.getElementById('total-prize');
const inputField = document.getElementById('input-field');
const inputBtn = document.getElementById('input-btn');
const defultText = document.getElementById('defult-text');

let totalTaka = 0;
let seatElement = [];




function selectSeat(event) {

    const values = event.innerText;
    if (seatElement.includes(values)) {
        alert('Seat already added')
        return
    }
    else if (seatElement.length < 4) {

        // button e click korle text color and bg color change hobe
        event.classList.add('bg-primary');
        event.classList.add('text-white');

        // jader click korbo taderke ekta array er vitor dhuke rakhbo and seoi array er length hobe kotola ticket e click kore kinteci 
        seatElement.push(event.innerText);
        seatBooking.innerText = seatElement.length;

        // total jei sitgulo ace seilatheke poti click e 1ta kore number delete kore dibo 
        const totalSitValue = parseInt(totalSeat.innerText);
        const remainingTotalSit = totalSitValue - 1;
        totalSeat.innerText = remainingTotalSit;


        //defult text delete kore dibo
        defultText.classList.add("hidden");

        //  button e click korle delete korbe no seat book and add korbe select button and taka and class ....eta jotobar click korbe totobar kaj korbe
        selectSeatEL.innerHTML += `<li class="flex justify-between items-center">
        <span>${event.innerText}</span>
        <span>Economic</span>
        <span>500</span>
        </li>
        `,


            // total amount money calculate
            totalTaka += 550;
        totalPrize.innerText = totalTaka.toFixed(2);

        // input field and button active
        if (seatElement.length > 3) {
            inputField.removeAttribute('disabled');
            inputBtn.removeAttribute('disabled')
        }
    }
    else {
        return alert("Maximum seat added")
    }


}

document.getElementById('input-btn')
    .addEventListener("click", function () {
        const totalPrizeEl = totalPrize.innerText;
        const totalPrizeValue = parseFloat(totalPrizeEl);

        let discount = 0;
        const InputFieldValue = inputField.value;
        if (InputFieldValue !== "NEW15" && InputFieldValue !=="Couple 20"){
            alert('Wrong Coopon Code')
            return

        }else if(InputFieldValue == "NEW15"){
          
             discount = totalPrizeValue * .15;
            const remainingTotal = totalPrizeValue - discount;
            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerText = remainingTotal;
        }
        else if(InputFieldValue == "Couple 20"){
            discount = totalPrizeValue * .20;
            const remainingTotal = totalPrizeValue - discount;
            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerText = remainingTotal;
        }
        const showDiscountCoopon = document.getElementById('coopon-discount');
        showDiscountCoopon.innerHTML = `
            <p>Discount</p>
            <p> <span> -BDT </span> <span> ${discount.toFixed(2)} </span></p>
        </p>`

    })
