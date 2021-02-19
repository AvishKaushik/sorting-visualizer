import React , {Component} from 'react';
import MergeSorting from '../SortingAlgorithms/MergeSort.js';
import QuickSorting from '../SortingAlgorithms/QuickSort.js';
import BubbleSorting from '../SortingAlgorithms/BubbleSort.js';
import HeapSorting from '../SortingAlgorithms/HeapSort.js';
import RadixSorting from '../SortingAlgorithms/RadixSort.js';
import InsertionSorting from '../SortingAlgorithms/InsertionSort.js';
import SelectionSorting from '../SortingAlgorithms/SelectionSort.js';
import ShellSorting from '../SortingAlgorithms/ShellSort.js';
import CombSorting from '../SortingAlgorithms/CombSort.js';
import CycleSorting from '../SortingAlgorithms/CycleSort.js';
import PigeonholeSorting from '../SortingAlgorithms/PigeonholeSort.js';
import GnomeSorting from '../SortingAlgorithms/GnomeSort.js';
import BogoSorting from '../SortingAlgorithms/BogoSort.js';
import { Button, Slider} from '@material-ui/core';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './SortingVisualizer.css';


const marks = [
  {
    value: 2,
    label: 'Slow',
  },
  {
    value: 5,
    label: 'Medium',
  },
  {
    value: 8,
    label: 'Fast',
  },
];

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      abar: '25',
      time: '1200',
      speed: '5',
      disabled: false,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  checkAll() {
    const arrayBar=document.getElementsByClassName('array-bar');
    for(let i=0;i<arrayBar.length;++i)
    {
      const barStyle = arrayBar[i].style;
      setTimeout(() => {
      barStyle.backgroundColor = '#24C921';
      barStyle.color = 'rgba(0,0,0,1)';
      }, i*this.state.time/this.state.speed);
    }
    setTimeout(() => {
      this.state.array.sort(function(a, b){return a-b});
    this.setState({disabled: false});
      }, (this.state.time/this.state.speed) * (arrayBar.length));
  }

  resetArray() {
    const array = [];
    for ( let i=0;i<this.state.abar;i++) {
      array.push(randomIntFromInterval(40,580));
    }
    this.setState({array});
    this.setState({array});
    const arrayBar=document.getElementsByClassName('array-bar');
    for ( let i=0;i<array.length;i++) {
      if(!arrayBar[i])
      {
        continue;
      }
      else{
      const boStyle = arrayBar[i].style;
      boStyle.backgroundColor='#ffbf00';
      arrayBar[i].innerHTML=array[i];
      }
    }
    var vl=document.getElementById("x");
    vl.style.width=(((this.state.abar)*36)+80)+'px';
    console.log(array);
  }

  quickSort() {
    const ax=this.state.array.slice(0);
    const anim = QuickSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [bfidx,btidx,low,high] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const bsStyle = arrayBar[btidx].style;
        const lbStyle = arrayBar[high].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          arrayBar[bsidx].innerHTML=newHeight2;
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  shellSort() {
    const ax=this.state.array.slice(0);
    const anim = ShellSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [bfidx,btidx] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const bsStyle = arrayBar[btidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          boStyle.height = `${newHeight}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  combSort() {
    const ax=this.state.array.slice(0);
    const anim = CombSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [bfidx,btidx] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const bsStyle = arrayBar[btidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          arrayBar[bsidx].innerHTML=newHeight2;
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
    console.log(anim);
  }

  cycleSort() {
    const ax=this.state.array.slice(0);
    const anim = CycleSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [bfidx,btidx] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const bsStyle = arrayBar[btidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          arrayBar[bsidx].innerHTML=newHeight2;
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
    console.log(anim);
  }

  heapSort() {
    const ax=this.state.array.slice(0);
    const anim = HeapSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          arrayBar[bsidx].innerHTML=newHeight2;
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  radixSort() {
    const ax=this.state.array.slice(0);
    const anim = RadixSorting(ax);
    let fx=0,sx=0;
    let o=0;
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(fx<(this.state.array.length*2))
      {
        const [boidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const color = i % 2 === (o%2) ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
        fx++;
      }
      else if(sx<this.state.array.length)
      {
        const [boidx,newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          boStyle.height = `${newHeight}px`;
        }, i*this.state.time/this.state.speed);
        sx++;
        o++;
      }
      else {
        fx=1;
        sx=0;
        const [boidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const color = i % 2 === (o%2) ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  selectionSort() {
    const ax=this.state.array.slice(0);
    const anim = SelectionSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          arrayBar[bsidx].innerHTML=newHeight2;
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }


  mergeSort() {
    const ax=this.state.array.slice(0);
    const anim = MergeSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          boStyle.height = `${newHeight}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  insertionSort() {
    const ax=this.state.array.slice(0);
    const anim = InsertionSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          boStyle.height = `${newHeight}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  gnomeSort() {
    const ax=this.state.array.slice(0);
    const anim = GnomeSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          arrayBar[bsidx].innerHTML=newHeight2;
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  bogoSort() {
    const ax=this.state.array.slice(0);
    const anim = BogoSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          arrayBar[bsidx].innerHTML=newHeight2;
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
    console.log(anim);
  }

  bubbleSort() {
    const ax=this.state.array.slice(0);
    const anim = BubbleSorting(ax);
    for(let i=0;i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if(i % 3 !== 2)
      {
        const [bfidx,btidx] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const bsStyle = arrayBar[btidx].style;
        const color = i % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          arrayBar[bsidx].innerHTML=newHeight2;
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  pigeonholeSort() {
    const ax=this.state.array.slice(0);
    const anim = PigeonholeSorting(ax);
    let arr=this.state.array;
    for(let i=0;i<(2*arr.length);i++)
    {
      const arrayBar1=document.getElementsByClassName('array-bar');
      const [bfidx] = anim[i];
      const boStyle = arrayBar1[bfidx].style;
      const color = i % 2 === 0 ? '#19D9FD':'#ffbf00';
      setTimeout(() => {
        boStyle.backgroundColor = color;
      }, i*this.state.time/this.state.speed);
    }
    for(let i=(arr.length*2);i<=anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i==anim.length)
      {
        setTimeout(() => {
          this.checkAll();
        }, i*this.state.time/this.state.speed);
      }
      else if((i-(arr.length*2)) % 3 !== 2)
      {
        const [bfidx] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const color = (i-arr.length*2) % 3 === 0 ? '#19D9FD':'#ffbf00';
        setTimeout(() => {
          boStyle.backgroundColor = color;
        }, i*this.state.time/this.state.speed);
      }
      else
      {
        const [boidx,newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML=newHeight;
          boStyle.height = `${newHeight}px`;
        }, i*this.state.time/this.state.speed);
      }
    }
  }

  startSorting() {
    this.setState({disabled: !this.state.disabled});
    if(this.refs.sortingType.value == "HeapSort") {
      this.heapSort();
    }
    if(this.refs.sortingType.value == "BubbleSort") {
      this.bubbleSort();
    }
    if(this.refs.sortingType.value == "MergeSort") {
      this.mergeSort();
    }
    if(this.refs.sortingType.value == "QuickSort") {
      this.quickSort();
    }
    if(this.refs.sortingType.value == "InsertionSort") {
      this.insertionSort();
    }
    if(this.refs.sortingType.value == "SelectionSort") {
      this.selectionSort();
    }
    if(this.refs.sortingType.value == "RadixSort") {
      this.radixSort();
    }
    if(this.refs.sortingType.value == "ShellSort") {
      this.shellSort();
    }
    if(this.refs.sortingType.value == "CombSort") {
      this.combSort();
    }
    if(this.refs.sortingType.value == "CycleSort") {
      this.cycleSort();
    }
    if(this.refs.sortingType.value == "PigeonholeSort") {
      this.pigeonholeSort();
    }
    if(this.refs.sortingType.value == "GnomeSort") {
      this.gnomeSort();
    }
    /*if(this.refs.sortingType.value == "BogoSort") {
    this.bogoSort();
  }*/
}


render() {
  const {array} = this.state;

  const handleChange = (event, newValue) => {
    console.log(event);
    this.state.abar=newValue;
    this.setState();
    this.resetArray();
  };

  const speedChange = (e, newValue) => {
    console.log(e);
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.state.speed=newValue;
    this.setState(e);
  };

  return (
    <div>
    <div>
    <Button onClick={()=>this.resetArray()}  disabled={this.state.disabled} id="btn1">Generate a new array</Button>
    <select className="browser-default custom-select" ref="sortingType" id="btn5"  disabled={this.state.disabled} onChange={()=>this.resetArray()}>
    <option value="BubbleSort">Bubble Sort</option>
    <option value="CombSort">Comb Sort</option>
    <option value="CycleSort">Cycle Sort</option>
    <option value="GnomeSort">Gnome Sort</option>
    <option value="HeapSort">Heap Sort</option>
    <option value="InsertionSort">Insertion Sort</option>
    <option value="MergeSort">Merge Sort</option>
    <option value="PigeonholeSort">Pigeonhole Sort</option>
    <option value="QuickSort">Quick Sort</option>
    <option value="RadixSort">Radix Sort</option>
    <option value="SelectionSort">Selection Sort</option>
    <option value="ShellSort">Shell Sort</option>
    </select>
    <a>Array Bar:</a>
    <Slider
            value={this.state.abar}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="on"
            min={4}
            max={40}
            id="slid1"
            valueLabelDisplay="auto"
            disabled={this.state.disabled}
          />
    <a>Speed:</a>
    <Slider
            value={this.state.speed}
            onChange={speedChange}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="off"
            min={1}
            max={10}
            id="slid2"
            marks={marks}
            disabled={this.state.disabled}
          />
    <Button  disabled={this.state.disabled} onClick={()=>this.startSorting()} id="btn2">Run Sorting</Button>
    <hr></hr>
    </div>
    <div className="array-container" id="x">
    <div className="tb"></div>
    {array.map((value, idx) => (
      <div
      className="array-bar"
      key={idx}
      style={{height: `${value}px`}}><p>{value}</p></div>
    ))}
    </div>
    <div className="arrangement">
    <hr></hr>
    </div>
    </div>
  );
}
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}
