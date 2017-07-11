import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import jsonp from 'jsonp';
import $ from 'jquery';

class WaymarkTest extends Component {

  constructor(){
    super()
    this.state = {
      overTen : false,
      data : [],
      dataOriginal : [],
      initialized : false
    }
//       data : [
//     {
//       "Name": "lada",
//       "Id": 1,
//       "Age": 1
//     },
//     {
//       "Name": "lava",
//       "Id": 2,
//       "Age": 15
//     },
//     {
//       "Name": "lhannah",
//       "Id": 3,
//       "Age": 16
//     },
//     {
//       "Name": "lotto",
//       "Id": 4,
//       "Age": 9
//     },
//     {
//       "Name": "lanna",
//       "Id": 5,
//       "Age": 18
//     },
//     {
//       "Name": "reinier",
//       "Id": 6,
//       "Age": 20
//     },
//     {
//       "Name": "maham",
//       "Id": 7,
//       "Age": 22
//     },
//     {
//       "Name": "sahas",
//       "Id": 8,
//       "Age": 24
//     },
//     {
//       "Name": "emme",
//       "Id": 9,
//       "Age": 41
//     },
//     {
//       "Name": "aviva",
//       "Id": 10,
//       "Age": 8
//     }
//   ],
//   dataOriginal : [
//   {
//     "Name": "lada",
//     "Id": 1,
//     "Age": 1
//   },
//   {
//     "Name": "lava",
//     "Id": 2,
//     "Age": 15
//   },
//   {
//     "Name": "lhannah",
//     "Id": 3,
//     "Age": 16
//   },
//   {
//     "Name": "otto",
//     "Id": 4,
//     "Age": 9
//   },
//   {
//     "Name": "lanna",
//     "Id": 5,
//     "Age": 18
//   },
//   {
//     "Name": "reinier",
//     "Id": 6,
//     "Age": 20
//   },
//   {
//     "Name": "maham",
//     "Id": 7,
//     "Age": 22
//   },
//   {
//     "Name": "sahas",
//     "Id": 8,
//     "Age": 24
//   },
//   {
//     "Name": "emme",
//     "Id": 9,
//     "Age": 41
//   },
//   {
//     "Name": "aviva",
//     "Id": 10,
//     "Age": 8
//   }
// }
    this.reverseNames = this.reverseNames.bind(this)
    this.sortByAge = this.sortByAge.bind(this)
    this.reset = this.reset.bind(this)
    this.olderThanTen = this.olderThanTen.bind(this)
    this.saveFile = this.saveFile.bind(this)
    this.getData = this.getData.bind(this)
  }

  reverseNames(data){
    let newData = data.map(person => {
      let name = person.Name
      let arr = name.split('');
      let reverseArray = arr.reverse();
      let revString = reverseArray.join('')
      person.Name = revString
      return person
    })
    this.setState ({
      data: newData
    })
  }

  sortByAge(data){
    let newData = data.sort((a,b) => {
      // console.log('a.Age: ', a.Age)
      return a.Age - b.Age
      // parseInt(a.Age, 10) - parseInt(b.Age, 10)
    })
    this.setState ({
      data: newData
    })
  }
  olderThanTen(){
    if (this.state.overTen === true){
      this.setState ({
        overTen: false
      })
    } else
    {
      this.setState ({
        overTen: true
      })
    }
  }

  saveFile(data){
    let result
    function convertArrayOfObjectsToCSV(args) {
        var ctr, keys, columnDelimiter, lineDelimiter;

        // data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    }

    convertArrayOfObjectsToCSV(data)
    downloadCSV(result)

    function downloadCSV(result) {
        var filename, link;
        var csv = convertArrayOfObjectsToCSV({
            data: result
        });
        if (csv == null) return;

        filename = 'FEFIe123.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }

  }

  reset(){
    console.log('reset');
    let temp = this.state.dataOriginal.slice()
    console.log('temp: ', temp)
    this.setState({
      data : temp
    })
  }

  getData(){
    axios.get('/api/burgers')
    .then((response, error) => {
      console.log('response: ', response.data)
      console.log('error: ', error)
      let original = response.data.slice()
      this.setState({
        data : response.data,
        dataOriginal : original,
        initialized : true
      })
    })
  }

  render() {

    const { } = this.props;
    const { data, initialized } = this.state;

    if(!initialized){
      this.getData()
    }

let displayData

if (data.length === 0){
  displayData = <div className="dataEachOverTen" >No Data</div>
} else {
  if (this.state.overTen === false){
    displayData = data.map(person => {
      return(
        <div className="dataEach" key={person.Id}>
          Name : {person.Name} <br/>
          Id : {person.Id} <br/>
          Age : {person.Age} <br/>
        </div>
      )
    })
  } else {
    displayData = data.map(person => {
      if (person.Age > 10){
        return(
          <div className="dataEachOverTen" key={person.Id}>
            Name : {person.Name} <br/>
            Id : {person.Id} <br/>
            Age : {person.Age} <br/>
          </div>
        )
      } else {
        return(
          <div className="dataEach" key={person.Id}>
            Name : {person.Name} <br/>
            Id : {person.Id} <br/>
            Age : {person.Age} <br/>
          </div>
        )
      }
    })
  }
}

    return (
      <div className="waymarkBox">
        <div className="headerText">
          Data
        </div>
        <div className="buttonBox">
          <div className="waymarkButton" onClick={() => this.getData()}>
            <div className="waymarkButtonText">Get Data</div>
          </div>
          <div className="waymarkButton" onClick={() => this.reverseNames(data)}>
            <div className="waymarkButtonText">Reverse Names</div>
          </div>
          <div className="waymarkButton" onClick={() => this.sortByAge(data)}>
            <div className="waymarkButtonText">Sort by Age</div>
          </div>
          <div className="waymarkButton" onClick={() => this.olderThanTen()}>
            <div className="waymarkButtonText">Older Than 10</div>
          </div>
          <div className="waymarkButton" onClick={() => this.saveFile(data)}>
            <div className="waymarkButtonText">Save File</div>
          </div>
        </div>
        <div className="dataDisplay">
          {displayData}
        </div>
        <div className="buttonBox">
          <div className="waymarkButtonReset" onClick={() => this.reset()}>
            <div className="waymarkButtonText">Reset</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(WaymarkTest);
