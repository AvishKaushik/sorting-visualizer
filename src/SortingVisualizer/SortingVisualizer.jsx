import React , {Component} from 'react';
import './SortingVisualizer.css';
import MergeSorting from '../SortingAlgorithms/MergeSort.js';
import QuickSorting from '../SortingAlgorithms/QuickSort.js';
import BubbleSorting from '../SortingAlgorithms/BubbleSort.js';
import HeapSorting from '../SortingAlgorithms/HeapSort.js';


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

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        <button onClick={()=>this.resetArray()}>Generate a new array</button>
        <button onClick={()=>this.mergeSort()}>Merge Sort</button>
        <button onClick={()=>this.quickSort()}>Quick Sort</button>
        <button onClick={()=>this.heapSort()}>Heap Sort</button>
        <button onClick={()=>this.bubbleSort()}>Bubble Sort</button>
        <hr></hr>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{height: `${value}px`}}></div>
          ))}
        <hr></hr>
      </div>
      );
    }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}
