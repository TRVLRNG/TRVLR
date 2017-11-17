import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router-dom';

import Mainpage from './Mainpage.js'
import yelpApi from '../controllers/yelpApi'


// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerOpenRight from './DrawerOpenRight.js'


var that;
class Bigtable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mention: 'Pick',
      selection: ['SELECTION:'],
      first: 'international',
      second: 'domestic',
      saveit:
      {
        'cultural': false,
        'outdoors': false,
        "international": false,
        "domestic": false,
        "warm": false,
        "cold": false,
        "wine": false,
        "beer": false
      },
      getit: '',
      suggestion: '',
      firstpics: 'https://www.zicasso.com/sites/default/files/styles/original_scaled_down/public/cleanup/sampletrip/Greece_Santorini_Tour_Stairs_in_Santorini.jpg',
      secondpics: 'https://images.unsplash.com/photo-1429823040067-2c31b1d637ae',
      opendrawer: false
    };
    this.toggler = this.toggler.bind(this)
    this.toggle = this.toggle.bind(this)
    this.suggest = this.suggest.bind(this)
  }

  



  //SUGGEST FUNC SENDS REQUEST TO YELP API THROUGH YELP ROUTE
  suggest(loc) {
    that = this;
    axios.get('/yelpdata:location', {
      params: loc
    })
      .then(function (response) {
        console.log(that)
        that.setState({ suggestion: response.data })

      })
      .catch(function (error) {
        console.log(error);
      });
  }



  toggle(e) {
    e.preventDefault()
    let val = this.state.second
    if (this.state.second === 'domestic') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "domestic": true },
          selection: [...this.state.selection, 'Domestic'],
          first: 'cultural',
          second: 'outdoors',
          firstpics: 'https://images.unsplash.com/photo-1496393572465-93db1206b7c5',
          secondpics: 'https://images.unsplash.com/photo-1501028932887-da5de53af865'
        })
    }
    if (this.state.second === 'outdoors') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "outdoors": true },
          selection: [...this.state.selection, 'Outdoors'],         
          first: 'warm',
          second: 'cold',
          firstpics: 'https://images.unsplash.com/photo-1505388944068-75420a859303',
          secondpics: 'https://i.pinimg.com/736x/48/5e/23/485e2315368eacc660b9fe54ba45db1c--snow-covered-trees-winter-trees.jpg'
        })
    }
    if (this.state.second === 'cold') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "cold": true },
          selection: [...this.state.selection, 'Cold'],          
          first: 'wine',
          second: 'beer',
          firstpics: 'https://www.homemadeinterest.com/wp-content/uploads/2015/11/Wine-Pairing-Party_vertical-wine-bottles.jpg',
          secondpics: 'http://25.media.tumblr.com/16e0ac3a093bc0d27315e5c844eb7450/tumblr_mfm7gerPRU1qmstnqo1_500.jpg'
        })
    }
    if (this.state.second === 'beer') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "beer": true },
          selection: [...this.state.selection, 'Beer'],          
          mention: 'You should travel to...',
          first: '',
          second: '',
          firstpics: 'http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg',
          secondpics: 'http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg'

        })
    }
    if (this.state.second === 'thanks') {
      let newObj = this.state.saveit;
      Object.keys(newObj).forEach(function (key) {
        if (!newObj[key]) delete newObj[key]
      });
      that = this;
      axios.get('/query', {
        params: newObj
      })
        .then(function (response) {
          console.log(that)
          that.setState({ getit: response.data })
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }

  toggler(e) {
    e.preventDefault()
    let val = this.state.second
    if (this.state.first === 'international') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "international": true },
          selection: [...this.state.selection, 'International'],          
          first: 'cultural',
          second: 'outdoors',
          firstpics: 'https://images.unsplash.com/photo-1496393572465-93db1206b7c5',
          secondpics: 'https://images.unsplash.com/photo-1501028932887-da5de53af865'
        })

    }
    if (this.state.first === 'cultural') {
      this.setState(
        {
          saveit: { ...this.state.saveit, 'cultural': true },
          selection: [...this.state.selection, 'Culteral'],          
          first: 'warm',
          second: 'cold',
          firstpics: 'https://images.unsplash.com/photo-1505388944068-75420a859303',
          secondpics: 'https://i.pinimg.com/736x/48/5e/23/485e2315368eacc660b9fe54ba45db1c--snow-covered-trees-winter-trees.jpg'
        })
    }
    if (this.state.first === 'warm') {
      this.setState(
        {
          saveit: { ...this.state.saveit, 'warm': true },
          selection: [...this.state.selection, 'Warm'],          
          first: 'wine',
          second: 'beer',
          firstpics: 'https://www.homemadeinterest.com/wp-content/uploads/2015/11/Wine-Pairing-Party_vertical-wine-bottles.jpg',
          secondpics: 'http://25.media.tumblr.com/16e0ac3a093bc0d27315e5c844eb7450/tumblr_mfm7gerPRU1qmstnqo1_500.jpg'
        })
    }
    if (this.state.first === 'wine') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "wine": true },
          selection: [...this.state.selection, 'Wine'],          
          mention: 'You should travel to...',
          first: 'thanks',
          second: 'thanks',
          firstpics: "http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg",
          secondpics: "http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg"
        })
    }
    if (this.state.first === 'thanks') {
      let newObj = this.state.saveit;
      Object.keys(newObj).forEach(function (key) {
        if (!newObj[key]) delete newObj[key]
      });
      console.log(newObj);
      that = this
      axios.get('/query', {
        params: newObj

      })
    }
    if (this.state.first === 'wine') {
      this.setState(
        {
          saveit: { ...this.state.saveit, "wine": true },
          mention: 'Thank you!',
          first: '',
          second: '',
          firstpics: "http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg",
          secondpics: "http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/07/white-background-2.jpg"
        })
    }
    if (this.state.first === 'thanks') {
      let newObj = this.state.saveit;
      Object.keys(newObj).forEach(function (key) {
        if (!newObj[key]) delete newObj[key]
      });
      console.log(newObj);
      that = this
      axios.get('/query', {
        params: newObj
      })
        .then(function (response) {
          that.setState({ getit: response.data })
        })
        .catch(function (error) {
        });

    }
  }

  render() {
    console.log(this.state.selection);

    return (
      <div id='Bigtable'>
        <Mainpage
          mention={this.state.mention}
          first={this.state.first}
          second={this.state.second}
          toggle={this.toggle}
          toggler={this.toggler}
          firstpics={this.state.firstpics}
          secondpics={this.state.secondpics}
          data={this.state.getit}
          suggest={this.suggest}
          suggestions={this.state.suggestion}
        />
        <DrawerOpenRight selection={this.state.selection}/>

      </div>
    )
  }
}
export default Bigtable;