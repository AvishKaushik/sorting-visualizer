import React , {Component} from 'react';
import './SortingVisualizer.css';
import MergeSorting from '../SortingAlgorithms/MergeSort.js';
import QuickSorting from '../SortingAlgorithms/QuickSort.js';
import BubbleSorting from '../SortingAlgorithms/BubbleSort.js';
import HeapSorting from '../SortingAlgorithms/HeapSort.js';
import RadixSorting from '../SortingAlgorithms/RadixSort.js';
import InsertionSorting from '../SortingAlgorithms/InsertionSort.js';
import SelectionSorting from '../SortingAlgorithms/SelectionSort.js';


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for ( let i=0;i<310;i++) {
      array.push(randomIntFromInterval(5,650));
    }
    this.setState({array});
  }

  quickSort() {
    const anim = QuickSorting(this.state.array);
    for(let i=0;i<anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i % 3 !== 2)
      {
        const [bfidx,btidx,low,high] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const bsStyle = arrayBar[btidx].style;
        const lbStyle = arrayBar[high].style;
        const color = i % 3 === 0 ? 'red':'cyan';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*2);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*2);
      }
    }
  }

  heapSort() {
    const anim = HeapSorting(this.state.array);
    for(let i=0;i<anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? 'red':'cyan';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*2);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*2);
      }
    }
  }

  radixSort() {
    const arrlen = this.state.array;
    const anim = RadixSorting(this.state.array);
    let fx=0,sx=0;
    for(let i=0;i<anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(fx<(this.state.array.length*2))
      {
        const [boidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const color = i % 2 === 0 ? 'red':'cyan';
        setTimeout(() => {
          boStyle.backgroundColor = color;
        }, i*4);
        fx++;
      }
      else if(sx<this.state.array.length)
      {
        const [boidx,newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          boStyle.height = `${newHeight}px`;
        }, i*4);
        sx++;
      }
      else {
        fx=1;
        sx=0;
        const [boidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const color = i % 2 === 0 ? 'red':'cyan';
        setTimeout(() => {
          boStyle.backgroundColor = color;
        }, i*4);
      }
    }
  }

  selectionSort() {
    const anim = SelectionSorting(this.state.array);
    for(let i=0;i<anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? 'red':'cyan';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*2);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*2);
      }
    }
  }


  mergeSort() {
    const anim = MergeSorting(this.state.array);
    for(let i=0;i<anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? 'red':'cyan';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*2);
      }
      else
      {
        const [boidx,newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          boStyle.height = `${newHeight}px`;
        }, i*2);
      }
    }
  }

  insertionSort() {
    const anim = InsertionSorting(this.state.array);
    for(let i=0;i<anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i % 3 !== 2)
      {
        const [boidx,bsidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        const color = i % 3 === 0 ? 'red':'cyan';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*0.2);
      }
      else
      {
        const [boidx,newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          boStyle.height = `${newHeight}px`;
        }, i*0.2);
      }
    }
  }

  bubbleSort() {
    const anim = BubbleSorting(this.state.array);
    for(let i=0;i<anim.length;i++)
    {
      const arrayBar=document.getElementsByClassName('array-bar');
      if(i % 3 !== 2)
      {
        const [bfidx,btidx] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const bsStyle = arrayBar[btidx].style;
        const color = i % 3 === 0 ? 'red':'cyan';
        setTimeout(() => {
          boStyle.backgroundColor = color;
          bsStyle.backgroundColor = color;
        }, i*0.4);
      }
      else
      {
        const [boidx,newHeight,bsidx,newHeight2] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const bsStyle = arrayBar[bsidx].style;
        setTimeout(() => {
          boStyle.height = `${newHeight}px`;
          bsStyle.height = `${newHeight2}px`;
        }, i*0.4);
      }
    }
  }

  startSorting() {
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
  }

  render() {
    const {array} = this.state;

    return (
      <div>
        <div>
          <button onClick={()=>this.resetArray()}>Generate a new array</button>
          <select ref="sortingType">
            <option value="HeapSort">Heap Sort</option>
            <option value="BubbleSort">Bubble Sort</option>
            <option value="MergeSort">Merge Sort</option>
            <option value="QuickSort">Quick Sort</option>
            <option value="InsertionSort">Insertion Sort</option>
            <option value="SelectionSort">Selection Sort</option>
            <option value="RadixSort">Radix Sort</option>
          </select>
          <button onClick={()=>this.startSorting()}>Run Sorting</button>
          <hr></hr>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{height: `${value}px`}}></div>
            ))}
          <hr></hr>
        </div>
      </div>
      );
    }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}
