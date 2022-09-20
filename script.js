let upper = document.getElementById('upper')
let lower = document.getElementById('lower')
let numbers = document.getElementById('numbers')
let teste = document.getElementById('teste')
let submit = document.getElementById('submit')
let bar = document.getElementById('bar')

let password
submit.onclick = function () {
    password = ''
    let numbers1 = '12345678910'
    let upper1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower1 = 'abcdefghijklmnopqrstuvwxyz'
    let synbols1 = '%$!@#)*&¨%$'
    let tam = parseInt(bar.value)
    let i = 0

    while (tam > i) {
        if (upper.checked) {
            password += upper1.charAt(Math.floor(Math.random() * (upper1.length)))
            i += 1
        }
        if (lower.checked) {
            password += lower1.charAt(Math.floor(Math.random() * (lower1.length)))
            i += 1
        }
        if (numbers.checked) {
            password += numbers1.charAt(Math.floor(Math.random() * (numbers1.length)))
            i += 1
        }
        if (teste.checked) {
            password += synbols1.charAt(Math.floor(Math.random() * (synbols1.length)))
            i += 1
        }
    }

    let count = 0
    if(upper.checked) count+=1
    if(lower.checked) count+=1
    if(numbers.checked) count+=1
    if(teste.checked) count+=1
    
    
    if(count === 1) document.getElementById('status').textContent = 'fraca'
    if(count === 2) document.getElementById('status').textContent = 'media'
    if(count === 3) document.getElementById('status').textContent = 'forte'
    if(count === 4) document.getElementById('status').textContent = 'muito forte'
    document.getElementById("senha").textContent = password
}
