const HTML = document.querySelector('#Agung-Container');

const AgungHeading1 = document.createElement('h1');
AgungHeading1.textContent = 'Listrik Dasar';
AgungHeading1.className = 'Agung-Heading1';
HTML.appendChild(AgungHeading1)


const AgungHeading3 = document.createElement('h3');
AgungHeading3.textContent = 'JavaScript Agung Hendi Temorubun';
AgungHeading3.className = 'Agung-Heading3';
HTML.appendChild(AgungHeading3)


const AgungHeading2 = document.createElement('h2');
AgungHeading2.textContent = 'Materi Hukum Ohm';
AgungHeading2.className = 'Agung-Heading2';
HTML.appendChild(AgungHeading2)


const Agungheading3 = document.createElement('h3');
Agungheading3.textContent = 'Rumus Mencari Kuat Arus';
Agungheading3.className = 'Agung-heading3';
HTML.appendChild(Agungheading3)


const AgungLabelVolt = document.createElement('label');
AgungLabelVolt.textContent = 'Tegangan (V)';
AgungLabelVolt.className = 'AgungLabelVolt';
HTML.appendChild(AgungLabelVolt)


const AgungInputVolt = document.createElement('input');
AgungInputVolt.className = 'AgungInputVolt';
AgungInputVolt.type = 'number';
AgungInputVolt.placeholder = 'Masukan Nilai Volt';
HTML.appendChild(AgungInputVolt)


const AgungBR1 = document.createElement('br');
HTML.appendChild(AgungBR1)
const AgungBR2 = document.createElement('br');
HTML.appendChild(AgungBR2)


const AgungLabelHambatan = document.createElement('label');
AgungLabelHambatan.textContent = 'Hambatan (R)';
AgungLabelHambatan.className = 'AgungLabelHambatan';
HTML.appendChild(AgungLabelHambatan)


const AgungInputHambatan = document.createElement('input');
AgungInputHambatan.className = 'AgungInputHambatan';
AgungInputHambatan.type = 'number'
AgungInputHambatan.placeholder = 'Masukan Nilai Hambatan';
HTML.appendChild(AgungInputHambatan)


const AgungBR3 = document.createElement('br');
HTML.appendChild(AgungBR3)
const AgungBR4 = document.createElement('br');
HTML.appendChild(AgungBR4)


const AgungHasilArus = document.createElement('button');
AgungHasilArus.textContent = 'Hasil Kuat Arus';
AgungHasilArus.className = 'AgungHasilArus';
HTML.appendChild(AgungHasilArus)


const AgungArus = document.createElement('div');
AgungArus.textContent = '';
AgungArus.className = 'AgungArus';
HTML.appendChild(AgungArus)


AgungHasilArus.addEventListener('click', function(){

    let V = AgungInputVolt.value
    let R = AgungInputHambatan.value
    let I = V / R

    AgungArus.innerHTML = 
    `Maka Diketahui 

    <br><br>

    Volt   = ${V}(V)

    <br><br>

    Resistor/Hambatan = ${R}(Ohm)

    <br><br>

    Ditanyakan Kuat Arus =..?(A)

    <br><br>

    Rumus 
        I = V / R
    
    <br><br>

    Hasilnya Adalah ${I}(A) `

})


const AgungHR1 = document.createElement('hr');
AgungHR1.className = 'AgungHR-1'
HTML.appendChild(AgungHR1)

const Agungh3 = document.createElement('h3');
Agungh3.textContent = 'Rumus Mencari Tegangan (V)';
Agungh3.className = 'Agung-h3';
HTML.appendChild(Agungh3)

const AgungLabelArus = document.createElement('label');
AgungLabelArus.textContent = ' Kuat Arus (I)';
AgungLabelArus.className = 'AgungLabelArus';
HTML.appendChild(AgungLabelArus)


const AgungInputArus = document.createElement('input');
AgungInputArus.className = 'AgungInputArus';
AgungInputArus.type = 'number';
AgungInputArus.placeholder = 'Masukan Nilai Arus';
HTML.appendChild(AgungInputArus)


const AgungBR5 = document.createElement('br');
HTML.appendChild(AgungBR5)
const AgungBR6 = document.createElement('br');
HTML.appendChild(AgungBR6)


const AgungLabelhambatan = document.createElement('label');
AgungLabelhambatan.textContent = 'Hambatan (R)';
AgungLabelhambatan.className = 'AgungLabelHambatan';
HTML.appendChild(AgungLabelhambatan)


