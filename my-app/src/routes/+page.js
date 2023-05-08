export const load = async () => {

    const fetchCars = async () => {   
        const productRes = await fetch('https://vda-lab.github.io/assets/vast2021_gps_coordinates.json')
        const productData = await productRes.json()
        return productData
    }

    const fetchPOI = async () => {   
        const productRes = await fetch('https://vda-lab.github.io/assets/vast2021_businesses.json')
        const productData = await productRes.json()
        return productData
    }

<<<<<<< HEAD
    return {
       cars: fetchCars(),
       POIs: fetchPOI()
=======
    const fetchStop = async () => {   
        const productRes = await fetch('https://vda-lab.github.io/assets/vast2021_carstops.json')
        const productData = await productRes.json()
        return productData
    }

    return {
       Cars: fetchCars(),
       POIs: fetchPOI(),
       Stop: fetchStop()
>>>>>>> 1bf77556a8daf34ad90788b138b237a79ad8f86d
    }


}