let buttons = Array.from(document.getElementsByClassName('operation'));
let input = []
buttons.forEach(button => {
    button.addEventListener('click', () => {
        input.push(button.innerText);
        document.getElementsByClassName('input')[0].innerText = input.join('');
        document.getElementById('display').scrollLeft = document.getElementById('display').scrollWidth;

    });
});
backspace.addEventListener('click' , () =>{
    input = input.join('').split('');
    input.pop();
    document.getElementsByClassName('input')[0].innerText = input.join('');
});
allClear.addEventListener('click' , () =>{
    input = [];
    document.getElementsByClassName('input')[0].innerText = input.join('');
});
function calculate(input) {
  try {
    const result = eval(input);
    return result;
  } catch (error) {
    return 'Error';
  }
}
answer.addEventListener('click', () => {
    const result = calculate(input.join(''));
    input = [result];
    document.getElementsByClassName('input')[0].innerText = input.join('');
});