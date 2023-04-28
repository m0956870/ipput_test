// import logo from './logo.svg';
// import './App.css';

// function App() {

//   return (
//     <>
//       <div id="datepicker">app</div>

//       <label for="checkin">app Checkin</label>
//       <input type="text" name="checkin" id="checkin" placeholder=" Check in" />

//       <label for="checkout">app Checkout</label>
//       <input type="text" name="checkout" id="checkout" placeholder=" Check out" />
//     </>
//   );
// }

// export default App;

import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const s = document.createElement('script');
    // s.type = 'text/javascript';
    // s.async = true;
    // // s.innerHTML = `
    // // $(document).ready(function () {
    // //   $("#checkin").datepicker();
    // //   $("#checkout").datepicker();
    // // })`;
    // s.innerHTML = `
    // moment().format();
    // `;
    // this.instance.appendChild(s);
  }

  inputHandle(e) {
    console.log(e.target.value)
    alert(e.target.value)
  }

  render() {
    return <div ref={el => (this.instance = el)}>

      <label for="checkin">app Checkin</label>
      <input
        type="date"
        onChange={this.inputHandle}
        // onClick={e => e.target.type = "date"}
        // onBlur={e => e.target.type = "date"}
        placeholder="Check in"
      />

      <label for="checkout">app Checkout</label>
      <input
        type="date"
        onChange={this.inputHandle}
        // onClick={e => e.target.type = "date"}
        // onBlur={e => e.target.type = "date"}
        placeholder="Check out"
      />
    </div>;
  }
}
