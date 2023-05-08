<script>
<<<<<<< HEAD
import Scatterplot from './scatterplot.svelte';
import data2 from './data.js';

  export let data;
  const { cars, POIs } = data;

  const cars_coord = cars.map(coords=>{
    return {
      x:coords.lat,
      y:coords.long
    }
  })

  const poi_coord = POIs.map(coords=>{
    return {
      x:coords.lat,
      y:coords.long,
      name:coords.type
    }
  })
=======
import * as d3 from "d3";

import CarFilter from "./CarFilter";
export let data;

const { Cars, POIs, Stop } = data;
const all=["All"];

import _ from 'lodash';
 let idList = Cars.map(obj => obj.car_id)
 let uniqueIDs = _.uniq(idList);

 let selected = "All";
	    let options=all.concat(uniqueIDs);

// $:console.log(selected)
// $:console.log(CarFilter.CarTrackSelect(Cars,selected))
// $:console.log(CarFilter.CarTrackNonSelect(Cars,selected))

// import SPCNS from "./SPCNS";
// $:SPCNS(CarFilter.CarTrackNonSelect(Cars,selected));

// import SPCS from "./SPCS";
// $:SPCS(CarFilter.CarTrackSelect(Cars,selected));
import SP from "./SP";
$:SP(CarFilter.CarTrackNonSelect(Cars,selected),
CarFilter.CarTrackSelect(Cars,selected),POIs)
>>>>>>> 1bf77556a8daf34ad90788b138b237a79ad8f86d



</script>

<h1>Kendall Brown - KU Leuven - r0773111</h1>
<<<<<<< HEAD
<p>Overview</p>


<Scatterplot points={cars_coord}/>
=======
<h2>
  Overview
</h2>
<p>
	Select Car to Highlight
	<select bind:value={selected}>
		{#each options as value}<option {value}>{value}</option>{/each}
	</select>
</p>
>>>>>>> 1bf77556a8daf34ad90788b138b237a79ad8f86d
