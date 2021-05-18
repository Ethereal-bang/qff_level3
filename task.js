const addBtns = document.getElementById('add-btns');
const delBtns = document.getElementById('del-btns');
let dataInput = document.getElementById('data-input');
const randomBtn = document.getElementById('ran');
const sortBtn = document.getElementById('sort');
const view = document.getElementById('view');

let dataArr = [];

function init() {
    addBtns.addEventListener("click", (Event) => {
        const num = receiveInput();    
        console.log(Event.target)
    
        if (!num) { 
            return;     // 避免后面操作中将非合法数据存入数组
        }
        addNum(Event.target, num);
        console.log(dataArr);
        render(dataArr);
    
    })
        
    delBtns.addEventListener("click", (Event) => {
        console.log(Event.target)
        delNum(Event.target);
        console.log(dataArr);
        render(dataArr);
    });

    sortBtn.addEventListener("click", () => {
        if (dataArr == []) { // 为啥 !dataArr 不行
            alert('请输入数据！');
        }
        console.log(dataArr);
        bubble(dataArr);

        
    });

    randomBtn.addEventListener("click", () => {dataArr = random()});

}

// 接收输入数据，合法数据则返回
function receiveInput() {   
    let num = dataInput.value.trim();
    dataInput.value = '';   // 清空输入框

    // 判断是否合法数据
    if (!num.match(/^\d+$/)) {
        alert('请输入数字!');
        return;
    }   
    if(Number(num) < 10 || Number(num) > 100) {
        alert("请输入10-100以内的数字");
        return;
    }
    if(dataArr.length >= 50) {
    	alert("最多添加 50 个数据！");
    	return;
    }
	
    return num; 
}

function addNum(target, num) {
    switch (target.id) {
        case 'left-in':
            dataArr.unshift(num); 
            break;   
        case 'right-in':
            dataArr.push(num);
            break;   
    }
}
function delNum(target) {
    switch (target.id) {
        case 'left-out':
            dataArr.shift();
            break;
        case 'right-out':
            dataArr.pop();
            break;
    }
}

function random(){
	let arr = [];
	for (let i = 0; i < 50; i++) {
 		arr[i] = Math.floor(Math.random() * (100-10) + 10);	
	}
    
    render(dataArr);
	return arr;
}

function bubble(arr) {
    console.log("start sorting")
    let tempArr = [];

    for (let i = 0; i < arr.length-1; i++) {
        console.log(tempArr)
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j] < arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];    // 解构赋值实现两数交换
                
                tempArr.push(arr);
            }      
        }
    }

    let intervalId = setInterval('visibleRender(tempArr)', 200);
}

function render(arr) {
    let textValue = '';

    for (let i = 0; i < arr.length; i++) {
        textValue += `<div style="height: ${5 * arr[i]}px"></div>` 
    }

    view.innerHTML = textValue;
}

function visibleRender(arr) {
    if (!arr[0]) {
        clearInterval(intervalId);
    } else {    // 渲染一个状态后在数组删除这个状态
        render(arr[0]);
        arr.shift();          
    }    
}

init();
