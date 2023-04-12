function display(val){

    document.getElementById('result').value += val

    return val

}
function evaluateExp()
{
n=result.value
result.value=eval(n)

}

function allClear()
{
    result.value=""
}
function backSpace()
{
    s=result.value
    result.value=s.slice(0,-1)
}