const AgungInputhambatan = document.createElement('input');
AgungInputhambatan.className = 'AgungInputHambatan';
AgungInputhambatan.type = 'number'
AgungInputhambatan.placeholder = 'Masukan Nilai Hambatan';
HTML.appendChild(AgungInputhambatan)


const AgungBR7 = document.createElement('br');
HTML.appendChild(AgungBR7)
const AgungBR8 = document.createElement('br');
HTML.appendChild(AgungBR8)


const AgungHasilTegangan = document.createElement('button');
AgungHasilTegangan.textContent = 'Hasil Tegangan';
AgungHasilTegangan.className = 'AgungHasilTegangan';
HTML.appendChild(AgungHasilTegangan)


const AgungTegangan = document.createElement('div');
AgungTegangan.textContent = '';
AgungTegangan.className = 'AgungTegangan';
HTML.appendChild(AgungTegangan)


AgungHasilTegangan.addEventListener('click', function(){

    let I = AgungInputArus.value
    let R = AgungInputhambatan.value
    let V = I * R

    AgungTegangan.innerHTML = 
    `Maka Diketahui 

    <br><br>

    Kuat Arus   = ${I}(A)

    <br><br>

    Resistor/Hambatan = ${R}(Ohm)

    <br><br>

    Ditanyakan Tegangan =..?(V)

    <br><br>

    Rumus 
        V = I x R
    
    <br><br>

    Hasilnya Adalah ${V}(V) `

})


const AgungHR2 = document.createElement('hr');
AgungHR2.className = 'AgungHR-2'
HTML.appendChild(AgungHR2)

const AgungH3 = document.createElement('h3');
AgungH3.textContent = 'Rumus Mencari Hambatan (R)';
AgungH3.className = 'Agung-H3';
HTML.appendChild(AgungH3)


const AgungLabelTegangan = document.createElement('label');
AgungLabelTegangan.textContent = 'Tegangan (V)';
AgungLabelTegangan.className = 'AgungLabelTegangan';
HTML.appendChild(AgungLabelTegangan)


const AgungInputTegangan = document.createElement('input');
AgungInputTegangan.className = 'AgungInputTegangan';
AgungInputTegangan.type = 'number';
AgungInputTegangan.placeholder = 'Masukan Nilai Volt';
HTML.appendChild(AgungInputTegangan)


const AgungBR9 = document.createElement('br');
HTML.appendChild(AgungBR9)
const AgungBR10 = document.createElement('br');
HTML.appendChild(AgungBR10)


const AgungLabelarus = document.createElement('label');
AgungLabelarus.textContent = ' Kuat Arus (I)';
AgungLabelarus.className = 'AgungLabelArus';
HTML.appendChild(AgungLabelarus)


const AgungInputarus = document.createElement('input');
AgungInputarus.className = 'AgungInputArus';
AgungInputarus.type = 'number';
AgungInputarus.placeholder = 'Masukan Nilai Arus';
HTML.appendChild(AgungInputarus)


const AgungBR11 = document.createElement('br');
HTML.appendChild(AgungBR11)
const AgungBR12 = document.createElement('br');
HTML.appendChild(AgungBR12)


const AgungHasilHambatan = document.createElement('button');
AgungHasilHambatan.textContent = 'Hasil Hambatan';
AgungHasilHambatan.className = 'AgungHasilTegangan';
HTML.appendChild(AgungHasilHambatan)


const AgungHambatan = document.createElement('div');
AgungHambatan.textContent = '';
AgungHambatan.className = 'AgungTegangan';
HTML.appendChild(AgungHambatan)


AgungHasilHambatan.addEventListener('click', function(){

    let V = AgungInputTegangan.value
    let I = AgungInputarus.value
    let R = V / I

    AgungHambatan.innerHTML = 
    `Maka Diketahui 

    <br><br>

    Tegangan   = ${V}(V) 

    <br><br>

    Kuat Arus  = ${I}(A)

    <br><br>

    Ditanyakan Tegangan =..?(R)

    <br><br>

    Rumus 
        R = V / I
    
    <br><br>

    Hasilnya Adalah ${R}(Ohm) `

})


const AgungHR3 = document.createElement('hr');
AgungHR3.className = 'AgungHR-3'
HTML.appendChild(AgungHR3)


const CoppyRaight = document.createElement('p');
CoppyRaight.textContent = 'CoppyRaight Agung Hendi Temorubun 2022';
CoppyRaight.ClassName ='CoppyRaight';
HTML.appendChild(CoppyRaight)