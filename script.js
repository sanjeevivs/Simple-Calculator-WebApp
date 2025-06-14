const a = document.getElementById("input");

function appendValue(val) {
    a.value += val;
}

function clearInput() {
    a.value = '';
}

function deleteLast() {
    a.value = a.value.slice(0, -1);
}

function calculate() {
    try {
        a.value = eval(a.value);
    } catch {
        a.value = 'Error';
    }
}
