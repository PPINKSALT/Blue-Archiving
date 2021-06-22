let nowIndex = 1;

const imageSlider = document.querySelector('#imgSlider');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');
const bottomBtn04 = document.querySelector('#imgTo4');
const bottomBtn05 = document.querySelector('#imgTo5');
const bottomBtn06 = document.querySelector('#imgTo6');
const bottomBtn07 = document.querySelector('#imgTo7');
const bottomBtn08 = document.querySelector('#imgTo8');
const bottomBtn09 = document.querySelector('#imgTo9');
const bottomBtn10 = document.querySelector('#imgTo10');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

buttomBtn01.addEventListener('click', moveA);
buttomBtn02.addEventListener('click', moveB);
buttomBtn03.addEventListener('click', moveC);
buttomBtn04.addEventListener('click', moveD);
buttomBtn05.addEventListener('click', moveE);
buttomBtn06.addEventListener('click', moveF);
buttomBtn07.addEventListener('click', moveG);
buttomBtn08.addEventListener('click', moveH);
buttomBtn09.addEventListener('click', moveI);
buttomBtn010.addEventListener('click', moveJ);

/*첫번째 이미지로 넘어간다.*/
function moveA()
{
    imageSlider.style.transform = 'transtlate(0px)';
    nowIndex =1;
}
/*두번째 이미지로 넘어간다.*/
function moveB()
{
    imageSlider.style.transform = 'transtlate(-700px)';
    nowIndex =2;
}
/*세번째 이미지로 넘어간다.*/
function moveC()
{
    imageSlider.style.transform  = 'transtlate(-1400px)';
    nowIndex =3;
}
/*네번째 이미지로 넘어간다.*/
function moveD()
{
    imageSlider.style.transform  = 'transtlate(-2100px)';
    nowIndex =4;
} 
/*다섯번째 이미지로 넘어간다.*/
function moveE()
{
    imageSlider.style.transform  = 'transtlate(-2800px)';
    nowIndex =5;
}
/*여섯번째 이미지로 넘어간다.*/
function moveF()
{
    imageSlider.style.transform  = 'transtlate(-3500px)';
    nowIndex =6;
}
/*일곱번째 이미지로 넘어간다.*/
function moveG()
{
    imageSlider.style.transform  = 'transtlate(-4800px)';
    nowIndex =7;
}
/*덟번째 이미지로 넘어간다.*/
function moveH()
{
    imageSlider.style.transform  = 'transtlate(-4900px)';
    nowIndex =8;
}
/*아홉번째 이미지로 넘어간다.*/
function moveI()
{
    imageSlider.style.transform  = 'transtlate(-5600px)';
    nowIndex =9;
}
/*열번째 이미지로 넘어간다.*/
function moveJ()
{
    imageSlider.style.transform  = 'transtlate(-6300px)';
    nowIndex =10;
}





/*이전 이미지로 이동합니다.*/
function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex == 1;
    }
    else
    {
        nowIndex --;
    }
    moveSlider(nowIndex);
}
/*다음 이미지로 이동합니다.*/
function moveRight()
{
    if(nowIndex == 10)
    {
        nowIndex == 10;
    }
    eles
    {
        nowIndex ++;
    }
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
        case 4:
            moveD();
        break;
        case 5:
            moveE();
        break;
        case 6:
            moveF();
        break;
        case 7:
            moveG();
        break;
        case 8:
            moveH();
        break;
        case 9:
            moveI();
        break;
        case 10:
            moveJ();
        break;
    
    
    
    }
}